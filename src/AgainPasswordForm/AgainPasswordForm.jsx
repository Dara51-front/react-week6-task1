import styles from "../App/app.module.css";
import { useState } from "react";

function AgainPasswordFormLayout({
  againPassword,
  setAgainPassword,
  againPasswordError,
  setAgainPasswordError,
  password,
}) {
  const onAgainPasswordChange = ({ target }) => {
    setAgainPassword(target.value);
    if (target.value !== password && target.value !== "") {
      setAgainPasswordError("Пароли не совпадают");
    } else if (
      target.value === password ||
      target.value === "" ||
      password === ""
    ) {
      setAgainPasswordError("");
    }
  };

  return (
    <>
      <input
        className={styles.form}
        type="text"
        name="againPassword"
        placeholder="Еще раз пароль"
        value={againPassword}
        onChange={onAgainPasswordChange}
      />

      <div className={styles.error}>{againPasswordError}</div>
    </>
  );
}

export default function AgainPasswordForm({
  againPassword,
  setAgainPassword,
  againPasswordError,
  setAgainPasswordError,
  password,
}) {
  return (
    <AgainPasswordFormLayout
      againPassword={againPassword}
      setAgainPassword={setAgainPassword}
      againPasswordError={againPasswordError}
      setAgainPasswordError={setAgainPasswordError}
      password={password}
    />
  );
}
