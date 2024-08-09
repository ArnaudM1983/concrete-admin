import styles from "./sidebar.module.css";
import { GrSchedule } from "react-icons/gr";
import { RiMapPinLine } from "react-icons/ri";
import { GrCircleInformation } from "react-icons/gr";
import { FaRegUser } from "react-icons/fa";
import { MdSchedule } from "react-icons/md";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { IoMdLogOut } from "react-icons/io";
import MenuLink from "./menuLink/menuLink";
import { auth, signOut } from "@/app/auth";

const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <GrCircleInformation />,
      },
      {
        title: "Programme",
        path: "/dashboard/programme",
        icon: <MdSchedule />,
      },
      {
        title: "Carte",
        path: "/dashboard/carte",
        icon: <RiMapPinLine />,
      },
      {
        title: "Informations Générales",
        path: "/dashboard/infos",
        icon: <IoIosInformationCircleOutline />,
      },

    ]
  },
  {
    title: "Utilisateurs",
    list: [
      {
        title: "Utilisateurs",
        path: "/dashboard/utilisateurs",
        icon: <FaRegUser />,
      },
    ]
  }

]

const Sidebar = async () => {

  const {user} = await auth()

  return (
    <div className={styles.container}>
      <div className={styles.user}>

        <div className={styles.userDetail}>
          <span className={styles.username}>{user.username}</span>
          <span className={styles.userTitle}>Admin</span>
        </div>
      </div>
      <ul className={styles.list}>
        {menuItems.map((cat) => (
          <li key={cat.title}>
            <span className={styles.cat}>{cat.title}</span>
            {cat.list.map((item) => (
              <MenuLink item={item} key={item.title} />
            ))}
          </li>
        ))}
      </ul>
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <button className={styles.logout}>
          <IoMdLogOut />
          Deconnexion
        </button>
      </form>

    </div>
  )
}

export default Sidebar