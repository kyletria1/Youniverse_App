import styles from "./Lumen.module.css"
import Image from "next/image"

export default function Lumen({onClick}) {
    return(
        <button className={styles.lumen__button} onClick={onClick}>
            <Image
                src="/lumen/Lumen.svg"
                alt="Lumen"
                width={153}
                height={170}
                priority
                className={`${styles.lumen__sprite}`}>
            </Image>
        </button>
    );
}