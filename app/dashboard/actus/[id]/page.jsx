import { updateActu } from "@/app/lib/action";
import { fetchActu } from "@/app/lib/data";
import styles from "@/app/ui/dashboard/infos/addInfos/addInfos.module.css"

const SingleActusPage = async ({ params }) => {

    const { id } = params;
    const actu = await fetchActu(id)

    return (
        <div className={styles.container}>
            <div className={styles.formContainer}>
                <form action={updateActu} className={styles.form}>
                    <input type="hidden" name="id" value={actu.id} />
                    <input type="text" name="title" placeholder={actu.title} required />
                    <textarea name="content" id="" rows="14" placeholder={actu.content}></textarea>
                    <div className={styles.img}>
                        <label htmlFor="img">Ajouter une image - PNG uniquement</label>
                        <input type="file" name="img" accept="image/png"  />
                    </div>
                    <button type="submit">Mettre à jour</button>
                </form>
            </div>
        </div>
    )
}

export default SingleActusPage