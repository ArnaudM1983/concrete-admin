import styles from "./search.module.css"
import { IoIosSearch } from "react-icons/io";

const Search = () => {
  return (
    <div className={styles.container}>
        <IoIosSearch />
        <input type="text" placeholder="Rechercher..." className={styles.input} />
    </div>
  )
}

export default Search