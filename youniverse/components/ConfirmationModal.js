import styles from "./ConfirmationModal.module.css"

export default function ConfirmationModal({onNo, onYes}){
    return (
        <section className={styles.modal}>
            <h1 className={styles.modal__title}>Is The Information Entered Correct?</h1>
            <div className={styles.modal__decisionButton}>
                <button 
                        className={`${styles.button} ${styles['button--left']}`} 
                        onClick={onNo}>
                            No
                </button>
                <button 
                        className={`${styles.button} ${styles['button--right']}`}
                        onClick={onYes}>
                            Yes
                </button>
            </div>
        </section>
    );
}