import { updatePoint } from "@/app/lib/action";
import { fetchCarte } from "@/app/lib/data";
import styles from "@/app/ui/dashboard/utilisateurs/singleUser/singleUser.module.css"
import Image from "next/image"


const SingleMapPage = async ({ params }) => {

    const { id } = params;
    const carte = await fetchCarte(id)

    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.imgContainer}>
                <Image
                  src={`data:image/png;base64,${carte.img}`} // Assurez-vous que le type MIME correspond à votre image
                  alt={carte.title}
                  width={40}
                  height={40}
                  className={styles.carteImage}
                />                </div>
                {carte.title}
            </div>
            <div className={styles.formContainer}>
                <form action={updatePoint} className={styles.form}>
                <input type="hidden" name="id" value={carte.id} />
                    <label>Titre</label>
                    <input type="text" name="title" id="" placeholder={carte.title}/>
                    <label>Catégorie</label>
                    <select name="category" id="category">
                        <option value="general">Choisir une catégorie</option>
                        <option value="Scènes">Scènes</option>
                        <option value="Toilettes">Toilettes</option>
                        <option value="Restaurants">Restaurants</option>
                        <option value="Postes de secours">Postes de secours</option>
                    </select>
                    <label>Latitude</label>
                    <input type="text" name="latitude" placeholder={carte.latitude}  />
                    <label>Longitude</label>
                    <input type="text" name="longitude" placeholder={carte.longitude}  />
                    
                    <div className={styles.img}>
                        <label htmlFor="image">Ajouter une icône - PNG uniquement</label>
                        <input type="file" name="img" accept="image/png"  />
                    </div>
                    
                    <button>Mettre à jour</button>
                </form>
            </div>
        </div>
    )
}

export default SingleMapPage