export const authConfig = {
  providers: [],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    authorized({ auth, request }) {
      // Vérification si l'utilisateur est connecté 
      const isLoggedIn = Boolean(auth?.user);
      // Vérification si l'utilisateur est sur le tableau de bord 
      const isOnDashboard = request.nextUrl.pathname.startsWith("/dashboard");

      if (isLoggedIn) {
        // Redirige l'utilisateur connecté vers le tableau de bord s'il n'y est pas déjà
        if (!isOnDashboard) {
          return Response.redirect(new URL("/dashboard", request.nextUrl));
        }
        return true; // Autoriser l'accès au tableau de bord
      }

      // Autoriser si ce n'est pas une page du tableau de bord
      return !isOnDashboard;
    },
  },
};
