import {actions as saveGameInfoActions} from '../store/saveGameInfo.slice.js'
import {useDispatch} from "react-redux";
import {bindActionCreators} from "@reduxjs/toolkit";
import {useMemo} from "react";

const rootActions = {
    ...saveGameInfoActions
}

export const useActions = () => {
    const dispatch = useDispatch()
    return useMemo(()=>bindActionCreators(rootActions,dispatch),[dispatch])
}