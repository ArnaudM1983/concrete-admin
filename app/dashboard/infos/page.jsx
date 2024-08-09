import Image from "next/image"
import Link from "next/link"
import Pagination from "@/app/ui/dashboard/pagination/pagination"
import Search from "@/app/ui/dashboard/search/search"
import styles from "@/app/ui/dashboard/utilisateurs/utilisateurs.module.css"
import { fetchInfos } from "@/app/lib/data"
import { deleteInfo } from "@/app/lib/action"

const InfosPage = async ({searchParams}) => {

  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const infos = await fetchInfos(q);

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
          {infos.map(info =>(
            <tr key={info.id}> 
            <td>{info.title}</td>
            <td>{info.content}</td>
            <td>
              <div className={styles.buttons}>
                <Link href={`/dashboard/infos/${info.id}`}>
                  <button className={`${styles.button} ${styles.view}`}>Voir</button>
                </Link>
                <form action={deleteInfo}>
                    <input type="hidden" name="id" value={info.id}/>
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

export default InfosPage