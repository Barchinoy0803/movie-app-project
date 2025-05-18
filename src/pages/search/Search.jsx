import SearchCard from '@/components/SearchCard';
import { useFetch } from '@/hooks/useFetch';
import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";

const Search = () => {
  const apiKey = import.meta.env.VITE_API_KEY;
  const [query, setQuery] = useState("")

  const { data, loading } = useFetch(`/search/movie?api_key=${apiKey}`, { query })
  console.log(data);
  
  return (
    <div className='container mx-auto flex flex-col items-center mt-[50px] justify-center'>
      <div className='flex py-5 px-5 gap-3 border border-[#4D4D4D] w-full rounded-[12px]'>
        <FaSearch className='text-[25px] text-red-700' />
        <input value={query} onChange={(e) => setQuery(e.target.value)} className='outline-none' type="text" placeholder='Search movies' />
      </div>
      <div className='flex flex-col gap-3 mt-6 w-full'>
        {
          data?.results?.length ?
            data?.results?.map((item) => (
              <SearchCard data={item} />
            ))
            :
            <div className='flex flex-col items-center'>
              <p className='mt-[120px] mb-[80px] text-[20px]'>The page is still empty</p>
              <p className='text-[20px]'>No results found for your query.</p>
            </div>
        }
      </div>
    </div>
  )
}

export default Search