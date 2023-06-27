import { createSlice } from '@reduxjs/toolkit'


const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 100,
    message: 'colin',
  },
  reducers: {}
})



export default counterSlice.reducer