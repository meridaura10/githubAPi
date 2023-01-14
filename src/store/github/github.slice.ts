import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { getDataFromLocalStorage, setDataToLocalStorage } from "../../utils/localStorage"
import { LS_FAV_KEY } from "../../constants/localStorage"

interface GithubState {
    favourites: string[]
}

const initialState: GithubState = {
    favourites: getDataFromLocalStorage(LS_FAV_KEY) || []
}

export const githubSlice = createSlice({
    name: 'github',
    initialState,
    reducers: {
        addFavourite(state,actions: PayloadAction<string>){
            state.favourites.push(actions.payload)
            setDataToLocalStorage({
                key: LS_FAV_KEY,
                data: JSON.stringify(state.favourites)
            })
        },
        removeFavourite(state,actions: PayloadAction<string>){
            state.favourites = state.favourites.filter(f => f !== actions.payload)
            setDataToLocalStorage({
                key: LS_FAV_KEY,
                data: JSON.stringify(state.favourites)
            })
        }
    }
})

export const githubActions = githubSlice.actions
export const githubReducer = githubSlice.reducer