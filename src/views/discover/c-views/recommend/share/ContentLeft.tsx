import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import s from './contentLeft.module.scss'
import Title from '@/components/Title'
import { useAppSelevtor } from '@/store'
import { shallowEqual } from 'react-redux'

interface IProps {
  children?: ReactNode
}

const ContentLeft: FC<IProps> = () => {
  const TitleArr = ['华语','流行','摇滚','民谣','电子']
  const {hotRecommends} = useAppSelevtor((state) => ({
    hotRecommends: state.recommend.hotRecommend
  }),shallowEqual)
  
  return (
    <div className={s.wrapper}>
      <Title arr={TitleArr} title='热门推荐' gotoRoute='/discover/songs'></Title>
      <div className={s.hotRecommend}>
        {
          hotRecommends.map((item,index) => {
            return <div key={index}>{item.name}</div>
          })
        }
      </div>
    </div>
  )
}

export default memo(ContentLeft)