import styles from "./Button.module.css";

export default function Button({
  variant = "interface", 
  children,              
  ...props

}) {
  return (
    <button
      className={`${styles.button} ${styles[`button--${variant}`]}`}
      {...props}
    >
      <span className={styles.text}>
        {children}
      </span>
    </button>
  );
}