import Image from "next/image"
import Link from "next/link"
import Pagination from "@/app/ui/dashboard/pagination/pagination"
import Search from "@/app/ui/dashboard/search/search"
import styles from "@/app/ui/dashboard/utilisateurs/utilisateurs.module.css"

const Programme = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search />
        <Link href="/dashboard/programme/ajouter">
          <button className={styles.addButton}>Ajouter un évènement</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Image</td> 
            <td>Titre</td> 
            <td>Lieu</td> 
            <td>Date</td> 
            <td>Heure</td> 
            <td>Catégorie</td> 
          </tr>
        </thead>
        <tbody>
          <tr>
          <td>
              <Image
                src="/noavatar.png" // Fetch depuis MongoDB
                alt=""
                width={40}
                height={40}
                className={styles.programmeImage}
              />
            </td> 
            <td>Groupe A</td>
            <td>Scène Principale</td>
            <td>25/09/2024</td>
            <td>20h00</td>
            <td>Concert</td>
            <td>
              <div className={styles.buttons}>
                <Link href="/dashboard/programme/test">
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

export default Programme