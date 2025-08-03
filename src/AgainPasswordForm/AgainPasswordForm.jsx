import styles from "../App/app.module.css";
import { useState } from "react";

function AgainPasswordFormLayout({ userData, errorValidate }) {
  const onAgainPasswordChange = ({ target }) => {
    userData.againPassword.setUserData(target.value);
    if (target.value !== userData.password && target.value !== "") {
      userData.againPasswordError.setErrorValidate("Пароли не совпадают");
    } else if (
      target.value === userData.password ||
      target.value === "" ||
      userData.password === ""
    ) {
      userData.againPasswordError.setErrorValidate("");
    }
  };

  return (
    <>
      <input
        className={styles.form}
        type="text"
        name="againPassword"
        placeholder="Еще раз пароль"
        value={userData.againPassword}
        onChange={onAgainPasswordChange}
      />

      <div className={styles.error}>{errorValidate.againPasswordError}</div>
    </>
  );
}

export default function AgainPasswordForm({ name, label, error, ...props }) {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input name={name} {...props} />

      {error && <div className={styles.error}>{error}</div>}
    </>
  );
}
