import React, { FC,useState,useEffect } from 'react'
import { useLazyGetUserReposQuery, useSearchUsersQuery } from '../store/github/github.api'
import { useDebounce } from '../hooks/debounce'
import RepoCart from '../components/RepoCart'


const HomePage: FC = () => {
  const [search,setSearch] = useState<string>('')
  const [dropdown,setDropdown] = useState<boolean>(false)
  const debouced = useDebounce(search,300)
  const { isLoading, isError, data } = useSearchUsersQuery(debouced,{
    skip: debouced.length < 1
  })
  const [fetchRepos,{data: repos,isLoading: isLoadingRepos}] = useLazyGetUserReposQuery()
  useEffect(() =>{
    setDropdown(debouced.length > 0 && data?.items.length! > 0)
  },[debouced,data?.items])
  const getRepos = (login: string) =>{
    fetchRepos(login); 
    setDropdown(false)
  }    
  return (
    <div className='flex justify-center pt-10 mx-auto h-screen w-screen'>
      {isError && <p className='text-center'>Something went wrong...</p>} 
      <div className='relative w-[560px]'>
        <input onChange={e => setSearch(e.target.value)} className='border py-2 px-4 w-full h-[42px] focus:outline-sky-200 mb-2' placeholder='Search for Github user name...' type="text" />
       {dropdown && <ul className='absolute top-[42px] left-0 right-0 max-h-[200px] shadow-md overflow-y-auto bg-white'>
          {isLoading && <p className="text-center">loading...</p>}
          { data?.items.map(user => (
            <li onClick={() =>{getRepos(user.login)}} className='py-2 px-4 hover:bg-gray-500 hover:text-white transition-colors cursor-pointer' key={user.id}>
                {user.login}
            </li>
          ))}
        </ul>}
        <div className="container">
        {
          isLoadingRepos && <p className='text-center'>Repos are loading...</p>
        }
        {
          repos?.map(repo =>(
            <RepoCart repo={repo} key={repo.id} />
          ))
        }
      </div>
      </div>

    </div>
  )
}

export default HomePage