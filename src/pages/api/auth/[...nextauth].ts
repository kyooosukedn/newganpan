import NextAuth from "next-auth";
import GoogleProvider from 'next-auth/providers/google';

import { authOptions } from "~/server/auth";

export default NextAuth(authOptions);
