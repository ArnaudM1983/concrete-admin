import styles from "@/app/ui/dashboard/infos/addInfos/addInfos.module.css"

const AddInfo = () => {
  return (
    <div className={styles.container}>
      <form action="" className={styles.form}>
        <input type="text" name="Titre" placeholder="Titre" required/>
        <textarea name="contenu" id="" rows="14" placeholder="Contenu"></textarea>
        <button type="submit">Ajouter</button>
      </form>
    </div>
  )
}

export default AddInfo