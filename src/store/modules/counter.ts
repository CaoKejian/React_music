import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IState {
  count: number
  message: string
  direction:'left'|'right'|'top'|'bottom'
}
const initialState:IState = {
  count: 100,
  message: 'colin',
  direction: 'left'
}
const counterSlice = createSlice({
  name: 'counter',
  initialState: initialState,
  reducers: {
    changeMessage(state, action:PayloadAction<string>) {
      state.message = action.payload
    }
  }
})


export const { changeMessage } = counterSlice.actions
export default counterSlice.reducer