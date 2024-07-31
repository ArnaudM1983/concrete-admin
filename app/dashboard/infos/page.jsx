import Image from "next/image"
import Link from "next/link"
import Pagination from "@/app/ui/dashboard/pagination/pagination"
import Search from "@/app/ui/dashboard/search/search"
import styles from "@/app/ui/dashboard/utilisateurs/utilisateurs.module.css"

const InfosPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search />
        <Link href="/dashboard/infos/ajouter">
          <button className={styles.addButton}>Ajouter</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Titre</td> 
            <td>Contenu</td> 
          </tr>
        </thead>
        <tbody>
          <tr> 
            <td>Dates et Lieu</td>
            <td>Dates du Festival : 14 juillet 2024 – 16 juillet 2024 / Domaine national de Saint-Cloud 92210</td>
            <td>
              <div className={styles.buttons}>
                <Link href="/dashboard/infos/test">
                  <button className={`${styles.button} ${styles.view}`}>Voir</button>
                </Link>
                <button className={`${styles.button} ${styles.delete}`}>Supprimer</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination />
    </div>
  )
}

export default InfosPage