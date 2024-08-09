import { updateInfo } from "@/app/lib/action";
import { fetchInfo } from "@/app/lib/data";
import styles from "@/app/ui/dashboard/infos/addInfos/addInfos.module.css"

const SingleInfosPage = async ({ params }) => {

    const { id } = params;
    const info = await fetchInfo(id)

    return (
        <div className={styles.container}>
            <div className={styles.formContainer}>
                <form action={updateInfo} className={styles.form}>
                    <input type="hidden" name="id" value={info.id} />
                    <input type="text" name="title" placeholder={info.title} required />
                    <textarea name="content" id="" rows="14" placeholder={info.content}></textarea>
                    <button type="submit">Mettre à jour</button>
                </form>
            </div>
        </div>
    )
}

export default SingleInfosPage