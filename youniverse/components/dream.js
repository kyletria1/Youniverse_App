import styles from "./Dream.module.css"
import SquareButton from "./SquareButton"

export default function Dream() {
    return(
        <section className={styles.dream__component}>
            <h2 className={styles.dream__title}>Dream</h2>
            <div className={styles.dream__edit}>
                <SquareButton
                variant="active"
                iconSrc="/icons/button_icons/EditIcon.svg"
                alt="Edit Button"/>
            </div>
            <div className={styles.dream__complete}>
                <SquareButton
                variant="inactive"
                iconSrc="/icons/button_icons/DoneIcon.svg"
                alt="Done Button"/>
            </div>
            <input className={styles.dream__input}/>
        </section>
    );
}