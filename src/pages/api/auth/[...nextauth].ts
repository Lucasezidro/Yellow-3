import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

export default NextAuth({
    providers: [
        Providers.GitHub({
            clientId: process.env.GITHUB_KEY,
            clientSecret: process.env.GITHUB_SECRET_KEY,
            scope: 'read:user'
        }),
    ]

}) 
