import NextAuth from "next-auth"
import FacebookProvider from "next-auth/providers/facebook"
//import GitHubProvider from "next-auth/providers/github"
export const authOptions = {
    // Configure one or more authentication providers
    providers: [
        FacebookProvider({
            clientId: process.env.FACEBOOK_CLIENT_ID,
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
        }),
    ],
}
export default NextAuth(authOptions)