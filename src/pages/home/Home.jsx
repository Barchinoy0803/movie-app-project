import { useFetch } from '@/hooks/useFetch'
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'

const Home = () => {
    const imageUrl = import.meta.env.VITE_IMAGE_URL;
    const [thumbsSwiper, setThumbsSwiper] = useState(null)
    const [movies, setMovies] = useState()
    const { loading, data } = useFetch("/discover/movie")

    useEffect(() => {
        if (data) {
            setMovies((data.results.slice(0, 5)))
        }

    }, [data])


    return (
        <div className="flex flex-col items-center justify-center">
            <Swiper
                spaceBetween={10}
                modules={[FreeMode, Navigation, Thumbs]}
                thumbs={{ swiper: thumbsSwiper }}
                className="w-[1360px] h-[640px] mb-4"
                >
                {movies?.map((movie, i) => (
                    <SwiperSlide key={i} className="flex justify-center items-center  text-center text-lg">
                        <div style={{ backgroundImage: `url(${imageUrl + movie.backdrop_path})` }} className="flex flex-col bg-cover bg-center h-full align-bottom justify-end pb-[24px] rounded-[12px]">
                            <p className='text-white text-[34px]'>{movie.title}</p>
                            <ul className='list-disc flex gap-[30px] items-center justify-center'>
                                <li className='text-white text-[18px] list-none'>{movie.release_date.split("-")[0]}</li>
                                <li className='uppercase text-white text-[18px]'>{movie.original_language}</li>
                                <li className='text-white text-[18px]'>{movie.vote_average.toFixed(1)}</li>
                            </ul>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <Swiper
              style={{
                  '--swiper-navigation-color': 'red',
                  '--swiper-pagination-color': '#fff',
                }}
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                navigation={true}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="w-[600px] h-[120px] px-0 py-2 rounded-[12px]"
            >
                {movies?.map((movie, i) => (
                    <SwiperSlide
                        key={i}
                        className="w-1/4 h-full opacity-70 [&.swiper-slide-thumb-active]:opacity-100"
                    >
                        <img
                            src={imageUrl + movie.backdrop_path}
                            className="w-full h-full object-cover block rounded-[12px]"
                            alt={`thumb-${i + 1}`}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default React.memo(Home)
