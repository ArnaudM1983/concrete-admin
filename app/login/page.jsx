import styles from "@/app/ui/login/login.module.css"

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <form action="" className={styles.form}>
        <h1>Connexion</h1>
        <input type="text" placeholder="Nom d'utilisateur"/>
        <input type="password" placeholder="Password" />
        <button>Se Connecter</button>
      </form>
    </div>
  )
}

export default LoginPage