"use client";
import { getJwtToken } from "@/lib/auth";

export default function useApi() {
  async function getToken(): Promise<string> {
    const token = await getJwtToken();
    if (!token) {
      throw new Error("Not authenticated - no token");
    }
    return token;
  }

  async function request(method: string, path: string, body?: any) {
    const token = await getToken();

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${path}`, {
      method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: body ? JSON.stringify(body) : undefined,
    });

    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(errorText || "API request failed");
    }

    return res.json();
  }

  return {
    getTasks: (userId: string) => request("GET", `/api/${userId}/tasks/`),
    addTask: (userId: string, data: any) =>
      request("POST", `/api/${userId}/tasks/`, data),
    updateTask: (userId: string, taskId: number, data: any) =>
      request("PUT", `/api/${userId}/tasks/${taskId}`, data),
    toggleComplete: (userId: string, taskId: number, completed: boolean) =>
      request("PATCH", `/api/${userId}/tasks/${taskId}/complete`, {
        completed,
      }),
    deleteTask: (userId: string, taskId: number) =>
      request("DELETE", `/api/${userId}/tasks/${taskId}`),
  };
}
