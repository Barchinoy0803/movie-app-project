import React from 'react'
import { Link } from 'react-router-dom';

const SearchCard = ({ data }) => {
    const imageUrl = import.meta.env.VITE_IMAGE_URL;

    return (
        <Link to={`/movies/details/?id=${data.id}`} className='flex items-center gap-6 py-1.5 px-2 bg-gray-100 w-full rounded-[12px] dark:bg-dark'>
            <img className='w-[70px] h-[60px]  rounded-[16px] object-cover' src={imageUrl + data.poster_path} alt="" />
            <p>{data.title}</p>
        </Link>
    )
}

export default SearchCard