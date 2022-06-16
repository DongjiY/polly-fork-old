import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { runner } from '../../../lib/database/dbusers'

const bcrypt = require('bcrypt');

export default NextAuth({
  // Configure one or more authentication providers
    providers: [
        CredentialsProvider({
            id: 'credentials',
            name: 'Credentials',
            credentials: {
                username: { label: 'Email/Username', type: 'text', placeholder: 'your email here'},
                password: { label: 'Password', type: 'password', placeholder: 'your password here' }
            },
            async authorize(credentials, req) {
                if(credentials.username==="" || credentials.password===""){
                    return null
                }

                console.log('> next-auth login: Performing validation...')
                const resdb = await runner('validateInfo', [ credentials.username.toLowerCase() ])
                console.log('> login.js: Validation result:', resdb)

                if(!resdb.found){
                    return null
                }
                
                const match = await bcrypt.compare(credentials.password,resdb.password)
                if(!match) return null


                return {
                    isLoggedIn: true,
                    uid: resdb.uid,
                    username: resdb.username,
                    cityID: resdb.cityID,
                    first: resdb.first,
                    last: resdb.last,
                    email: resdb.email,
                }
            }
        })
    ],
    pages: {
        signIn: '/auth/login'
    },
    callbacks: {
        jwt: async ({ token, user }) => {
            user && (token.user = user)
            return token
        },
        session: async ({ session, token }) => {
            session.user = token.user
            return session
        }
    },
})