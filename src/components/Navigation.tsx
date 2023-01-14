import React, { FC } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { RoutesPathEnum } from '../types/route'
import { useAppSelector } from '../hooks/redux'

const Navigation: FC = () => {
    const user = useAppSelector(state => state.user)
    return (
        <nav className='flex justify-between items-center h-[50px] px-10 shadow-md bg-gray-500 text-white'>
            <Link to={RoutesPathEnum.homePage} className="font-bold">Github</Link>

            <span className='flex gap-2 items-center'>
                <NavLink to={RoutesPathEnum.homePage}>home</NavLink>
                <NavLink to={RoutesPathEnum.favouritePage}>favourites</NavLink>
                <NavLink to={RoutesPathEnum.userPage}>{
                    user.isLoading ? 'my user' : user.isAuth ?
                        <img className='h-[32px] border-2 rounded-full w-[32px]' src={user.img} alt="my user" /> : 'my user'
                }</NavLink>
            </span>
        </nav>
    )
}

export default Navigation