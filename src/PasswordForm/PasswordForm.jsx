import styles from "../App/app.module.css";
import { useState } from "react";

function PasswordFormLayout({
  password,
  setPassword,
  passwordError,
  setPasswordError,
  againPassword,
  setAgainPasswordError,
}) {
  const onPasswordChange = ({ target }) => {
    setPassword(target.value.trim());
    if (!/^[\w_]*$/.test(target.value) && target.value !== "") {
      setPasswordError(
        "Можно использовать только буквы, цифры и знак нижнего подчеркивания"
      );
    } else if (
      /^[\w_]*$/.test(target.value) ||
      target.value === "" ||
      target.value === againPassword
    ) {
      setPasswordError("");
    }
  };

  const onPasswordError = ({ target }) => {
    if (target.value !== againPassword && target.value !== "") {
      setAgainPasswordError("Пароли не совпадают");
    } else if (target.value === againPassword) {
      setAgainPasswordError("");
    }
  };

  return (
    <>
      <input
        className={styles.form}
        name="password"
        type="text"
        value={password}
        placeholder="Пароль"
        onChange={onPasswordChange}
        onBlur={onPasswordError}
      />
      <div className={styles.error}>{passwordError}</div>
    </>
  );
}

export default function PasswordForm({ name, label, error, ...props }) {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input name={name} {...props} />
      {error && <div className={styles.error}>{error}</div>}
    </>
  );
}
