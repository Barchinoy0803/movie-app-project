import MovieView from '@/components/movie-view/MovieView'
import Skeleton from '@/components/skeleton/Skeleton'
import { useFetch } from '@/hooks/useFetch'
import React from 'react'

const Home = () => {
    const { loading, data } = useFetch("/discover/movie")

    return (
        <div>
            <MovieView movies={data?.results} />
            {loading && <Skeleton count={20}/>}
        </div>
    )
}

export default React.memo(Home)