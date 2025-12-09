import {useState} from "react";
import styles from "./SignUpModal.module.css"
import Button from "./Button.js";
import SquareButton from "./SquareButton.js";

export default function SignUpModal({onClose, onSuccess}) {
    const [error, setError] = useState("");
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        age: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };
    //[AI generated code(line 21)]: this code updates the formData object with prev being the old state and ...prev copies all the other existing fields and [name]:value replaces the field with that was changed with the new value.

    const handleSubmit = (e) => {
        e.preventDefault();
        const {firstName, lastName, age, email, password, confirmPassword} = formData;

        if (!firstName.trim() || !lastName.trim() || !age || !email.trim() || !password || !confirmPassword) {
            setError("Please fill out all fields.");
            return;
        }
        //[AI generated code (line 31)]: .trim() gets rid of whitespace from the start and end of a string when checking the validity of a users input.

        const ageValue = Number(age);
        if (!ageValue || ageValue < 13 || ageValue > 120) {
        setError("Please enter a valid age.");
        return;
        }

        const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
        if (!emailRegex.test(email)) {
            setError("Please enter a valid email.");
            return;
        }
        //[AI generated code (lines 39 to 41)]: An email regex is a regualr expression pattern that is used to check if an email looks valid. The email requires some letters, numbers, or symbols before the @, then a domain name after the @, followed by a dot and at least two letters for the domain ending (like .ca). An example of a valid email would be user@youniverse.ca.

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
    //[AI Generated Code (Line 57)]: Clear any errors if all entered form values are valid and then do what ever is programmed to happen upon a successful completion (change sign up modal to confirmation modal).

    return (
        <section className={styles.modal}>
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
                <input 
                    className={styles.modal__input} 
                    name="firstName" 
                    type="text" 
                    required
                    onChange={handleChange}
                />

                <label className={styles.modal__label}>Last Name</label>
                <input 
                    className={styles.modal__input} 
                    name="lastName" 
                    type="text" 
                    required
                    onChange={handleChange}
                />

                <label className={styles.modal__label}>Age</label>
                <input 
                    className={styles.modal__input} 
                    name="age" 
                    type="number" 
                    required
                    onChange={handleChange}
                />

                <label className={styles.modal__label}>Email</label>
                <input 
                    className={styles.modal__input} 
                    name="email" 
                    type="email" 
                    required
                    onChange={handleChange}
                />

                <label className={styles.modal__label}>Password</label>
                <input 
                    className={styles.modal__input} 
                    name="password" 
                    type="password" 
                    required
                    onChange={handleChange}
                />

                <label className={styles.modal__label}>Confirm Password</label>
                <input 
                    className={styles.modal__input} 
                    name="confirmPassword" 
                    type="password" 
                    required
                    onChange={handleChange}
                />

                <div className={styles.modal__footer}>
                    <Button variant="interface" type="submit">Sign Up</Button>
                </div>
            </form>
        </section>
    );
}