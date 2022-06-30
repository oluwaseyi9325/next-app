/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects: async ()=>{
    return[
      {
        source:"/about",
        destination:"/userStatic",
        permanent:true

      }
    ]
  }
}

module.exports = nextConfig




