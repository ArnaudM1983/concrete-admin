import Image from "next/image"
import Link from "next/link"
import Pagination from "@/app/ui/dashboard/pagination/pagination"
import Search from "@/app/ui/dashboard/search/search"
import styles from "@/app/ui/dashboard/utilisateurs/utilisateurs.module.css"
import { fetchActus } from "@/app/lib/data"
import { deleteActu } from "@/app/lib/action"

// Composant principal Actus
const Actus = async ({ searchParams }) => {

    const q = searchParams?.q || "";
    const page = searchParams?.page || 1;

    // Récupération des actualités
    const actus = await fetchActus(q);

    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <Search />
                <Link href="/dashboard/actus/ajouter">
                    <button className={styles.addButton}>Ajouter</button>
                </Link>
            </div>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <td>Image</td>
                        <td>Titre</td>
                        <td>Contenu</td>
                    </tr>
                </thead>
                <tbody>
                    {actus.map(actu => (
                        <tr key={actu.id}>
                            <td>
                                <Image
                                    src={`data:image/png;base64,${actu.img}`} 
                                    alt={actu.title}
                                    width={40}
                                    height={40}
                                    className={styles.actuImage}
                                />
                            </td>
                            <td>{actu.title}</td>
                            <td>{actu.content}</td>
                            <td>
                                <div className={styles.buttons}>
                                    <Link href={`/dashboard/actus/${actu.id}`}>
                                        <button className={`${styles.button} ${styles.view}`}>Voir</button>
                                    </Link>
                                    <form action={deleteActu}>
                                        <input type="hidden" name="id" value={actu.id} />
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

export default Actus