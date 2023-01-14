import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { bindActionCreators } from "@reduxjs/toolkit";
import { githubActions } from "../store/github/github.slice";
import { userActions } from "../store/user/user.slice";

const actions = {
    ...githubActions,
    ...userActions,
}
export const useAppSelector:TypedUseSelectorHook<RootState> = useSelector

export const useActions = () =>{
    const dispatch = useDispatch()
    return bindActionCreators(actions,dispatch)
}