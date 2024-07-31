import styles from "@/app/ui/dashboard/utilisateurs/singleUser/singleUser.module.css"

const SingleMapPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.imgContainer}>
                    <img src="/noavatar.png" alt="photo de l'utilisateur" fill className={styles.img} />
                </div>
                Scène Principale
            </div>
            <div className={styles.formContainer}>
                <form action="" className={styles.form}>
                    <label>Titre</label>
                    <input type="text" name="titre" id="" placeholder="Scène Principale" />
                    <label>Catégorie</label>
                    <select name="cat" id="cat">
                        <option value="general">Choisir une catégorie</option>
                        <option value="Scènes">Scènes</option>
                        <option value="Toilettes">Toilettes</option>
                        <option value="Restaurants">Restaurants</option>
                        <option value="Postes de secours">Postes de secours</option>
                    </select>
                    <label>Latitude</label>
                    <input type="text" name="latitude" placeholder="Latitude" required />
                    <label>Longitude</label>
                    <input type="text" name="longitude" placeholder="Longitude" required />
                    <div className={styles.img}>
                        <label htmlFor="image">Ajouter une icône</label>
                        <input type="file" name="image" accept="image/*" required />
                    </div>
                    <button>Mettre à jour</button>
                </form>
            </div>
        </div>
    )
}

export default SingleMapPage