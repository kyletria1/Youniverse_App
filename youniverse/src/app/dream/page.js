import styles from "./page.module.css"
import SquareButton from "../../../components/SquareButton";
import NavigationBar from "../../../components/NavigationBar";

export default function Dream(){
    return(
        <section className={`screen ${styles.intro__image}`}>
            <h1 className={styles.dream__heading}>Dream Task Board</h1>
            <SquareButton
                variant="active"
                iconSrc="/icons/button_icons/AddIcon.svg"
                alt="Add Button"/>
            <NavigationBar variant="DreamSelected"/>
        </section>
    );
}