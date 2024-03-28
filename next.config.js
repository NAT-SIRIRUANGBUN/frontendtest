/** @type {import('next').NextConfig} */
const nextConfig = {
    images : {
        domains : ['drive.google.com' , 'drive.usercontent.google.com' , 'lh3.googleusercontent.com']
    },
    env : {
        FRONTEND_URL: process.env.FRONTEND_URL,
        BACKEND_URL: process.env.BACKEND_URL
    }
}

module.exports = nextConfig
