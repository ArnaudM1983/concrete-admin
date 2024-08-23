import { addActu } from "@/app/lib/action"
import styles from "@/app/ui/dashboard/infos/addInfos/addInfos.module.css"

const AddActu = () => {
  return (
    <div className={styles.container}>
      <form action={addActu} className={styles.form}>
        <input type="text" name="title" placeholder="Titre" required/>
        <textarea name="content" id="" rows="14" placeholder="Contenu"></textarea>
        <div className={styles.img}>
          <label htmlFor="img">Ajouter une image - PNG uniquement</label>
          <input type="file" name="img" accept="image/png"  />
        </div> 
        <button type="submit">Ajouter</button>
      </form>
    </div>
  )
}

export default AddActu