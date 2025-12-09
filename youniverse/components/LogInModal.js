import styles from "./LoginModal.module.css"
import SquareButton from "./SquareButton"
import Button from "./Button"

export default function LoginModal({onClose}){

    const handleSubmit = (e) => {
        e.preventDefault();
        const {email, password} = formData;

        if (!email.trim() || !password) {
            setError("Please fill out all fields.");
            return;
        }

        const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
        if (!emailRegex.test(email)) {
            setError("Please enter a valid email.");
            return;
        }
        
        if (password.length < 6) {
            setError("Password must be at least 6 characters.");
            return;
        }

        setError("");
        onSuccess();
    };

    return (
        <section className={styles.modal}>
            <div className={styles.modal__header}>
                <h1 className={styles.modal__title}>Login</h1>
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
                <label className={styles.modal__label}>Email</label>
                <input 
                    className={styles.modal__input} 
                    name="email" 
                    type="email" 
                    required
                />

                <label className={styles.modal__label}>Password</label>
                <input 
                    className={styles.modal__input} 
                    name="password" 
                    type="password" 
                    required
                />

                <div className={styles.modal__footer}>
                    <Button variant="interface" type="submit">Login</Button>
                </div>
            </form>
        </section>
    )
}