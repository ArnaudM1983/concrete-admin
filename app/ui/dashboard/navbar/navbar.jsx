"use client"

import { usePathname } from "next/navigation";
import { IoIosSearch } from "react-icons/io";
import { MdPublic } from "react-icons/md";
import styles from "./navbar.module.css";

const Navbar = () => {

  const pathname = usePathname();
  return (
    <div className={styles.container}>
      <div className={styles.title}>{pathname.split("/").pop()}</div>
      <div className={styles.menu}>
        <div className={styles.search}>
          <IoIosSearch />
          <input type="text" placeholder="Rechercher..." className={styles.input} />
        </div>
        <div className={styles.icons}>
          <MdPublic size={20}/>
        </div>
      </div>
    </div>
  )
}

export default Navbar