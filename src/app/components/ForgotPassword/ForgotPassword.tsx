// "use client";
// import { useState } from "react";
// import style from "./ForgotPassword.module.css";

// interface ForgotPasswordProps {
//   onBack: () => void;
// }

// export default function ForgotPassword({ onBack }: ForgotPasswordProps) {
//   const [email, setEmail] = useState("");

//   const handleResetPassword = () => {
//     alert(`Password reset link sent to ${email}`);
//   };

//   return (
//     <div className={style.forgotContainer}>
//       <h2>Forgot Password</h2>
//       <p>Enter your email address to reset your password.</p>
//       <input
//         type="email"
//         placeholder="Enter your email"
//         className={style.inputField}
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <button className={style.resetButton} onClick={handleResetPassword}>
//         Send Reset Link
//       </button>
//       <button className={style.backButton} onClick={onBack}>
//         Back to Login
//       </button>
//     </div>
//   );
// }

import React, { useState } from "react";
import style from "./ForgotPassword.module.css";

interface ForgotPasswordProps {
  onBack: () => void;
}

export default function ForgotPassword({ onBack }: ForgotPasswordProps) {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Password reset email sent to:", email);
  };

  return (
    <div className={style.forgotPasswordContainer}>
      {/* <h2 className={style.title}>Reset Password</h2> */}
      <p className={style.description}>
        Lost your password? Please enter your username or email address. You
        will receive a link to create a new password via email.
      </p>

      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={style.inputField}
      />

      <button onClick={handleSubmit} className={style.submitButton}>
        Send Reset Link
      </button>
      {/* 
      <button onClick={onBack} className={style.backButton}>
        Back to Login
      </button> */}
    </div>
  );
}
