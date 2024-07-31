import styles from "@/app/ui/dashboard/utilisateurs/addUser/addUser.module.css"

const AddUser = () => {
  return (
    <div className={styles.container}>
      <form action="" className={styles.form}>
        <input type="text" name="Nom d'utilisateur" placeholder="Nom d'utilisateur" required/>
        <input type="email" name="Email" placeholder="Email" required/>
        <input type="password" name="Password" placeholder="Password" required/>
        <select name="isAdmin" id="isAdmin">
          <option value={false} selected>Administrateur ?</option>
          <option value={true}>Oui</option>
          <option value={false}>Non</option>
        </select>
        <button type="submit">Ajouter</button>
      </form>
    </div>
  )
}

export default AddUser