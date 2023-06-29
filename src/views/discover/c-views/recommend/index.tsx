import React, { memo, useEffect, useState } from 'react'
import type { FC, ReactNode } from 'react'
import hyRequest from '@/service'
import s from './index.module.scss'
interface IProps {
  children?: ReactNode
}
interface IBannerRoot {
  imageUrl: string
  targetId: number
  adid: any
  targetType: number
  titleColor: string
  typeTitle: string
  url: any
  exclusive: boolean
  video: any
  song: any
  scm: string
  bannerBizType: string
}

const Recommend: FC<IProps> = () => {
  const [banners, setBanners] = useState<IBannerRoot[]>([])
  useEffect(() => {
    hyRequest.get({
      url: "/banner"
    }).then(res => {
      setBanners(res.banners)
    })
  }, [])
  return (
    <div className={s.wrapper}>
      {
        banners.map((item, index) => {
          return <div className={s.imgItem} key={index}>
            <img src={item.imageUrl} alt="" />
          </div>
        })
      }
    </div>
  )
}

export default memo(Recommend)