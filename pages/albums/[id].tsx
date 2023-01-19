/* eslint-disable @next/next/no-img-element */
import Head from "next/head"
import Link from "next/link"
import PhotoItem from "@/components/PhotoItem"
import { GetServerSideProps } from "next"
import { getPhotosByAlbumId, Photo } from "@/lib/photo"
import { useState } from "react"

export const getServerSideProps: GetServerSideProps = async (context) => {
  const albumId = context.params ? context.params["id"] as string : undefined

  if (albumId) {
    const photos = await getPhotosByAlbumId(parseInt(albumId))
    return {
      props: { photos, albumId }
    }
  }

  return {
    props: {},
    redirect: "/",
  }
}

type Props = {
  photos: Photo[]
  albumId: string
}

export default function AbumDetailPage({ photos, albumId }: Props) {
  const [popUpPhoto, setPopUpPhoto] = useState<Photo | undefined>(undefined)

  return (
    <>
      <Head>
        <title>Detail - Albums</title>
      </Head>
      <main className="flex flex-col gap-3 m-auto p-4 max-w-3xl">
        <h1 className="inline-block text-2xl sm:text-3xl font-extrabold text-slate-900">Album Detail: {albumId}</h1>
        <div className="text-sm breadcrumbs">
          <ul>
            <li><Link href="/">Home</Link></li>
            <li>Album Detail</li>
          </ul>
        </div>
        <div
          className="flex flex-wrap gap-4 justify-center md:justify-start"
        >
          {photos.map((photo) => 
            <PhotoItem key={photo.id} photo={photo} setPopUpPhoto={setPopUpPhoto} />
          )}
        </div>
      </main>
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box" style={{ maxHeight: 'none' }}>
          <h3 className="font-bold text-lg">{popUpPhoto?.title}</h3>
          <img src={popUpPhoto?.url} alt={popUpPhoto?.title}/>
          <div className="modal-action">
            <label htmlFor="my-modal" className="btn" onClick={() => setPopUpPhoto(undefined)}>Close</label>
          </div>
        </div>
      </div>
    </>
  )
}
