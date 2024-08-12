import Image from "next/image"
import { updateProgramme } from "@/app/lib/action";
import { fetchProgramme } from "@/app/lib/data";
import styles from "@/app/ui/dashboard/utilisateurs/singleUser/singleUser.module.css"

const SingleProgrammePage = async({params}) => {

    const {id} = params;
    const programme = await fetchProgramme(id);

    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.imgContainer}>
                <Image
                  src={`data:image/png;base64,${programme.img}`} // Assurez-vous que le type MIME correspond à votre image
                  alt={programme.title}
                  width={40}
                  height={40}
                  className={styles.programmeImage}
                />                
                </div>
                {programme.title}
            </div>
            <div className={styles.formContainer}>
                <form action={updateProgramme} className={styles.form}>
                <input type="hidden" name="id" value={programme.id} />
                    <label>Titre</label>
                    <input type="text" name="title" placeholder={programme.title} />
                    <label>Lieu</label>
                    <select name="location" id="location">
                        <option value="general">Choisir un lieu</option>
                        <option value="Scène Principale">Scène Principale</option>
                        <option value="Scène Emergente">Scène Emergente</option>
                        <option value="Scène Découverte">Scène Découverte</option>
                        <option value="Scène Acoustique">Scène Acoustique</option>
                        <option value="Scène Classique">Scène Classique</option>
                    </select>
                    <label>Catégorie</label>
                    <select name="cat" id="cat">
                        <option value="general">Choisir une catégorie</option>
                        <option value="Concert">Concert</option>
                        <option value="Animation">Animation</option>
                    </select>
                    <label>Date</label>
                    <input type="date" name="date"  />
                    <label>Heure</label>
                    <input type="time" name="heure"  />
                    <div className={styles.img}>
                        <label htmlFor="img">Ajouter une image - PNG uniquement</label>
                        <input type="file" name="img" accept="image/png"  />
                    </div>
                    <button>Mettre à jour</button>
                </form>
            </div>
        </div>
    )
}

export default SingleProgrammePage