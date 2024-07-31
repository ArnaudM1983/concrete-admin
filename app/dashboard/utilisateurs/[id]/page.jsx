import styles from "@/app/ui/dashboard/utilisateurs/singleUser/singleUser.module.css"

const SingleUserPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.imgContainer}>
                    <img src="/noavatar.png" alt="photo de l'utilisateur" fill className={styles.img} />
                </div>
                Marc Dupond
            </div>
            <div className={styles.formContainer}>
                <form action="" className={styles.form}>
                    <label>Nom d'utilisateur</label>
                    <input type="text" name="Nom d'utilisateur" id="" placeholder="Marc Dupond" />
                    <label>Email</label>
                    <input type="email" name="email" id="" placeholder="Marc@gmail.com" />
                    <label>Password</label>
                    <input type="password" name="password" id="" />
                    <label>Administrateur ?</label>
                    <select name="isAdmin" id="isAdmin">
                        <option value={true}>Oui</option>
                        <option value={false}>Non</option>
                    </select>
                    <button>Mettre à jour</button>
                </form>
            </div>
        </div>
    )
}

export default SingleUserPage