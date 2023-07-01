import { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import s from './index.module.scss'
import { useAppDispatch } from '@/store'
import { fetchBannerAction } from './store/recommend'
import TopBanner from './share/TopBanner'
interface IProps {
  children?: ReactNode
}


const Recommend: FC<IProps> = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchBannerAction())
  }, [dispatch])

  return (
    <div className={s.wrapper}>
      <TopBanner />
    </div>
  )
}

export default memo(Recommend)