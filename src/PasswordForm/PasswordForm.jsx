import styles from "../App/app.module.css";
import { useState } from "react";

export default function PasswordForm({ name, label, error, ...props }) {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input name={name} {...props} />
      {error && <div className={styles.error}>{error}</div>}
    </>
  );
}
