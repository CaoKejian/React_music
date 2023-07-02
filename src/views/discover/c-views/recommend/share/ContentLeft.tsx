import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import s from './contentLeft.module.scss'
import Title from '@/components/Title'

interface IProps {
  children?: ReactNode
}

const ContentLeft: FC<IProps> = () => {
  const arr = ['华语','流行','摇滚','民谣','电子']
  return (
    <div className={s.wrapper}>
      <Title arr={arr} title={'热门推荐'}></Title>
    </div>
  )
}

export default memo(ContentLeft)