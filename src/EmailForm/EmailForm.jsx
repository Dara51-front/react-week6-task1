import styles from "../App/app.module.css";
import { useState } from "react";

export default function EmailForm({
  email,
  setEmail,
  emailError,
  setEmailError,
}) {
  return (
    <EmailFormLayout
      email={email}
      setEmail={setEmail}
      emailError={emailError}
      setEmailError={setEmailError}
    />
  );
}

function EmailFormLayout({ email, setEmail, emailError, setEmailError }) {
  const onEmailChange = ({ target }) => {
    setEmail(target.value.trim());
    if (
      /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/.test(
        target.value
      ) ||
      target.value === ""
    ) {
      setEmailError("");
    }
  };

  const onEmailError = ({ target }) => {
    if (
      !/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/.test(
        target.value
      ) &&
      target.value !== ""
    ) {
      setEmailError("Неверный формат Е-mail");
    }
  };

  return (
    <>
      <input
        className={styles.form}
        name="email"
        type="text"
        value={email}
        placeholder="E-mail"
        onChange={onEmailChange}
        onBlur={onEmailError}
      />
      <div className={styles.error}>{emailError}</div>
    </>
  );
}
