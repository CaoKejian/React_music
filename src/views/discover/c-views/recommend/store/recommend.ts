import { IHotRecommend } from "@/react-app-env";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getBanner, getHotRecommend } from "../service/recommend";

export const fetchBannerAction = createAsyncThunk('banners', async (args, { dispatch }) => {
  const res = await getBanner()
  dispatch(changebannersAction(res.banners))
})
export const fetchHotRecommendAction = createAsyncThunk('hotRecommend', async (args, { dispatch }) => {
  const res = await getHotRecommend(8)
  dispatch(changeHotRecommendAction(res.result))
})
interface IRecommendState {
  banners: {
    imageUrl: string,
    targetId: number,
    adid: any,
    targetType: number,
    titleColor: string,
    typeTitle: string,
    url: any,
    exclusive: boolean,
    video: any,
    song: any,
    scm: string,
    bannerBizType: string
  }[]
  hotRecommend: IHotRecommend[]
}
const initialState: IRecommendState = {
  banners: [],
  hotRecommend: []
}
const recommendSlice = createSlice({
  name: 'recommend',
  initialState: initialState,
  reducers: {
    changebannersAction: function (state, { payload }) {
      state.banners = payload
    },
    changeHotRecommendAction: function (state, { payload }) {
      state.hotRecommend = payload
    }
  }
})
// 1.定义reducers里的action方法
// 2.createAsyncThunk异步请求数据
// 3.dispatch(方法action)更替数据
export const { changebannersAction } = recommendSlice.actions
export const { changeHotRecommendAction } = recommendSlice.actions
export default recommendSlice.reducer