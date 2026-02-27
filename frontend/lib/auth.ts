"use client";
import { createAuthClient } from "better-auth/react";
import { jwtClient } from "better-auth/client/plugins";

export const authClient = createAuthClient({
  //baseURL: "http://localhost:3000",
  baseURL: "https://todo-full-stack-web-application2.vercel.app",
  plugins: [jwtClient()],
});

export const {
  signIn,
  signUp,
  signOut,
  useSession,
  updateUser,
  getSession,
  listSessions
} = authClient;

// JWT token get karne ka dedicated function
export async function getJwtToken(): Promise<string | null> {
  try {
    // JWT plugin se token lo using the correct API
    const { data, error } = await authClient.token();

    if (error || !data?.token) {
      return null;
    }

    return data.token;
  } catch {
    return null;
  }
}
