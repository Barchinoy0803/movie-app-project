import React, { useEffect, useState } from 'react';
import { useFetch } from '@/hooks/useFetch';
import { useSearchParams } from 'react-router-dom';
import MovieView from '@/components/movie-view/MovieView';
import Skeleton from '@/components/skeleton/Skeleton';
import './Movies.scss';
import PaginationP from '../../components/pagination';


const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialGenre = searchParams.get('genre') || '';
  const initialPage = parseInt(searchParams.get('page') || '1', 10);

  const [selectedGenre, setSelectedGenre] = useState(initialGenre);
  const [page, setPage] = useState(initialPage);
  const [genres, setGenres] = useState([]);
  const [selectedGenreName, setSelectedGenreName] = useState('Movies');

  const { data, loading } = useFetch(
    `/discover/movie`,
    {
      with_genres: selectedGenre,
      without_genres: '18,10749,36',
      page,
    }
  );

  const { data: genreData } = useFetch(`/genre/movie/list`);

  useEffect(() => {
    if (genreData?.genres) {
      const genreList = [{ id: '', name: 'All' }, ...genreData.genres];
      setGenres(genreList);
      const currentGenre = genreList.find(g => String(g.id) === selectedGenre);
      setSelectedGenreName(currentGenre ? (currentGenre.name === 'All' ? 'Movies' : `${currentGenre.name} Movies`) : 'Movies');
    }
  }, [genreData, selectedGenre]);

  useEffect(() => {
    const params = {};
    if (selectedGenre) params.genre = selectedGenre;
    if (page > 1) params.page = page.toString();
    setSearchParams(params);
  }, [selectedGenre, page, setSearchParams]);

  const handleGenreChange = (genreId) => {
    setSelectedGenre(genreId);
    setPage(1);
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
    window.scrollTo({ top: 0, behavior: 'smooth' })
  };
  
  return (
    <div className="px-6 py-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-semibold mb-6 text-center">{selectedGenreName}</h1>

      <div
        className="flex gap-3 mb-6 px-2 overflow-x-auto scrollbar-hide"
        style={{ WebkitOverflowScrolling: 'touch' }}
      >
        {genres.map((genre) => (
          <button
            key={genre.id}
            onClick={() => handleGenreChange(String(genre.id))}
            className={`flex-shrink-0 px-5 py-2 rounded-full border text-sm font-medium transition-colors duration-200 shadow-md whitespace-nowrap hover:bg-[#c61f1f] hover:text-white ${
              selectedGenre === String(genre.id)
                ? 'bg-[#c61f1f] text-white'
                : 'bg-white text-gray-600 dark:bg-gray-600 dark:text-gray-950'
            }`}
          >
            {genre.name}
          </button>
        ))}
      </div>

      <MovieView movies={data?.results} />
      {loading && <Skeleton count={20} />}

      {!loading && data?.results?.length === 0 && (
        <div className="text-center py-20 text-gray-500 flex flex-col items-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/7486/7486953.png"
            alt="No Movies Found"
            className="w-48 h-48 mb-6 opacity-70"
          />
          <h2 className="text-xl font-semibold">No movies found</h2>
          <p className="mt-2 text-sm">Try selecting a different genre.</p>
        </div>
      )}

      {data?.total_pages > 1 && (
        <div className="flex justify-center mt-8">
          <PaginationP
            currentPage={page}
            totalPages={data.total_pages}
            onPageChange={handlePageChange}
          />
        </div>
      )}
    </div>
  );
};

export default Movies;
