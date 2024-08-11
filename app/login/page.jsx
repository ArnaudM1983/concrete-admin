"use client";

import { useRouter } from "next/navigation"; // Importation de useRouter pour la redirection
import styles from "@/app/ui/login/login.module.css";
import { authenticate } from "../lib/action";

const LoginPage = () => {
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    try {
      const result = await authenticate(formData);

      if (result.error) {
        alert(result.error); // Affiche le message d'erreur si les identifiants sont incorrects
      } else {
        router.push('/dashboard'); // Redirection vers /dashboard après une connexion réussie
      }
    } catch (error) {
      console.error('Authentication failed:', error);
      alert('Failed to login. Please check your credentials and try again.');
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h1>Connexion</h1>
        <input type="text" placeholder="Nom d'utilisateur" name="username" required />
        <input type="password" placeholder="Mot de passe" name="password" required />
        <button type="submit">Se Connecter</button>
      </form>
    </div>
  );
};

export default LoginPage;
