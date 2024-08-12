/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
      return [
        {
          source: '/',
          destination: '/dashboard',  // Redirige vers /dashboard
          permanent: true,
        },
      ]
    },
  }
  
  export default nextConfig
  
