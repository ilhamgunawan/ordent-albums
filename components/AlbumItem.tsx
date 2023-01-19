import Link from "next/link"
import { useQuery } from "react-query"
import { Album } from "@/lib/album"
import { getUser } from "@/lib/user"

type Props = {
  album: Album
}

export default function AlbumItem({ album }: Props) {
  const queryId = `user-${album.userId}`
  const query = useQuery(queryId, () => getUser(album.userId))

  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <div className="card-body flex flex-row items-start gap-3">
        <div className="avatar placeholder flex-none mt-1">
          <div className="bg-neutral-focus w-10 h-10 text-neutral-content rounded-full">
            <span className="text-xs">{query.data?.username.slice(0, 1)}</span>
          </div>
        </div>
        <div className="shrink">
          <h2 className="card-title">{album.title}</h2>
          <p className="text-gray-400">{query.data?.username}</p>
        </div>
      </div>
      <div className="card-actions pb-8 px-8 justify-end">
        <Link href={`/albums/${album.id}`} className="btn btn-primary">Detail</Link>
      </div>
    </div>
  )
}
