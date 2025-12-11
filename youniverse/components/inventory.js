import styles from  "./Inventory.module.css"
import SquareButton from "./SquareButton";
import Image from "next/image";

export default function Inventory({onClose}) {
    return(
        <section>
            <section className={styles.buttons}>
                <div className={styles.inventory__done}>
                <SquareButton
                    variant="active"
                    iconSrc="/icons/button_icons/DoneIcon.svg"
                    alt="Done Button"
                    onClick={onClose}/>
                </div>
                <div className={styles.inventory__exit}>
                <SquareButton
                    variant="active"
                    iconSrc="/icons/button_icons/ExitIcon.svg"
                    alt="Exit Button"
                    onClick={onClose}/>
                </div>
            </section>
            <section className={styles.inventory}>
                <button className={styles.inventory__furniture}>
                    <Image
                        src="/furniture_items/tutorial/Bed.svg"
                        alt="Bed"
                        width={50}
                        height={50}
                        priority
                        className={styles.furniture_image}/>
                </button>
                <button className={styles.inventory__furniture}>
                    <Image
                        src="/furniture_items/tutorial/GiantPillow.svg"
                        alt="Giant Pillow"
                        width={50}
                        height={50}
                        priority
                        className={styles.furniture_image}/>
                </button>
                <button className={styles.inventory__furniture}>
                    <Image
                        src="/furniture_items/tutorial/Desk.svg"
                        alt="Desk"
                        width={50}
                        height={50}
                        priority
                        className={styles.furniture_image}/>
                </button>
                <button className={styles.inventory__furniture}>
                    <Image
                        src="/furniture_items/article/TeddyBear.svg"
                        alt="Teddy Bear"
                        width={50}
                        height={50}
                        priority
                        className={styles.furniture_image}/>
                </button>
                <button className={styles.inventory__furniture}>
                    <Image
                        src="/furniture_items/article/Lamp.svg"
                        alt="Lamp"
                        width={50}
                        height={50}
                        priority
                        className={styles.furniture_image}/>
                </button>
                <button className={styles.inventory__furniture}>
                    <Image
                        src="/furniture_items/article/GiantStackOfBooks.svg"
                        alt="GiantStackOfBooks"
                        width={50}
                        height={50}
                        priority
                        className={styles.furniture_image}/>
                </button>
                <button className={styles.inventory__furniture}>
                    <Image
                        src="/furniture_items/article/Telescope.svg"
                        alt="Telescope"
                        width={50}
                        height={50}
                        priority
                        className={styles.furniture_image}/>
                </button>
                <button className={styles.inventory__furniture}>
                    <Image
                        src="/furniture_items/dream/HeartTrophy.svg"
                        alt="Heart Trophy"
                        width={50}
                        height={50}
                        priority
                        className={styles.furniture_image}/>
                </button>
                <button className={styles.inventory__furniture}>
                    <Image
                        src="/furniture_items/dream/StarTrophy.svg"
                        alt="Star Trophy"
                        width={50}
                        height={50}
                        priority
                        className={styles.furniture_image}/>
                </button>
                <button className={styles.inventory__furniture}>
                    <Image
                        src="/furniture_items/dream/MoonTrophy.svg"
                        alt="Moon Trophy"
                        width={50}
                        height={50}
                        priority
                        className={styles.furniture_image}/>
                </button>
            </section>
        </section>
    );
}