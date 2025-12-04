import styles from "./button.module.css"

export default function Button({
    variant = "value",
    valueText = "Click Me"
}) { 
    const labelMap = {
    signUp: "Sign Up",
    logIn: "Log In",
    submit: "Submit",
    logOut: "Log Out",
    done: "Done",
    continue: "Continue",
    forgotPassword: "Forgot Password",
    cancel: "Cancel",
    value: valueText,
    };

    return (
        <button className={`${styles.button} ${styles["button--welcome"]} ${styles["button--variant"]}`}>
            {labelMap[variant]}
        </button>
    );

}