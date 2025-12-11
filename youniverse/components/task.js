import styles from "./Task.module.css"
import SquareButton from "./SquareButton"

export default function Task() {
    return(
        <section className={styles.task__component}>
            <section className={styles.section__task}>
                <h2 className={styles.task__title}>Task</h2>
                <div className={styles.task__edit}>
                    <SquareButton
                    variant="active"
                    iconSrc="/icons/button_icons/EditIcon.svg"
                    alt="Edit Button"/>
                </div>
                <div className={styles.task__delete}>
                    <SquareButton
                    variant="active"
                    iconSrc="/icons/button_icons/DeleteIcon.svg"
                    alt="Delete Button"/>
                </div>
                <div className={styles.task__complete}>
                    <SquareButton
                    variant="inactive"
                    iconSrc="/icons/button_icons/DoneIcon.svg"
                    alt="Done Button"/>
                </div>
                <input className={styles.task__input}/>
            </section>
            <section className={styles.section__step}>
                <h2 className={styles.step__title}>Step</h2>
                <div className={styles.step__edit}>
                    <SquareButton
                    variant="active"
                    iconSrc="/icons/button_icons/EditIcon.svg"
                    alt="Edit Button"/>
                </div>
                <div className={styles.step__delete}>
                    <SquareButton
                    variant="active"
                    iconSrc="/icons/button_icons/DeleteIcon.svg"
                    alt="Delete Button"/>
                </div>
                <div className={styles.step__complete}>
                    <SquareButton
                    variant="inactive"
                    iconSrc="/icons/button_icons/DoneIcon.svg"
                    alt="Done Button"/>
                </div>
                <input className={styles.step__input}/>
            </section>
            <button className={styles.step__add}>+</button>
        </section>
    );
}