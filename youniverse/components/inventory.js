import styles from "./Inventory.module.css";
import SquareButton from "./SquareButton";
import Image from "next/image";

export default function Inventory(props) {
  const onClose = props.onClose || (() => {});
  const onDone = props.onDone || (() => {});
  const onSelectItem = props.onSelectItem || (() => {});
  const selectedItem = props.selectedItem || null;

  const items = [
    "tutorial/Bed",
    "tutorial/GiantPillow",
    "tutorial/Desk",
    "article/TeddyBear",
    "article/Lamp",
    "article/GiantStackOfBooks",
    "article/Telescope",
    "dream/HeartTrophy",
    "dream/StarTrophy",
    "dream/MoonTrophy"
  ];

  return (
    <section>
      <section className={styles.buttons}>
        <div className={styles.inventory__done}>
          <SquareButton
            variant="active"
            iconSrc="/icons/button_icons/DoneIcon.svg"
            alt="Done Button"
            onClick={onDone}
          />
        </div>
        <div className={styles.inventory__exit}>
          <SquareButton
            variant="active"
            iconSrc="/icons/button_icons/ExitIcon.svg"
            alt="Exit Button"
            onClick={onClose}
          />
        </div>
      </section>
      <section className={styles.inventory}>
        {items.map((item) => {
          const active = selectedItem === item;
          return (
            <button
              key={item}
              className={`${styles.inventory__furniture} ${active ? styles["inventory__furniture--active"] : ""}`}
              onClick={() => onSelectItem(item)}
              type="button"
            >
              <Image
                src={`/furniture_items/${item}.svg`}
                alt={item}
                width={50}
                height={50}
                priority
                className={styles.furniture_image}
              />
            </button>
          );
        })}
      </section>
    </section>
  );
}