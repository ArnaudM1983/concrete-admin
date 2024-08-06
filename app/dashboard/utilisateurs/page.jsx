import { fetchUsers } from "@/app/lib/data"
import Pagination from "@/app/ui/dashboard/pagination/pagination"
import Search from "@/app/ui/dashboard/search/search"
import styles from "@/app/ui/dashboard/utilisateurs/utilisateurs.module.css"
import Link from "next/link"

const Utilisateurs = async ({searchParams}) => {

  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const users = await fetchUsers(q);

  console.log(users)

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search />
        <Link href="/dashboard/utilisateurs/ajouter">
          <button className={styles.addButton}>Ajouter</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Nom d'utilisateur</td>
            <td>Email</td>
            <td>Créé le</td>
            <td>Rôle</td>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td><div className={styles.name}>{user.username}</div></td>
              <td>{user.email}</td>
              <td>{user.createdAt?.toString()}</td>
              <td>{user.isAdmin ? "Admin" : "Utilisateur"}</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/utilisateurs/${user.id}`}>
                    <button className={`${styles.button} ${styles.view}`}>Voir</button>
                  </Link>
                  <button className={`${styles.button} ${styles.delete}`}>Supprimer</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination />
    </div>
  )
}

export default Utilisateurs
