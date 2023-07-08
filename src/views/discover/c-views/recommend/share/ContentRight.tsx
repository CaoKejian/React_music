import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import s from './contentRight.module.scss'
import RightTopLogin from './components/RightTopLogin'
import LittleTitle from '@/components/LittleTitle'

interface IProps {
  children?: ReactNode
}

const ContentRight: FC<IProps> = () => {
  return (
    <div className={s.wrapper}>
      <RightTopLogin />
      <div className={s.box1}>
        <LittleTitle title={'入驻歌手'} isShow={true}/>
      </div>
    </div>
  )
}

export default memo(ContentRight)