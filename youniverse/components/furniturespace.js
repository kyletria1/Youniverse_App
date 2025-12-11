import styles from "./FurnitureSpace.module.css";
import Image from "next/image";

export default function FurnitureSpace(props) {
  const variant = props.variant || "visible";
  const hidden = variant === "hidden";
  const item = props.item;

  return (
    <div className={styles.furniturespace__container}>
      <button className={hidden ? styles.hidden : styles.furniturespace}>
      </button>
      {item && (
        <div className={styles.furniturespace__imageWrapper}>
          <Image
            src={`/furniture_items/${item}.svg`}
            alt={item}
            width={100}
            height={100}
            className={styles.furniturespace__image}
          />
        </div>
      )}
    </div>
  );
}