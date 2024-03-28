export { default } from "next-auth/middleware"

export const config = { matcher: ["/profile" , '/a/:path*' , '/c/:path*'] }