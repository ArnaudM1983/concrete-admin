import { addUser } from "@/app/lib/action"
import styles from "@/app/ui/dashboard/utilisateurs/addUser/addUser.module.css"

const AddUser = () => {
  return (
    <div className={styles.container}>
      <form action={addUser} className={styles.form}>
        <input type="text" name="username" placeholder="Nom d'utilisateur" required/>
        <input type="email" name="email" placeholder="Email" required/>
        <input type="password" name="password" placeholder="Password" required/>
        <select name="isAdmin" id="isAdmin">
          <option value={false}>Administrateur ?</option>
          <option value={true}>Oui</option>
          <option value={false}>Non</option>
        </select>
        <button type="submit">Ajouter</button>
      </form>
    </div>
  )
}

export default AddUser