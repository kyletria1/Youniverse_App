import styles from "./Lumen.module.css"
import Image from "next/image"

export default function Lumen() {
    return(
        <button>
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