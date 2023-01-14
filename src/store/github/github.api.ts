import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { IRepo, IUserGithubApi, ServerResponse } from '../../types/server';
export const githubApi = createApi({
    reducerPath: 'github/api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.github.com/'
    }),
    endpoints: (build) => ({
        searchUsers: build.query<ServerResponse<IUserGithubApi>,string>({
            query: (search: string) => ({
                url: 'search/users',
                params:{
                    q: search,
                }
            })
        }),
        getUserRepos: build.query<IRepo[],string>({
            query: (login:string) => ({
                url: `users/${login}/repos`
            })
        }),
        getUser: build.query<IUserGithubApi,string>({
            query: (login:string) => ({
                url: `users/${login}/`
            })
        })
    })
})

export const {useSearchUsersQuery,useLazyGetUserReposQuery,useGetUserQuery,useGetUserReposQuery} = githubApi