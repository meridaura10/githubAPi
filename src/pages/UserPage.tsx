import React, { FC } from 'react'
import { useActions, useAppSelector } from '../hooks/redux'
import { useGetUserQuery, useGetUserReposQuery } from '../store/github/github.api'
import RepoCart from '../components/RepoCart'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase'

const UserPage: FC = () => {
  const userLogin = useAppSelector(state => state.user).login
  const { data: user, isLoading, isError } = useGetUserQuery(userLogin)
  const { removeUser } = useActions()
  const { data: repos, isLoading: isRepoLoading, isError: isErrorRepo } = useGetUserReposQuery(userLogin)

  const singOut = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    signOut(auth).then(() =>{
      removeUser()
      alert('you have successfully logged out')
    })
  }
  return (
    <div className='flex justify-center pt-10 mx-auto h-screen w-screen'>
      <div className='w-full max-w-screen-lg'>
        {isError ? <p className='text-center'>an error occurred while loading the user</p> :
          isLoading ? <div className='text-center'>user loading...</div> : <a href={user?.html_url} target="_blank" className='flex justify-center mb-3 gap-3 items-center'>
            <div className='w-[80px] h-[80px]'><img className='object-cover rounded-full w-full h-full' src={user?.avatar_url} alt="user img" /></div>
            <span className='text-lg font-bold'>{user?.login}</span>
            <button onClick={singOut} className='bg-red-400 text-white px-3 py-2 rounded-lg'>sign out</button>
          </a>}
        {isErrorRepo ? <p className='text-center text-lg'>an error occurred while loading the repositories</p> :
          isRepoLoading ? <div className='text-center text-lg mt-3'>repositories loading...</div> : <ul className='list-none px-2'>
            {repos?.map(repo => <RepoCart key={repo.id} repo={repo} />)}
          </ul>
        }
      </div>
    </div>
  )
}

export default UserPage