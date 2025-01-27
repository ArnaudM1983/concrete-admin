import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { authConfig } from "./authconfig";
import { connectToDB } from "./lib/utils";
import { User } from "./lib/models";
import bcrypt from "bcrypt";

// Fonction de connexion avec les identifiants
const login = async (credentials) => {
  connectToDB();

  // Recherche de l'utilisateur dans la base de données
  const user = await User.findOne({ username: credentials.username });
  if (!user) throw new Error("Utilisateur introuvable.");

  // Vérifie si l'utilisateur a les droits d'administrateur
  if (!user.isAdmin) throw new Error("Accès refusé : droits administrateur requis.");

  // Compare le mot de passe fourni avec le mot de passe hashé dans la base de données
  const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password);
  if (!isPasswordCorrect) throw new Error("Mot de passe incorrect.");

  return user;
};

// Exportation de la configuration NextAuth
export const { signIn, signOut, auth } = NextAuth({
  ...authConfig,
  providers: [
    // Définition du fournisseur d'authentification par identifiants (username et password)
    CredentialsProvider({
      async authorize(credentials) {
        try {
          // Appel de la fonction login pour valider l'utilisateur
          const user = await login(credentials);
          return user;
        } catch (err) {
          // return null;
          throw new Error("Authentification failed, please check your credentials!");
        }
      },
    }),
  ],
  
  callbacks: {
    // Callback pour modifier le jeton JWT après une connexion réussie
    async jwt({ token, user }) {
      // Si l'utilisateur est authentifié, on ajoute son nom d'utilisateur au jeton JWT
      if (user) {
        token.username = user.username;
      }
      return token;
    },

    // Callback pour gérer la session après la connexion
    async session({ session, token }) {
      // Si le jeton existe, on ajoute le nom d'utilisateur dans la session
      if (token) {
        session.user.username = token.username;
      }
      return session;
    },
  },
});