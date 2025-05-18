import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import { FaPlay } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useFetch } from "@/hooks/useFetch";

const Home = () => {
  const imageUrl = import.meta.env.VITE_IMAGE_URL;
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [mainSwiper, setMainSwiper] = useState(null);
  const [movies, setMovies] = useState([]);
  const [weekMovies, setWeekMovies] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const { data } = useFetch("/discover/movie");

  useEffect(() => {
    if (data?.results) {
      setMovies(data.results.slice(0, 8));
      setWeekMovies(data.results.slice(8, 28));
    }
  }, [data]);

  useEffect(() => {
    if (thumbsSwiper?.params) {
      thumbsSwiper.params.slideToClickedSlide = true;
      thumbsSwiper.update();
    }
  }, [thumbsSwiper]);

  const goToNext = () => {
    if (mainSwiper && activeIndex < movies.length - 1) {
      mainSwiper.slideTo(activeIndex + 1);
    }
  };

  const goToPrev = () => {
    if (mainSwiper && activeIndex > 0) {
      mainSwiper.slideTo(activeIndex - 1);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center dark:bg-black dark:text-white transition-colors duration-300 px-4">
      {thumbsSwiper && (
        <div className="w-full max-w-screen-xl mb-4">
          <Swiper
            onSwiper={setMainSwiper}
            spaceBetween={10}
            modules={[FreeMode, Navigation, Thumbs]}
            thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            className="h-[280px] sm:h-[400px] md:h-[480px] lg:h-[560px] xl:h-[640px]"
          >
            {movies.map((movie) => (
              <SwiperSlide key={movie.id}>
                <div
                  style={{ backgroundImage: `url(${imageUrl + movie.backdrop_path})` }}
                  className="relative flex flex-col bg-cover bg-center h-full justify-end items-center rounded-xl overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="relative z-10 text-white text-center p-6">
                    <p className="text-2xl md:text-4xl font-semibold mb-2">{movie.title}</p>
                    <ul className="list-disc flex gap-6 items-center justify-center text-sm md:text-lg pl-6">
                      <li className="list-none">{movie.release_date.split("-")[0]}</li>
                      <li className="uppercase">{movie.original_language}</li>
                      <li>{movie.vote_average.toFixed(1)}</li>
                    </ul>
                    <button className="flex items-center gap-2 justify-center w-full max-w-sm py-2 mt-4 bg-white text-red-600 text-base rounded-md hover:bg-gray-200 transition">
                      <FaPlay /> Watch Now
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}

      <div className="relative w-full max-w-screen-md mb-8">
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={2.5}
          breakpoints={{
            640: { slidesPerView: 3.2 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
          }}
          freeMode
          watchSlidesProgress
          modules={[FreeMode, Navigation, Thumbs]}
          className="h-[80px] sm:h-[100px] md:h-[120px] rounded-xl"
        >
          {movies.map((movie, index) => (
            <SwiperSlide
              key={movie.id}
              onClick={() => mainSwiper && mainSwiper.slideTo(index)}
              className="opacity-70 [&.swiper-slide-thumb-active]:opacity-100"
            >
              <img
                src={imageUrl + movie.backdrop_path}
                className="w-full h-full object-cover rounded-xl cursor-pointer"
                alt={`thumb-${movie.title}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          onClick={goToPrev}
          className="absolute -left-22 top-1/2 -translate-y-1/2 bg-red-600 text-white p-2 sm:p-3 rounded-full hover:bg-black/60 dark:hover:bg-white dark:text-black z-10 hidden sm:block"
        >
          <GrFormPrevious className="text-xl sm:text-3xl" />
        </button>
        <button
          onClick={goToNext}
          className="absolute -right-22 top-1/2 -translate-y-1/2 bg-red-600 text-white p-2 sm:p-3 rounded-full hover:bg-black/60 dark:hover:bg-white dark:text-black z-10 hidden sm:block"
        >
          <GrFormNext className="text-xl sm:text-3xl" />
        </button>
      </div>

      <div className="w-full max-w-screen-xl mt-24">
        <div className="flex items-center justify-between mb-4 text-lg sm:text-2xl font-medium">
          <p className="text-red-600">During the week</p>
          <Link
            to="/movies"
            className="flex items-center gap-1 text-red-600 text-sm sm:text-base hover:text-red-700 transition"
          >
            Show more <GrFormNext />
          </Link>
        </div>

        <div className="relative">
          <Swiper
            spaceBetween={20}
            slidesPerView={1.2}
            breakpoints={{
              640: { slidesPerView: 2.2 },
              1024: { slidesPerView: 4 },
            }}
            navigation={{
              nextEl: ".weekly-button-next",
              prevEl: ".weekly-button-prev",
            }}
            modules={[Navigation]}
            className="w-full"
          >
            {weekMovies.map((movie) => (
              <SwiperSlide key={movie.id}>
                <Link
                  to={`/movies/details/?id=${movie.id}`}
                  className="block h-[440px] bg-neutral-100 dark:bg-neutral-900 rounded-xl overflow-hidden transition-colors"
                >
                  <img
                    className="h-[400px] w-full object-cover"
                    src={imageUrl + movie.poster_path}
                    alt={movie.title}
                  />
                  <div className="flex justify-between items-center p-2 text-black dark:text-white">
                    <h3 className="text-sm font-medium truncate">{movie.title}</h3>
                    <p className="text-xs text-black/60 dark:text-white/70">
                      {movie.vote_average.toFixed(1)}
                    </p>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="weekly-button-prev absolute -left-20 top-1/2 -translate-y-1/2 z-10 bg-black/60 dark:bg-white/80 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full text-white text-lg sm:text-2xl dark:text-black hover:bg-red-600 cursor-pointer hidden sm:flex">
            <GrFormPrevious />
          </div>
          <div className="weekly-button-next absolute -right-20 top-1/2 -translate-y-1/2 z-10 bg-black/60 dark:bg-white/80 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full text-white text-lg sm:text-2xl dark:text-black hover:bg-red-600 cursor-pointer hidden sm:flex">
            <GrFormNext />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
