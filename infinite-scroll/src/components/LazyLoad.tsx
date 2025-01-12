import axios from "axios";
import { useEffect,  useState } from "react";
import { LazyLoadLi } from "./LazyLoadLi";


export const LazyLoad = () => {
const [photoList, setPhotoList] = useState<any[]>([])


const fetchPhotos = async () => {
    const { data } = await axios(`https://jsonplaceholder.typicode.com/photos`, {
      method: 'get'
    })

    setPhotoList((data as any[]).filter((_, index) => index < 20))
  }

  useEffect(() => {
    fetchPhotos();
  }, [])

  return (
    <ul>
        {photoList.map((photo) => 
            <LazyLoadLi key={photo.id} id={photo.albumId} src={photo.thumbnailUrl} />
        )}
    </ul>
  )
}