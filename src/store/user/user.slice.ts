import { PayloadAction, createSlice } from "@reduxjs/toolkit"

interface userState {
    login: string,
    isAuth: boolean,
    id: string,
    img: string,
    isLoading: boolean,
}
interface IPayload {
    login: string,
    id: string,
    img: string,
    isAuth: boolean,
    isLoading: boolean,
}
const initialState: userState = {
    isAuth: false,
    login: '',
    id: '',
    isLoading: true,
    img: '',
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state,actions: PayloadAction<IPayload>){
            state.id = actions.payload.id
            state.img = actions.payload.img
            state.isAuth = actions.payload.isAuth
            state.login = actions.payload.login
            state.isLoading = actions.payload.isLoading
        },
        removeUser(state){
            state.id = ''
            state.img = ''
            state.isAuth = false
            state.login = ''
            state.isLoading = false
        }
    }
})

export const userActions = userSlice.actions
export const userReducer = userSlice.reducer