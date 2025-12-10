import styles from "./FurnitureSpace.module.css" 
import Image from "next/image";

export default function FurnitureSpace(){
    return (
        <button className={styles.furniturespace}>
            <Image
                src="/furniture_items/furniturespace.svg"
                alt="Furniture Placement Space"
                width={150}
                height={50}
                className={styles.furniturespace__image}/>
        </button>
    );
} 