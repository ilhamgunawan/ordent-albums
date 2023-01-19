import { getAppConfig } from "@/utils/config"

export interface User {
  id: number
  name: string
  username: string
}

export type GetUserResponse = User

export async function getUser(id: number) {
  const url = new URL(getAppConfig().baseUrl + "users/" + id)
  const res = await fetch(url)
  const data: GetUserResponse = await res.json()
  return data
}
