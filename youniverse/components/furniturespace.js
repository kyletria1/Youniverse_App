import styles from "./FurnitureSpace.module.css";

export default function FurnitureSpace(props) {
  const variant = props.variant || "visible";
  const hidden = variant === "hidden";

  return (
    <button className={hidden ? styles.hidden : styles.furniturespace}>
    </button>
  );
}