import { useState } from "react";
import { useRef } from "react";
import AgainPasswordForm from "../AgainPasswordForm/AgainPasswordForm";
import EmailForm from "../EmailForm/EmailForm";
import PasswordForm from "../PasswordForm/PasswordForm";
import RegisterButton from "../RegisterButton/RegisterButton";
import styles from "./app.module.css";

export default function App({}) {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [againPassword, setAgainPassword] = useState("");
  const [againPasswordError, setAgainPasswordError] = useState("");
  const [isDisabled, setisDisabled] = useState(true);
  const submitButtonRef = useRef(null);

  const onSubmit = (event) => {
    event.preventDefault();
    let formsData = {};
    formsData = { email, password };
    console.log(formsData);
  };

  return (
    <>
      <div className={styles.divOfForms}>
        <form className={styles.forms} onSubmit={onSubmit}>
          Введите email:
          <EmailForm
            email={email}
            setEmail={setEmail}
            emailError={emailError}
            setEmailError={setEmailError}
          />
          Введите пароль:
          <PasswordForm
            password={password}
            setPassword={setPassword}
            passwordError={passwordError}
            setPasswordError={setPasswordError}
            againPassword={againPassword}
            setAgainPasswordError={setAgainPasswordError}
          />
          Введите пароль еще раз:
          <AgainPasswordForm
            againPassword={againPassword}
            setAgainPassword={setAgainPassword}
            againPasswordError={againPasswordError}
            setAgainPasswordError={setAgainPasswordError}
            password={password}
          />
          <RegisterButton
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
        </form>
      </div>
    </>
  );
}
