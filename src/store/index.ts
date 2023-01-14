import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { githubApi } from './github/github.api'
import { githubReducer } from './github/github.slice'
import { userReducer } from './user/user.slice'

export const store = configureStore({
  reducer: {
    [githubApi.reducerPath] : githubApi.reducer,
    github: githubReducer,
    user: userReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(githubApi.middleware)
}) 

export type RootState = ReturnType<typeof store.getState> 