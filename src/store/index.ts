import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './modules/counter'
import { useSelector, TypedUseSelectorHook } from 'react-redux'
const store = configureStore({
  reducer: {
    counter: counterReducer
  }
})

type state = typeof store.getState
export type FnReturnType = ReturnType<state>
// useAppSelevtor的hook
export const useAppSelevtor: TypedUseSelectorHook<FnReturnType> = useSelector

export default store