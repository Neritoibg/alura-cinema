import styles from "./NoFound.module.css"

function NoFound(){
    return(
        <section className={styles.container}>
            <h2 className={styles.error}>404</h2>
            <p className={styles.text_error}>page not found </p>
        </section>
    )
}

export default NoFound