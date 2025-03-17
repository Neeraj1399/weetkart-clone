// "use client";
// import { useState } from "react";
// import { FaUser, FaKey, FaEnvelope } from "react-icons/fa";
// import { MdVisibility, MdVisibilityOff } from "react-icons/md";
// import styles from "./SignUp.module.css";

// export default function SignUp() {
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

//   return (
//     <div className={styles.formContainer}>
//       <h2>Sign Up</h2>
//       <div className={styles.inputGroup}>
//         <FaEnvelope />
//         <input type="email" placeholder="Email" />
//       </div>
//       <div className={styles.inputGroup}>
//         <FaUser />
//         <input type="text" placeholder="First Name" />
//       </div>
//       <div className={styles.inputGroup}>
//         <FaUser />
//         <input type="text" placeholder="Last Name" />
//       </div>
//       <div className={styles.inputGroup}>
//         <FaKey />
//         <input
//           type={showPassword ? "text" : "password"}
//           placeholder="Password"
//         />
//         {showPassword ? (
//           <MdVisibilityOff onClick={() => setShowPassword(false)} />
//         ) : (
//           <MdVisibility onClick={() => setShowPassword(true)} />
//         )}
//       </div>
//       <div className={styles.inputGroup}>
//         <FaKey />
//         <input
//           type={showConfirmPassword ? "text" : "password"}
//           placeholder="Confirm Password"
//         />
//         {showConfirmPassword ? (
//           <MdVisibilityOff onClick={() => setShowConfirmPassword(false)} />
//         ) : (
//           <MdVisibility onClick={() => setShowConfirmPassword(true)} />
//         )}
//       </div>
//       <button className={styles.submitButton}>Sign Up</button>
//     </div>
//   );
// }

"use client";
import { useState } from "react";
import { FaUser, FaEnvelope, FaKey } from "react-icons/fa";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./SignUp.module.css";

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
    acceptTerms: false,
  });

  // Handle Input Change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Handle Form Submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const validationSteps = [
      { condition: !formData.email, message: "Email is required!" },
      { condition: !formData.firstName, message: "First Name is required!" },
      { condition: !formData.lastName, message: "Last Name is required!" },
      { condition: !formData.password, message: "Password is required!" },
      {
        condition: formData.password.length < 6,
        message: "Password must be at least 6 characters.",
      },
      {
        condition: !/[a-z]/.test(formData.password),
        message: "Password must contain a lowercase letter.",
      },
      {
        condition: !/[A-Z]/.test(formData.password),
        message: "Password must contain an uppercase letter.",
      },
      {
        condition: !/[\W_]/.test(formData.password),
        message: "Password must contain a special character.",
      },
      {
        condition: formData.password !== formData.confirmPassword,
        message: "Passwords do not match!",
      },
      {
        condition: !formData.acceptTerms,
        message: "You must accept the Terms of Service!",
      },
    ];

    for (const step of validationSteps) {
      if (step.condition) {
        toast.error(step.message);
        return;
      }
    }

    toast.success("Sign Up Successful! 🎉");
  };

  return (
    <form className={styles.formContainer} onSubmit={handleSubmit}>
      <ToastContainer position="top-center" autoClose={2000} />

      <h2>Sign Up</h2>

      {/* Email */}
      <div className={styles.inputGroup}>
        <span className={styles.iconWrapper}>
          <FaEnvelope className={styles.icon} />
        </span>
        <input
          type="email"
          name="email"
          placeholder="Email"
          className={styles.inputField}
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      {/* First & Last Name */}
      <div className={styles.nameContainer}>
        <div className={styles.inputGroup}>
          <span className={styles.iconWrapper}>
            <FaUser className={styles.icon} />
          </span>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            className={styles.inputField}
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>

        <div className={styles.inputGroup}>
          <span className={styles.iconWrapper}>
            <FaUser className={styles.icon} />
          </span>
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            className={styles.inputField}
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
      </div>

      {/* Password */}
      <div className={styles.inputGroup}>
        <span className={styles.iconWrapper}>
          <FaKey className={styles.icon} />
        </span>
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          placeholder="Password"
          className={styles.inputField}
          value={formData.password}
          onChange={handleChange}
        />
        <span
          className={styles.visibilityIcon}
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <MdVisibilityOff /> : <MdVisibility />}
        </span>
      </div>

      {/* Confirm Password */}
      <div className={styles.inputGroup}>
        <span className={styles.iconWrapper}>
          <FaKey className={styles.icon} />
        </span>
        <input
          type={showConfirmPassword ? "text" : "password"}
          name="confirmPassword"
          placeholder="Confirm Password"
          className={styles.inputField}
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        <span
          className={styles.visibilityIcon}
          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
        >
          {showConfirmPassword ? <MdVisibilityOff /> : <MdVisibility />}
        </span>
      </div>

      {/* Terms & Conditions */}
      <div className={styles.termsContainer}>
        <input
          type="checkbox"
          name="acceptTerms"
          checked={formData.acceptTerms}
          onChange={handleChange}
        />
        <label>
          I accept the <a href="#">Terms of Service</a> and{" "}
          <a href="#">Privacy Policy</a>
        </label>
      </div>

      {/* Submit Button */}
      <button className={styles.submitButton} type="submit">
        Sign Up
      </button>
    </form>
  );
}
