import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import s from './TopBanner.module.scss'
import { useAppSelevtor } from '@/store'
import { shallowEqual } from 'react-redux'
interface IProps {
  children?: ReactNode
}

const TopBanner: FC<IProps> = () => {
  const {banners} = useAppSelevtor((state)=>({
    banners: state.recommend.banners
  }),
    shallowEqual
  )
  console.log(banners);
  
  return (
    <div className={s.wrapper}>
      {
        banners.map((item,index) => {
          return <div className={s.imgItem} key={index}>
            <img src={item.imageUrl} alt="" />
          </div>
        })
      }
    </div>
  )
}

export default memo(TopBanner)