import { getAppConfig } from "@/utils/config"

export interface Photo {
  id: number
  albumId: number
  title: string
  url: string
  thumbnailUrl: string
}

export type GetPhotosResponse = Photo[]

export async function getPhotosByAlbumId(id: number) {
  const url = new URL(getAppConfig().baseUrl + "photos")
  url.searchParams.append("albumId", id.toString())
  const res = await fetch(url)
  const data: GetPhotosResponse = await res.json()
  return data
}
