import { useState, useRef, useEffect } from "react";
import AgainPasswordForm from "../AgainPasswordForm/AgainPasswordForm";
import EmailForm from "../EmailForm/EmailForm";
import PasswordForm from "../PasswordForm/PasswordForm";
import styles from "./app.module.css";
import { validator } from "../Validator/validator.jsx";

export default function App({}) {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    againPassword: "",
  });
  const [errorValidate, setErrorValidate] = useState({});
  const [isDirty, setIsDirty] = useState(false);

  const submitButtonRef = useRef(null);

  const userSchema = {
    email: {
      isRegular: { message: "Обязательное поле" },
      isEmailFormat: { message: "Неверный формат Е-mail" },
    },
    password: {
      isRegular: { message: "Обязательное поле" },
      isPasswordForm: {
        message:
          "Можно использовать только буквы, цифры и знак нижнего подчеркивания",
      },
    },
    againPassword: {
      isRegular: { message: "Обязательное поле" },
      isAsPassword: {
        message: "Пароли не совпадают",
        ref: "password",
      },
    },
  };
  const validate = () => {
    const error = validator(userData, userSchema, isDirty);
    setErrorValidate(error);
    return Object.keys(error).length === 0;
  };

  useEffect(() => {
    validate();
  }, [userData, isDirty]);

  const onSubmit = (event) => {
    event.preventDefault();
    setIsDirty(true);
    const isValid = validate();
    if (!isValid) return;
    console.log(userData);
  };

  const handleChange = (event) => {
    setIsDirty(true);
    const { value, name } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <>
      <div className={styles.divOfForms}>
        <form className={styles.forms} onSubmit={onSubmit}>
          <EmailForm
            name="email"
            label="Введите email"
            className={styles.form}
            type="text"
            value={userData.email}
            placeholder="E-mail"
            onChange={handleChange}
            onBlur={() => {}}
            error={errorValidate?.email}
          />
          <PasswordForm
            name="password"
            label="Введите пароль:"
            className={styles.form}
            type="text"
            value={userData.password}
            placeholder="Пароль"
            onChange={handleChange}
            onBlur={() => {}}
            error={errorValidate?.password}
          />

          <AgainPasswordForm
            className={styles.form}
            label="Введите пароль еще раз:"
            type="text"
            name="againPassword"
            placeholder="Еще раз пароль"
            value={userData.againPassword}
            onChange={handleChange}
            error={errorValidate?.againPassword}
          />
          <button
            ref={submitButtonRef}
            className={styles.registerButton}
            type="submit"
          >
            Зарегистрироваться
          </button>
        </form>
      </div>
    </>
  );
}
