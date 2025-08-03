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
