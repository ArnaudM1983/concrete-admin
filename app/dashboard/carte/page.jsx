import Image from "next/image"
import Link from "next/link"
import Pagination from "@/app/ui/dashboard/pagination/pagination"
import Search from "@/app/ui/dashboard/search/search"
import styles from "@/app/ui/dashboard/utilisateurs/utilisateurs.module.css"
import { fetchCartes } from "@/app/lib/data"
import { deletePoint } from "@/app/lib/action"

const CartePage = async ({ searchParams }) => {

  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const cartes = await fetchCartes(q);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search />
        <Link href="/dashboard/carte/ajouter">
          <button className={styles.addButton}>Ajouter un point d&apos;intérêt</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Icône</td>
            <td>Titre</td>
            <td>Lattitude</td>
            <td>Longitude</td>
            <td>Catégorie</td>
          </tr>
        </thead>
        <tbody>
          {cartes.map(carte => (
            <tr key={carte.id}>
              <td>
                <Image
                  src={`data:image/png;base64,${carte.img}`} 
                  alt={carte.title}
                  width={40}
                  height={40}
                  className={styles.carteImage}
                />
              </td>
              <td>{carte.title}</td>
              <td>{carte.latitude}</td>
              <td>{carte.longitude}</td>
              <td>{carte.category}</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/carte/${carte.id}`}>
                    <button className={`${styles.button} ${styles.view}`}>Voir</button>
                  </Link>
                  <form action={deletePoint}>
                    <input type="hidden" name="id" value={carte.id} />
                    <button className={`${styles.button} ${styles.delete}`}>Supprimer</button>
                  </form>
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

export default CartePage