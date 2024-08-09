import styles from "@/app/ui/login/login.module.css"
import { authenticate } from "../lib/action"

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <form action={authenticate} className={styles.form}>
        <h1>Connexion</h1>
        <input type="text" placeholder="Nom d'utilisateur" name="username"/>
        <input type="password" placeholder="Password" name="password"/>
        <button>Se Connecter</button>
      </form>
    </div>
  )
}

export default LoginPage