import styles from "./SignUpModal.module.css"
import Button from "./Button.js";
import SquareButton from "./SquareButton.js";

export default function SignUpModal() {
    return (
        <div className={styles.modal}>
        <div className={styles.modal__header}>
            <h1 className={styles.modal__title}>Sign Up</h1>
                <div className={styles.modal__button}>
                    <SquareButton
                    variant="active"
                    iconSrc="/icons/button_icons/ExitIcon.svg"
                    alt="Exit"
                    />
             </div>
        </div>

        <form className={styles.modal__form}>
            <label className={styles.modal__label}>First Name</label>
            <input className={styles.modal__input} name="firstName" type="text" required/>

            <label className={styles.modal__label}>Last Name</label>
            <input className={styles.modal__input} name="lastName" type="text" required/>

            <label className={styles.modal__label}>Age</label>
            <input className={styles.modal__input} name="age" type="number" required/>

            <label className={styles.modal__label}>Email</label>
            <input className={styles.modal__input} name="email" type="email" required/>

            <label className={styles.modal__label}>Password</label>
            <input className={styles.modal__input} name="password" type="password" required/>

            <label className={styles.modal__label}>Confirm Password</label>
            <input className={styles.modal__input} name="confirmPassword" type="password" required/>
        </form>

        <div className={styles.modal__footer}>
            <Button variant="interface">Sign Up</Button>
        </div>

        </div>
    );
}