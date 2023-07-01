import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import s from './TopBanner.module.scss'
import { useAppSelevtor } from '@/store'
interface IProps {
  children?: ReactNode
}

const TopBanner: FC<IProps> = () => {
  const {banners} = useAppSelevtor((state)=>({
    banners: state.recommend.banners
  }))
  return (
    <div className={s.wrapper}>
      {
        banners.map(item => {
          return <div>{item}</div>
        })
      }
    </div>
  )
}

export default memo(TopBanner)