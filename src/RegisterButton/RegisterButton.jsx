import styles from "./registerButton.module.css";
import { useEffect } from "react";

function RegisterButtonLayout({
  email,
  emailError,
  password,
  passwordError,
  againPassword,
  againPasswordError,
  isDisabled,
  setisDisabled,
  submitButtonRef,
}) {
  const activeAndFocusButtom =
    email !== "" &&
    emailError === "" &&
    password !== "" &&
    passwordError === "" &&
    againPassword !== "" &&
    againPasswordError === "" &&
    againPassword === password;

  useEffect(() => {
    if (activeAndFocusButtom) {
      submitButtonRef.current.focus();
      setisDisabled(false);
    } else {
      setisDisabled(true);
    }
  });

  return (
    <>
      <button
        ref={submitButtonRef}
        className={styles.registerButton}
        type="submit"
        disabled={isDisabled}
      >
        Зарегистрироваться
      </button>
    </>
  );
}

export default function RegisterButton({
  email,
  emailError,
  password,
  passwordError,
  againPassword,
  againPasswordError,
  isDisabled,
  setisDisabled,
  submitButtonRef,
}) {
  return (
    <RegisterButtonLayout
      email={email}
      emailError={emailError}
      password={password}
      passwordError={passwordError}
      againPassword={againPassword}
      againPasswordError={againPasswordError}
      isDisabled={isDisabled}
      setisDisabled={setisDisabled}
      submitButtonRef={submitButtonRef}
    />
  );
}
