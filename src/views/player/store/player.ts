import { createSlice } from "@reduxjs/toolkit"

interface IPlayerState {
  currentSong: any
}
const initialState: IPlayerState = {
  currentSong:{}
}
const playerSlice = createSlice({
  name:'player',
  initialState,
  reducers:{}
})

export default playerSlice.reducer