import styles from "@/app/ui/dashboard/infos/addInfos/addInfos.module.css"

const SingleInfosPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.formContainer}>
                <form action="" className={styles.form}>
                    <input type="text" name="Titre" placeholder="Titre" required />
                    <textarea name="contenu" id="" rows="14" placeholder="Contenu"></textarea>
                    <button type="submit">Mettre à jour</button>
                </form>
            </div>
        </div>
    )
}

export default SingleInfosPage