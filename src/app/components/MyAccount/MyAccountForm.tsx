// "use client";
// import { useState } from "react";
// import Login from "../Login/Login";
// import SignUp from "../SignUp/SignUp";
// import style from "./MyAccountForm.module.css";

// export default function MyAccountForm() {
//   const [isLogin, setIsLogin] = useState(true);

//   return (
//     <div className={style.formContainer}>
//       {/* Tabs for Login & Signup */}
//       <div className={style.tabs}>
//         <button
//           className={`${style.tab} ${isLogin ? style.active : ""}`}
//           onClick={() => setIsLogin(true)}
//         >
//           Login
//         </button>
//         <button
//           className={`${style.tab} ${!isLogin ? style.active : ""}`}
//           onClick={() => setIsLogin(false)}
//         >
//           Sign Up
//         </button>
//       </div>

//       {/* Show Login or SignUp Form */}
//       {isLogin ? <Login /> : <SignUp />}
//     </div>
//   );
// }

"use client";
import { useState } from "react";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";
import style from "./MyAccountForm.module.css";

export default function MyAccountForm() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className={style.container}>
      {/* Breadcrumb Navigation */}
      <nav className={style.breadcrumb}>
        <span>Home</span> &gt; <span>My Account</span>
      </nav>

      <div className={style.formContainer}>
        {/* Tabs for Login & Signup */}
        <div className={style.tabs}>
          <button
            className={`${style.tab} ${isLogin ? style.active : ""}`}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            className={`${style.tab} ${!isLogin ? style.active : ""}`}
            onClick={() => setIsLogin(false)}
          >
            Sign Up
          </button>
        </div>

        {/* Show Login or SignUp Form */}
        {isLogin ? <Login /> : <SignUp />}
      </div>
    </div>
  );
}
