import { useEffect, useMemo, useRef, useState } from 'react'
import axios from 'axios'


export const IntersectionObserverTest = () => {
    const endRef = useRef<HTMLLIElement | null>( null)

  const [photoList, setPhotoList] = useState<any[]>([])
  const [page, setPage] = useState<number>(1)

  const SIZE = 30;
  const currentData = useMemo(() => {
    if(!photoList || photoList.length === 0) return []
    return photoList.filter((_, i) => {
      return i < SIZE * page
    })
  }, [photoList, page])
  
  const fetchPhotos = async () => {
    const {data} = await axios('https://jsonplaceholder.typicode.com/photos', {
      method: 'get'
    })

    setPhotoList(data)
  }

  useEffect(() => {
    fetchPhotos();
  }, [])


  useEffect(() => {
    if(!endRef.current) return ;

    const intersectionObserver = new IntersectionObserver((entries) => {
      if (entries[0].intersectionRatio <= 0) return ; 
      setPage((prev) => prev + 1)
    }, {
      root: null,
      threshold: 1
    });

    // 주시 시작
    intersectionObserver.observe(endRef.current);
  }, [endRef.current])

  return (
    <ul>
    {currentData?.map((data, id) => (
      <li key={id} style={{display: 'flex', gap: '8px', marginBottom: '8px'}} >
        <img src={data.url} width='30px' height="30px" />
        <span>{data?.title ?? ''}</span>
      </li>
    ))}
    {currentData.length !== 0 && <li ref={endRef} className='endList'>Loading...</li>}
  </ul>
  )
}