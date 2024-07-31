import styles from "@/app/ui/dashboard/utilisateurs/singleUser/singleUser.module.css"

const SingleProgrammePage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.imgContainer}>
                    <img src="/noavatar.png" alt="photo de l'utilisateur" fill className={styles.img} />
                </div>
                Groupe A
            </div>
            <div className={styles.formContainer}>
                <form action="" className={styles.form}>
                    <label>Titre</label>
                    <input type="text" name="titre" id="" placeholder="Groupe A" />
                    <label>Lieu</label>
                    <select name="location" id="location">
                        <option value="general">Choisir un lieu</option>
                        <option value="Scène Principale">Scène Principale</option>
                        <option value="Scène Emergente">Scène Emergente</option>
                        <option value="Scène Découverte">Scène Découverte</option>
                        <option value="Scène Acoustique">Scène Acoustique</option>
                        <option value="Scène Classique">Scène Classique</option>
                    </select>
                    <label>Catégorie</label>
                    <select name="cat" id="cat">
                        <option value="general">Choisir une catégorie</option>
                        <option value="Concert">Concert</option>
                        <option value="Animation">Animation</option>
                    </select>
                    <label>Date</label>
                    <input type="date" name="date" required />
                    <label>Heure</label>
                    <input type="time" name="heure" required />
                    <div className={styles.img}>
                        <label htmlFor="image">Ajouter une image</label>
                        <input type="file" name="image" accept="image/*" required />
                    </div>
                    <button>Mettre à jour</button>
                </form>
            </div>
        </div>
    )
}

export default SingleProgrammePage