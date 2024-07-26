import Search from "@/app/ui/dashboard/search/search"
import styles from "@/app/ui/dashboard/utilisateurs/utilisateurs.module.css"
import Link from "next/link"

const Utilisateurs = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search />
        <Link href="/dashboard/utilisateurs/add">
          <button className={styles.addButton}>Ajouter</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Nom</td>
            <td>Prénom</td>
            <td>Créé le</td>
            <td>Rôle</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><div className={styles.name}>Marc Dupond</div></td>
            <td>marc@gmail.com</td>
            <td>24.07.2024</td>
            <td>Admin</td>
            <td>
              <div className={styles.buttons}>
                <Link href="/">
                  <button className={`${styles.button} ${styles.view}`}>Voir</button>
                </Link>
                <button className={`${styles.button} ${styles.delete}`}>Supprimer</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Utilisateurs
