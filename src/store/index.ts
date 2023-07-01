import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './modules/counter'
import { useSelector, TypedUseSelectorHook, useDispatch, shallowEqual } from 'react-redux'
import recommendReducer from "@/views/discover/c-views/recommend/store/recommend";
const store = configureStore({
  reducer: {
    counter: counterReducer,
    recommend:recommendReducer
  }
})

type state = typeof store.getState
export type FnReturnType = ReturnType<state>
type DispatchType = typeof store.dispatch
// useAppSelevtor的hook
export const useAppSelevtor: TypedUseSelectorHook<FnReturnType> = useSelector
export const useAppDispatch: () => DispatchType = useDispatch
export const shallowEqualApp = shallowEqual

export default store