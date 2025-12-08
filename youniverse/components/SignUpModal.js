import { useState } from "react";
import styles from "./SignUpModal.module.css"
import Button from "./Button.js";
import SquareButton from "./SquareButton.js";

export default function SignUpModal({onClose, onSuccess}) {
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const firstName = form.firstName.value.trim();
        const lastName = form.lastName.value.trim();
        const age = form.age.value;
        const email = form.email.value.trim();
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;
        //[AI generated code (lines 12,13,15): .trim() gets rid of whitespace from the start and end of a string]

        if (!firstName || !lastName || !age || !email || !password || !confirmPassword) {
        setError("Please fill out all fields.");
        return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError("Please enter a valid email.");
            return;
        }
        //[AI generated code (line 25)]: The email must look like: some text, then an @, then more text, then a dot, then more text with no spaces and only one @ (Example: user@youniverse.ca).

        if (password.length < 6) {
        setError("Password must be at least 6 characters.");
        return;
        }

        if (password !== confirmPassword) {
        setError("Passwords do not match.");
        return;
        }

        setError("");
        onSuccess();
  };

    return (
        <div className={styles.modal}>
            <div className={styles.modal__header}>
                <h1 className={styles.modal__title}>Sign Up</h1>
                    <div className={styles.modal__button}>
                        <SquareButton
                        variant="active"
                        iconSrc="/icons/button_icons/ExitIcon.svg"
                        alt="Exit Button"
                        onClick={onClose}
                        />
                    </div>
            </div>

            <form className={styles.modal__form} onSubmit={handleSubmit}>
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

                <div className={styles.modal__footer}>
                    <Button variant="interface" type="submit">Sign Up</Button>
                </div>
            </form>

        </div>
    );
}