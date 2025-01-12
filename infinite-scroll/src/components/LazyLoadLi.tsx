import { useEffect, useRef } from 'react'

type Props = {
    id: number;
    src: string;
}

export const LazyLoadLi = ({id, src}: Props) => {
    const imgRef = useRef<HTMLImageElement | null>(null)

    useEffect(() => {
        if(!imgRef.current) return ;

        const intersectionObserver = new IntersectionObserver((entries, observer) => {    
            if(entries[0].isIntersecting && imgRef.current) {
                imgRef.current.src = src
                observer.unobserve(imgRef.current)
            }
        }, {
          root: null,
          rootMargin: '0px 0px 30px 0px',
          threshold: 1
        });
        intersectionObserver.observe(imgRef.current);
    }, [imgRef.current])

  return (
    <li key={id} style={{
        width:"100px" ,
        height:"100px"
    }}>
        <img ref={imgRef} className='image' src='' width="100px" height="100px" alt={'image-' + id} />
    </li>
  )
}