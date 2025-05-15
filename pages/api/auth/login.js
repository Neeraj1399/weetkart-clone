// pages/api/auth/login.js
import { connectToDatabase } from "../../../utils/mongodb"; // MongoDB connection utility
import bcrypt from "bcryptjs"; // For password hashing
import jwt from "jsonwebtoken"; // For JWT generation

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { email, password } = req.body;

      // Connect to MongoDB
      const { db } = await connectToDatabase();

      // Find the user in the database
      const user = await db.collection("users").findOne({ email });

      if (!user) {
        return res.status(400).json({ message: "Invalid credentials." });
      }

      // Compare the password with the hashed password stored in the database
      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (!isPasswordValid) {
        return res.status(400).json({ message: "Invalid credentials." });
      }

      // Generate a JWT token
      const token = jwt.sign({ email }, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });

      // Return the response with the token
      res.status(200).json({ message: "Login successful.", token });
    } catch (error) {
      res.status(500).json({ message: "Internal server error", error });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
