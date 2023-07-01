import { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import s from './index.module.scss'
import { useAppDispatch } from '@/store'
import { fetchBannerAction } from './store/recommend'
interface IProps {
  children?: ReactNode
}


const Recommend: FC<IProps> = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchBannerAction())
  }, [])

  return (
    <div className={s.wrapper}>
      
    </div>
  )
}

export default memo(Recommend)