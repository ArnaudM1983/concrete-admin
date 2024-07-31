import styles from "@/app/ui/dashboard/programme/addProgramme/addProgramme.module.css"

const AddMap = () => {
  return (
    <div className={styles.container}>
      <form action="" className={styles.form}>
        <input type="text" name="titre" placeholder="titre" required/>
        <select name="cat" id="cat">
          <option value="general">Choisir une catégorie</option>
          <option value="Scènes">Scènes</option>
          <option value="Toilettes">Toilettes</option>
          <option value="Restaurants">Restaurants</option>
          <option value="Postes de secours">Postes de secours</option>
        </select>
        <input type="text" name="latitude" placeholder="Latitude" required />
        <input type="text" name="longitude" placeholder="Longitude" required />
        <div className={styles.img}>
        <label htmlFor="image">Ajouter une icône</label>
        <input type="file" name="image" accept="image/*" required />
        </div>
        
        <button type="submit">Ajouter</button>
      </form>
    </div>
  )
}

export default AddMap