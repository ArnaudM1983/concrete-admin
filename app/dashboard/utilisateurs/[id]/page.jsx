import { updateUser } from "@/app/lib/action";
import { fetchUser } from "@/app/lib/data"
import styles from "@/app/ui/dashboard/utilisateurs/singleUser/singleUser.module.css"
import Image from "next/image";

const SingleUserPage = async ({ params }) => {

    const { id } = params;
    const user = await fetchUser(id)

    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                {user.username}
            </div>
            <div className={styles.formContainer}>
                <form action={updateUser} className={styles.form}>
                    
                    <input type="hidden" name="id" value={user.id} />
                    <label>Nom d&apos;utilisateur</label>
                    <input type="text" name="username" placeholder={user.username} />
                    <label>Email</label>
                    <input type="email" name="email" id="" placeholder={user.email} />
                    <label>Password</label>
                    <input type="password" name="password" id="" />
                    <label>Administrateur ?</label>
                    <select name="isAdmin" id="isAdmin">
                        <option value={true} selected={user.isAdmin}>Oui</option>
                        <option value={false} selected={!user.isAdmin}>Non</option>
                    </select>
                    <button>Mettre à jour</button>
                </form>
            </div>
        </div>
    )
}

export default SingleUserPage