import React, { FC } from 'react'
import { useAppSelector } from '../hooks/redux'

const FavouritesPage: FC = () => {
  const { favourites } = useAppSelector(state => state.github)
  return (
    <div className='flex justify-center pt-10 mx-auto h-screen w-screen'>
      <ul className='list-none'>
        {favourites.length > 0 ? favourites.map(f => (
          <div className='border cursor-pointer px-3 py-2 mt-1 hover:bg-gray-500 hover:text-white  transition-all' key={f}>
            <a target={'_blank'} href={f}>{f}</a>
          </div>
        )) : <div className='font-bold'>
            not favourite 
          </div>}
      </ul>
    </div>
  )
}

export default FavouritesPage