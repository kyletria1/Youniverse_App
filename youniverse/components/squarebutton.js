import Image from "next/image";
import styles from "./SquareButton.module.css";

export default function SquareButton({
    variant = "active",
    iconSrc,
    alt = "",
    ...props
}) 

{
  return (
    <button
      className={`${styles.button} ${styles[`button--${variant}`]}`}
      {...props}
    >
      {iconSrc && (
        <Image
          src={iconSrc}
          alt={alt}
          width={40}
          height={40}
          className={styles.button__icon}
        />
      )}
    </button>
  );
}