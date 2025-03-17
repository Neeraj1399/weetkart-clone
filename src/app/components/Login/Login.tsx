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

// "use client";
// import { useState } from "react";
// import { useForm } from "react-hook-form";
// import { FaUserPlus, FaKey } from "react-icons/fa";
// import { MdVisibility, MdVisibilityOff } from "react-icons/md";
// import ForgotPassword from "../ForgotPassword/ForgotPassword";
// import style from "./Login.module.css";

// // Define TypeScript types for form inputs
// type LoginFormInputs = {
//   username: string;
//   password: string;
//   rememberMe?: boolean;
// };

// export default function Login() {
//   const [showPassword, setShowPassword] = useState(false);
//   const [forgotPassword, setForgotPassword] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [loginError, setLoginError] = useState<string | null>(null);

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<LoginFormInputs>();

//   // Function to handle login submission
//   const onSubmit = async (data: LoginFormInputs) => {
//     setLoading(true);
//     setLoginError(null);

//     try {
//       const response = await fetch("https://dummyjson.com/auth/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           username: data.username,
//           password: data.password,
//         }),
//       });

//       const result = await response.json();

//       if (!response.ok) {
//         throw new Error(result.message || "Invalid credentials");
//       }

//       // Store token & user info (for session persistence)
//       if (data.rememberMe) {
//         localStorage.setItem("user", JSON.stringify(result));
//       } else {
//         sessionStorage.setItem("user", JSON.stringify(result));
//       }

//       console.log("Login Successful:", result);
//       alert("Login Successful!");

//       // Redirect or navigate to another page (if needed)
//       // window.location.href = "/dashboard"; // Example redirection
//     } catch (error: any) {
//       setLoginError(error.message || "Something went wrong. Try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className={style.formContainer}>
//       {!forgotPassword ? (
//         <form onSubmit={handleSubmit(onSubmit)}>
//           {/* Username Input */}
//           <div className={style.inputGroup}>
//             <span className={style.iconWrapper}>
//               <FaUserPlus className={style.icon} />
//             </span>
//             <input
//               type="text"
//               placeholder="Username / Email"
//               className={style.inputField}
//               {...register("username", {
//                 required: "Username/Email is required",
//               })}
//             />
//             {errors.username && (
//               <p className={style.error}>{errors.username.message}</p>
//             )}
//           </div>

//           {/* Password Input with Validation */}
//           <div className={style.inputGroup}>
//             <span className={style.iconWrapper}>
//               <FaKey className={style.icon} />
//             </span>
//             <input
//               type={showPassword ? "text" : "password"}
//               placeholder="Password"
//               className={style.inputField}
//               {...register("password", {
//                 required: "Password is required",
//                 minLength: {
//                   value: 8,
//                   message: "Password must be at least 8 characters",
//                 },
//                 pattern: {
//                   value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/,
//                   message:
//                     "Password must contain uppercase, lowercase, number & special character",
//                 },
//               })}
//             />
//             <span
//               className={style.visibilityIcon}
//               onClick={() => setShowPassword(!showPassword)}
//             >
//               {showPassword ? <MdVisibilityOff /> : <MdVisibility />}
//             </span>
//             {errors.password && (
//               <p className={style.error}>{errors.password.message}</p>
//             )}
//           </div>

//           {/* Error Message */}
//           {loginError && <p className={style.error}>{loginError}</p>}

//           {/* Remember Me & Forgot Password */}
//           <div className={style.rememberMe}>
//             <label>
//               <input type="checkbox" {...register("rememberMe")} /> Remember me
//             </label>
//             <span
//               className={style.forgotPassword}
//               onClick={() => setForgotPassword(true)}
//               style={{ cursor: "pointer", color: "black" }}
//             >
//               Forgot Password?
//             </span>
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className={style.submitButton}
//             disabled={loading}
//           >
//             {loading ? "Signing in..." : "SIGN IN"}
//           </button>
//         </form>
//       ) : (
//         <ForgotPassword />
//       )}
//     </div>
//   );
// }
"use client";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { FaUserPlus, FaKey } from "react-icons/fa";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ForgotPassword from "../ForgotPassword/ForgotPassword";
import style from "./Login.module.css";

type LoginFormInputs = {
  username: string;
  password: string;
  rememberMe?: boolean;
};

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [forgotPassword, setForgotPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [displayedError, setDisplayedError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();

  const notifyError = (message: string) => {
    toast.error(message, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: true,
    });
  };

  useEffect(() => {
    if (errors.username) {
      setDisplayedError(errors.username.message as string);
    } else if (errors.password) {
      setDisplayedError(errors.password.message as string);
    } else {
      setDisplayedError(null);
    }
  }, [errors.username, errors.password]);

  useEffect(() => {
    if (displayedError) {
      notifyError(displayedError);
    }
  }, [displayedError]);

  const onSubmit = async (data: LoginFormInputs) => {
    setLoading(true);

    try {
      const response = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: data.username,
          password: data.password,
        }),
      });

      const result = await response.json();
      if (!response.ok)
        throw new Error(result.message || "Invalid credentials");

      if (data.rememberMe) {
        localStorage.setItem("user", JSON.stringify(result));
      } else {
        sessionStorage.setItem("user", JSON.stringify(result));
      }

      toast.success("Login Successful!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
      });
    } catch (error) {
      notifyError(
        error instanceof Error
          ? error.message
          : "Something went wrong. Try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={style.formContainer}>
      <ToastContainer />
      {!forgotPassword ? (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={style.inputGroup}>
            <span className={style.iconWrapper}>
              <FaUserPlus className={style.icon} />
            </span>
            <input
              type="text"
              placeholder="Username / Email"
              className={style.inputField}
              {...register("username", {
                required: "Username or Email is required",
              })}
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
              {...register("password", { required: "Password is required" })}
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
              <input type="checkbox" {...register("rememberMe")} /> Remember me
            </label>
            <span
              className={style.forgotPassword}
              onClick={() => setForgotPassword(true)}
              style={{ cursor: "pointer", color: "black" }}
            >
              Forgot Password?
            </span>
          </div>

          <button
            type="submit"
            className={style.submitButton}
            disabled={loading}
          >
            {loading ? "Signing in..." : "SIGN IN"}
          </button>
        </form>
      ) : (
        <ForgotPassword />
      )}
    </div>
  );
}
