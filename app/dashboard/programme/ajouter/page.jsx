import styles from "@/app/ui/dashboard/programme/addProgramme/addProgramme.module.css"

const AddProgramme = () => {
  return (
    <div className={styles.container}>
      <form action="" className={styles.form}>
        <input type="text" name="titre" placeholder="titre" required/>
        <select name="cat" id="cat">
          <option value="general">Choisir une catégorie</option>
          <option value="Concert">Concert</option>
          <option value="Animation">Animation</option>
        </select>
        <select name="location" id="location">
          <option value="general">Choisir un lieu</option>
          <option value="Scène Principale">Scène Principale</option>
          <option value="Scène Emergente">Scène Emergente</option>
          <option value="Scène Découverte">Scène Découverte</option>
          <option value="Scène Acoustique">Scène Acoustique</option>
          <option value="Scène Classique">Scène Classique</option>
        </select>
        <input type="date" name="date" required />
        <input type="time" name="heure" required />
        <div className={styles.img}>
        <label htmlFor="image">Ajouter une image</label>
        <input type="file" name="image" accept="image/*" required />
        </div>
        
        <button type="submit">Ajouter</button>
      </form>
    </div>
  )
}

export default AddProgramme