import { addInfo } from "@/app/lib/action"
import styles from "@/app/ui/dashboard/infos/addInfos/addInfos.module.css"

const AddInfo = () => {
  return (
    <div className={styles.container}>
      <form action={addInfo} className={styles.form}>
        <input type="text" name="title" placeholder="Titre" required/>
        <textarea name="content" id="" rows="14" placeholder="Contenu"></textarea>
        <button type="submit">Ajouter</button>
      </form>
    </div>
  )
}

export default AddInfo