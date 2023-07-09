import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import s from './contentRight.module.scss'
import RightTopLogin from './components/RightTopLogin'
import LittleTitle from '@/components/LittleTitle'
import { useAppSelevtor } from '@/store'
import { shallowEqual } from 'react-redux'
import { imgFormat } from '@/utils/format'

interface IProps {
  children?: ReactNode
}

const ContentRight: FC<IProps> = () => {
  const { hotArtists } = useAppSelevtor((state) => ({
    hotArtists: state.recommend.hotArtists
  }),
    shallowEqual
  )
  return (
    <div className={s.wrapper}>
      <RightTopLogin />
      <div className={s.box1}>
        <LittleTitle title={'入驻歌手'} isShow={true} toLink='#/discover/artist' />
        <div className={s.hotArtist}>
          {hotArtists.map(item => {
            return <a href='#/discover/artist' key={item}>
              <img src={imgFormat(item.picUrl, 62)} alt="" />
              <div className={s.info}>
                <div className={s.name}>{item.name}</div>
                <div className={s.alias}>{item.alias}</div>
              </div>
            </a>
          })}
        </div>
        <div className={s.applyArtist}>
          <a href="#/">申请成为Colin音乐人</a>
        </div>
      </div>
    </div>
  )
}

export default memo(ContentRight)