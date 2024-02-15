"use client";
import styles from "../../../../_components/Form/Form.module.scss";
import { useState } from "react";
import Link from "next/link";

export default function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your sign-in logic here
    console.log({ email, password });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h3 className={styles.formTitle}>Welcome</h3>
      <p>
        Don't have an account?{" "}
        <Link className={styles.link} href="/create-account">
          Sign up
        </Link>
      </p>
      <br />
      <label className={styles.label}> Email
        <input
          className={styles.input}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <br />
      <label className={styles.label}> Password
        <input
          className={styles.input}
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
      <br />
      <br />
      <p>
        Forgot Password?{" "}
        <Link className={styles.link} href="/forgot-password">
          Reset Password
        </Link>
      </p>
      <br />
      <br />
      <button className={styles.submit} type="submit">
        <Link href="/dashboard"> Sign In </Link>
      </button>
    </form>
  );
}
