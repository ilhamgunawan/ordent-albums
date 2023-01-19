import Head from "next/head"
import AlbumItem from "@/components/AlbumItem"
import { GetServerSideProps } from "next"
import { getAlbums, Album } from "@/lib/album"
import { useEffect } from "react"

export const getServerSideProps: GetServerSideProps = async () => {
  const albums = await getAlbums()

  return {
    props: { albums }
  }
}

type Props = {
  albums: Album[]
}

export default function AlbumsPage({ albums }: Props) {
  useEffect(() => {
    console.log("albums: ", albums)
  }, [albums])
  return (
    <>
      <Head>
        <title>Albums</title>
      </Head>
      <main className="flex flex-col gap-3 m-auto p-4 max-w-3xl">
        <h1 className="inline-block text-2xl sm:text-3xl font-extrabold text-slate-900">Albums</h1>
        <div className="text-sm breadcrumbs">
          <ul>
            <li>Home</li>
          </ul>
        </div>
        {albums.map((album) => 
          <AlbumItem key={album.id} album={album} />
        )}
      </main>
    </>
  )
}
