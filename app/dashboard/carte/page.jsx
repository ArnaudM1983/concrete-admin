import Image from "next/image"
import Link from "next/link"
import Pagination from "@/app/ui/dashboard/pagination/pagination"
import Search from "@/app/ui/dashboard/search/search"
import styles from "@/app/ui/dashboard/utilisateurs/utilisateurs.module.css"

const CartePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search />
        <Link href="/dashboard/carte/ajouter">
          <button className={styles.addButton}>Ajouter un point d'interêt</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Image</td> 
            <td>Titre</td> 
            <td>Lattitude</td> 
            <td>Longitude</td> 
            <td>Catégorie</td> 
          </tr>
        </thead>
        <tbody>
          <tr>
          <td>
              <Image
                src="" // Fetch depuis MongoDB
                alt=""
                width={40}
                height={40}
                className={styles.programmeImage}
              />
            </td> 
            <td>Scène Principale</td>
            <td>0.0.00</td>
            <td>0.00.23</td>
            <td>Scènes</td>
            <td>
              <div className={styles.buttons}>
                <Link href="/dashboard/carte/test">
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

export default CartePage