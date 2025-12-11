"use client"
import styles from "./page.module.css"
import SquareButton from "../../../components/SquareButton";
import NavigationBar from "../../../components/NavigationBar";
import Dream from "../../../components/Dream";
import Task from "../../../components/Task";

export default function DreamTaskBoard(){
    return(
        <section className={`screen ${styles.dream__background}`}>
                <div className={styles.dream__heading}>
                    <h1 className={styles.dream__title}>Dream Task Board</h1>
                    <div className={styles.dream__add}>
                        <SquareButton
                        variant="active"
                        iconSrc="/icons/button_icons/AddIcon.svg"
                        alt="Add Button"/>
                    </div>
                    <div className={styles.dream__component}>
                        <Dream/>
                    </div>
                    <div className={styles.task__component}>
                        <Task/>
                    </div>
                    <div className={styles.dream__navigation}>
                        <NavigationBar variant="DreamSelected"/>
                    </div>
                </div>
        </section>
    );
}