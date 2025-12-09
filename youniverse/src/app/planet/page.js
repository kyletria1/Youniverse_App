"use client"
import styles from "./page.module.css"
import Image from "next/image"
import Lumen from "../../../components/Lumen";
import SquareButton from "../../../components/SquareButton";
import NavigationBar from "../../../components/NavigationBar";

export default function Planet() {
    return(
    <section className="screen">
        <Image
            src="/background_images/PlanetInterfaceBackground.svg"
            alt="Youniverse Planet Interface Background"
            width={393}
            height={852}
            priority
            className={styles.intro__image}
        />
        <div className={styles.lumen}>
            <Lumen />
        </div>
        <div className={styles.decorateButton}>
            <SquareButton
            variant="active"
            iconSrc="/icons/button_icons/DecorateIcon.svg"
            alt="Decorate Button"
            />
        </div>
        <div className={styles.navigationBar}>
            <NavigationBar variant="PlanetSelected" />
        </div>
    </section>
    );
}