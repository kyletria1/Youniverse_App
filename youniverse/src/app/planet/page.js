"use client"
import styles from "./page.module.css"
import Image from "next/image"
import Lumen from "../../../components/Lumen";
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
                className={`${styles.intro__image}`}>
            </Image>
            <Lumen/>
            <NavigationBar variant="PlanetSelected"/>
        </section>
    );
}