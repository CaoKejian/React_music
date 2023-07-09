import { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import s from './index.module.scss'
import { useAppDispatch } from '@/store'
import { fetchBannerAction, fetchHotArtistAction, fetchHotRecommendAction, fetchNewDoscAction, fetchRankingAction } from './store/recommend'
import TopBanner from './share/TopBanner'
import ContentLeft from './share/ContentLeft'
import ContentRight from './share/ContentRight'
interface IProps {
  children?: ReactNode
}



const Recommend: FC<IProps> = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchBannerAction())
    dispatch(fetchHotRecommendAction())
    dispatch(fetchNewDoscAction())
    dispatch(fetchRankingAction())
    dispatch(fetchHotArtistAction())
  }, [dispatch])
  return (
    <div className={s.wrapper}>
      <TopBanner />
      <div className={s.content}>
        <ContentLeft />
        <ContentRight />
      </div>
    </div>
  )
}

export default memo(Recommend)