import { getAppConfig } from "@/utils/config"

export interface Album {
  id: number
  userId: number
  title: string
}

export type GetAlbumsResponse = Album[]

export async function getAlbums() {
  const url = new URL(getAppConfig().baseUrl + "albums")
  const res = await fetch(url)
  const data: GetAlbumsResponse = await res.json()
  return data
}
