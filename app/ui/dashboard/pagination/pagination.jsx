import styles from "./pagination.module.css"

const Pagination = () => {
  return (
    <div className={styles.container}>
        <button className={styles.button} disabled>Précédent</button>
        <button className={styles.button}>Suivant</button>
    </div>
  )
}

export default Pagination