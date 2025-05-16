import React from 'react'
import Card from './Card'

const MovieView = ({movies}) => {
  return (
    <div className='container mx-auto grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 md:gap-5 gap-2'>
        {
            movies?.map((item) => (
                <Card key={item.id} item={item}/>
            ))
        }
    </div>
  )
}

export default React.memo(MovieView)