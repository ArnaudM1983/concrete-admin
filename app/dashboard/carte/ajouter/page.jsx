import { addPoint } from "@/app/lib/action"
import styles from "@/app/ui/dashboard/carte/addCarte/addCarte.module.css"

const AddMap = () => {
  return (
    <div className={styles.container}>
      <form action={addPoint} className={styles.form}>
        <input type="text" name="title" placeholder="titre" required/>
        <select name="category" id="category">
          <option value="general">Choisir une catégorie</option>
          <option value="Scènes">Scènes</option>
          <option value="Toilettes">Toilettes</option>
          <option value="Restaurants">Restaurants</option>
          <option value="Postes de secours">Postes de secours</option>
        </select>
        
        <input type="text" name="latitude" placeholder="Latitude ex: 45.0000" required />
        <input type="text" name="longitude" placeholder="Longitude ex: 45.0000" required />
        
        <div className={styles.img}>
        <label htmlFor="img">Ajouter une image - PNG uniquement</label>
        <input type="file" name="img" accept="image/png" />
        </div>
        <textarea name="content" id="" rows="14" placeholder="Contenu"></textarea>
  
        <button type="submit">Ajouter</button>
      </form>
    </div>
  )
}

export default AddMap