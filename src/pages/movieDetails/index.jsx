import { useFetch } from "@/hooks/useFetch";
import { useSearchParams } from "react-router-dom";
import { FaGlobe, FaMoneyBillWave, FaClock, FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import { useEffect } from "react";

const MoveiDetails = () => {
  const apiKey = import.meta.env.VITE_API_KEY;
  const imageUrl = import.meta.env.VITE_IMAGE_URL;
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");

  const { data } = useFetch(`movie/${id}?api_key=${apiKey}`);
  const genreId = data?.genres?.[0]?.id;

  const { data: genreMovies } = useFetch(
    genreId ? `discover/movie?api_key=${apiKey}&with_genres=${genreId}` : null
  );

  const { data: watchProviders } = useFetch(
    id ? `movie/${id}/watch/providers?api_key=${apiKey}` : null
  );

  const providers = watchProviders?.results?.US || {};

  useEffect(() => window.scrollTo({ top: 0, behavior: 'smooth' }), [])

  if (!data) return <div className="text-center text-white py-20">Loading...</div>;


  return (
    <div className="relative text-white">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center brightness-[0.3]"
        style={{ backgroundImage: `url(${imageUrl + data.backdrop_path})` }}
      />

      <div className="relative z-10 px-6 py-12 max-w-7xl mx-auto flex flex-col md:flex-row gap-10">
        <img
          src={imageUrl + data.poster_path}
          alt={data.title}
          className="w-[260px] rounded-2xl shadow-xl object-cover"
        />

        <div className="flex-1 space-y-4">
          <h1 className="text-4xl font-bold">{data.title}</h1>
          <p className="italic text-lg text-gray-300">{data.tagline}</p>
          <div className="flex flex-wrap gap-2 pt-2">
            {data.genres.map((genre) => (
              <span
                key={genre.id}
                className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm"
              >
                {genre.name}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-4 items-center text-sm text-gray-300">
            <span className="flex items-center gap-[4px]"><FaClock className="inline" /> {data.runtime} min</span>
            <span className="flex items-center gap-[4px]"><FaGlobe className="inline" /> {data.origin_country?.join(", ")}</span>
            <span className="flex items-center gap-[4px]"><FaMoneyBillWave className="inline" /> Budget: ${data.budget.toLocaleString()}</span>
            <span className="flex items-center gap-[4px]"><FaStar className="inline text-yellow-400" /> {data.vote_average.toFixed(1)}</span>
          </div>
          <p className="pt-4 text-gray-200 text-base">{data.overview}</p>

          {providers.flatrate?.length > 0 && (
            <div className="pt-6">
              <h3 className="text-lg font-semibold mb-2">Available on</h3>
              <div className="flex gap-4 flex-wrap items-center">
                {providers.flatrate.map((provider) => (
                  <div key={provider.provider_id} className="flex flex-col items-center text-sm">
                    <img
                      src={`https://image.tmdb.org/t/p/w92${provider.logo_path}`}
                      alt={provider.provider_name}
                      className="w-10 h-10 rounded-md object-contain"
                    />
                    <span>{provider.provider_name}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {genreMovies?.results?.length > 0 && (
        <div className="relative z-10 px-6 max-w-7xl mx-auto mt-16">
          <h2 className="text-2xl font-semibold mb-6">More in {data.genres[0].name}</h2>
          <Swiper
            slidesPerView={2}
            spaceBetween={15}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            modules={[Autoplay]}
            breakpoints={{
              640: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 5 }
            }}
          >
            {genreMovies.results
              .filter((m) => m.id !== data.id)
              .slice(0, 15)
              .map((movie) => (
                <SwiperSlide key={movie.id}>
                  <a href={`/movies/details?id=${movie.id}`} className="block">
                    <img
                      src={imageUrl + movie.poster_path}
                      alt={movie.title}
                      className="rounded-lg w-full h-[280px] object-cover"
                    />
                    <p className="mt-2 text-sm text-white text-center line-clamp-2">{movie.title}</p>
                  </a>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      )}
    </div>
  );
};

export default MoveiDetails;
