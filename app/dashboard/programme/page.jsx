import Image from "next/image"
import Link from "next/link"
import Pagination from "@/app/ui/dashboard/pagination/pagination"
import Search from "@/app/ui/dashboard/search/search"
import styles from "@/app/ui/dashboard/utilisateurs/utilisateurs.module.css"
import { fetchProgramme } from "@/app/lib/data"
import { deleteProgramme } from "@/app/lib/action"

const Programme = async ({ searchParams }) => {

  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const programmes = await fetchProgramme(q);

  console.log(programmes)

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
          {programmes.map(programme => (
            <tr key={programme.id}>
              <td>
                <Image
                  src={programme.img}
                  alt=""
                  width={40}
                  height={40}
                  className={styles.programmeImage}
                />
              </td>
              <td>{programme.title}</td>
              <td>{programme.location}</td>
              <td>{new Date(programme.date).toLocaleDateString()}</td>
              <td>{programme.time}</td>
              <td>{programme.category}</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/programme/${programme.id}`}>
                    <button className={`${styles.button} ${styles.view}`}>Voir</button>
                  </Link>
                  <form action={deleteProgramme}>
                    <input type="hidden" name="id" value={programme.id}/>
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

export default Programme