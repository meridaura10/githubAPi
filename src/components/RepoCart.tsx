import React, { FC, useState } from 'react'
import { IRepo } from '../types/server'
import { useActions, useAppSelector } from '../hooks/redux'

interface IRepoCartProps {
    repo: IRepo
}

const RepoCart: FC<IRepoCartProps> = ({
    repo
}) => {
    const { favourites } = useAppSelector(state => state.github)
    const [isFav, setisFev] = useState(favourites.includes(repo.html_url))
    const { addFavourite, removeFavourite } = useActions()
    const addToFavourite = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        addFavourite(repo.html_url)
        setisFev(true)
    }
    const removeToFavourite = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        removeFavourite(repo.html_url)
        setisFev(false)
    }
    return (
        <div className='border py-3 px-5 rounded mb-2 hover:shadow-md hover:bg-gray-100  transition-all'>
            <a href={repo.html_url} target="_blank">
                <h2 className='text-ld font-bold'>
                    {repo.full_name}
                    <p className="text-sm">
                        forks: <span className='font-bold mr-2'>{repo.forks}</span>
                        watchers: <span className='font-bold'>{repo.watchers}</span>
                    </p>
                    <p className='text-sm font-thin'>
                        {repo?.description}
                    </p>
                </h2>
                {isFav
                    ? <button onClick={removeToFavourite} className='py-2 px-4 text-white mt-[5px] bg-red-400 rounded hover:shadow-md transition-all'>remove favourite</button>
                    : <button onClick={addToFavourite} className='py-2 px-4 mr-1 text-white mt-[5px] bg-yellow-500 rounded hover:shadow-md transition-all'>add favourite</button>
                }
            </a>
        </div>
    )
}

export default RepoCart 