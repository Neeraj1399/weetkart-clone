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
import { FaUser, FaKey, FaEnvelope } from "react-icons/fa";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import styles from "./SignUp.module.css";

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className={styles.formContainer}>
      <h2>Sign Up</h2>

      {/* Email */}
      <div className={styles.inputGroup}>
        <span className={styles.iconWrapper}>
          <FaEnvelope className={styles.icon} />
        </span>
        <input type="email" placeholder="Email" className={styles.inputField} />
      </div>

      {/* First Name & Last Name */}
      <div className={styles.nameContainer}>
        <div className={styles.inputGroup}>
          <span className={styles.iconWrapper}>
            <FaUser className={styles.icon} />
          </span>
          <input
            type="text"
            placeholder="First Name"
            className={styles.inputField}
          />
        </div>

        <div className={styles.inputGroup}>
          <span className={styles.iconWrapper}>
            <FaUser className={styles.icon} />
          </span>
          <input
            type="text"
            placeholder="Last Name"
            className={styles.inputField}
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
          placeholder="Password"
          className={styles.inputField}
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
          placeholder="Confirm Password"
          className={styles.inputField}
        />
        <span
          className={styles.visibilityIcon}
          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
        >
          {showConfirmPassword ? <MdVisibilityOff /> : <MdVisibility />}
        </span>
      </div>

      {/* Terms & Conditions */}
      <div className={styles.terms}>
        <input type="checkbox" id="terms" />
        <label htmlFor="terms">
          I accept the Terms of Service and Privacy Policy
        </label>
      </div>

      {/* Sign Up Button */}
      <button className={styles.submitButton}>Sign Up</button>
    </div>
  );
}
