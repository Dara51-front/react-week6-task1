import styles from "../App/app.module.css";

export default function EmailForm({ name, label, error, ...props }) {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input name={name} {...props} />
      {error && <div className={styles.error}>{error}</div>}
    </>
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
