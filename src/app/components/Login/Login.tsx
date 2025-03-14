// "use client";
// import { useState } from "react";
// import { FaUserPlus, FaKey } from "react-icons/fa";
// import { MdVisibility, MdVisibilityOff } from "react-icons/md";
// import style from "./Login.module.css";

// export default function Login() {
//   const [showPassword, setShowPassword] = useState(false);

//   return (
//     <div className={style.formContainer}>
//       <div className={style.inputGroup}>
//         <span className={style.iconWrapper}>
//           <FaUserPlus className={style.icon} />
//         </span>
//         <input
//           type="text"
//           placeholder="Username / Email"
//           className={style.inputField}
//         />
//       </div>

//       <div className={style.inputGroup}>
//         <span className={style.iconWrapper}>
//           <FaKey className={style.icon} />
//         </span>
//         <input
//           type={showPassword ? "text" : "password"}
//           placeholder="Password"
//           className={style.inputField}
//         />
//         <span
//           className={style.visibilityIcon}
//           onClick={() => setShowPassword(!showPassword)}
//         >
//           {showPassword ? <MdVisibilityOff /> : <MdVisibility />}
//         </span>
//       </div>

//       <div className={style.rememberMe}>
//         <label>
//           <input type="checkbox" /> Remember me
//         </label>
//         <span className={style.forgotPassword}>Forgot Password?</span>
//       </div>

//       <button className={style.submitButton}>SIGN IN</button>
//     </div>
//   );
// }

"use client";
import { useState } from "react";
import { FaUserPlus, FaKey } from "react-icons/fa";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import ForgotPassword from "../ForgotPassword/ForgotPassword"; // Import ForgotPassword component
import style from "./Login.module.css";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [forgotPassword, setForgotPassword] = useState(false);

  return (
    <div className={style.formContainer}>
      {!forgotPassword ? (
        <>
          <div className={style.inputGroup}>
            <span className={style.iconWrapper}>
              <FaUserPlus className={style.icon} />
            </span>
            <input
              type="text"
              placeholder="Username / Email"
              className={style.inputField}
            />
          </div>

          <div className={style.inputGroup}>
            <span className={style.iconWrapper}>
              <FaKey className={style.icon} />
            </span>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className={style.inputField}
            />
            <span
              className={style.visibilityIcon}
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <MdVisibilityOff /> : <MdVisibility />}
            </span>
          </div>

          <div className={style.rememberMe}>
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <span
              className={style.forgotPassword}
              onClick={() => setForgotPassword(true)}
              style={{ cursor: "pointer", color: "black" }}
            >
              Forgot Password?
            </span>
          </div>

          <button className={style.submitButton}>SIGN IN</button>
        </>
      ) : (
        <ForgotPassword />
      )}
    </div>
  );
}
