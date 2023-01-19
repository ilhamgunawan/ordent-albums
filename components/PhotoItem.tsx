/* eslint-disable @next/next/no-img-element */
import { Photo } from "@/lib/photo"
import { Dispatch, SetStateAction } from "react"

type Props = {
  photo: Photo
  setPopUpPhoto: Dispatch<SetStateAction<Photo | undefined>>
}

export default function PhotoItem({ photo, setPopUpPhoto }: Props) {
  return (
    <label 
      className="card cursor-pointer shadow overflow-hidden transition-all hover:shadow-xl"
      onClick={() => setPopUpPhoto(photo)}
      htmlFor="my-modal"
    >
      <img src={photo.thumbnailUrl} alt={photo.title} />
    </label>
  )
}
