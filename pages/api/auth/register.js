import { connectToDatabase } from "../../../utils/mongodb"; // Utility to connect to MongoDB
import bcrypt from "bcryptjs"; // For hashing passwords
import jwt from "jsonwebtoken"; // For generating tokens

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { email, firstName, lastName, password, confirmPassword } =
        req.body;

      // Validation (ensure passwords match)
      if (password !== confirmPassword) {
        return res.status(400).json({ message: "Passwords do not match." });
      }

      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Connect to MongoDB
      const { db } = await connectToDatabase();

      // Check if user already exists
      const user = await db.collection("users").findOne({ email });
      if (user) {
        return res.status(400).json({ message: "User already exists." });
      }

      // Insert the new user
      await db.collection("users").insertOne({
        email,
        firstName,
        lastName,
        password: hashedPassword,
      });

      // Generate a JWT token
      const token = jwt.sign({ email }, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });

      // Return response
      res.status(201).json({ message: "User registered successfully.", token });
    } catch (error) {
      console.error("Registration Error:", error); // This logs the error to terminal
      res.status(500).json({ message: "Internal server error" }); // Don't send the raw error to client
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
