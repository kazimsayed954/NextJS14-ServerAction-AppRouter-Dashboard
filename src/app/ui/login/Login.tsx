"use client";
import { authenticate } from "@/app/lib/actions";
import styles from "./login.module.css";
import { useState } from "react";
import { useFormState } from "react-dom";

const Login = () => {
  // const [err,setErr] = useState(null);
  const [state,formAction] = useFormState(authenticate,undefined)
 
  return (
    <div className={styles.container}>
      <form action={formAction} className={styles.form}>
        <h1>Login</h1>
        <input type="text" placeholder="username" name="username" />
        <input type="password" placeholder="password" name="password" />
        <button>Login</button>
        {state && state}
      </form>
     
    </div>
  );
};

export default Login;
