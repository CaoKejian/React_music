import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import s from './contentLeft.module.scss'
import Title from '@/components/Title'
import { useAppSelevtor } from '@/store'
import { shallowEqual } from 'react-redux'
import ItemSong from '@/components/ItemSong'
import {
  CaretLeftOutlined,
  CaretRightOutlined,
} from '@ant-design/icons';

interface IProps {
  children?: ReactNode
}

const ContentLeft: FC<IProps> = () => {
  const TitleArr = ['华语', '流行', '摇滚', '民谣', '电子']
  const { hotRecommends } = useAppSelevtor((state) => ({
    hotRecommends: state.recommend.hotRecommend
  }), shallowEqual)
  return (
    <div className={s.wrapper}>
      <Title arr={TitleArr} title='热门推荐' gotoRoute='/discover/songs'></Title>
      <div className={s.hotRecommend}>
        {
          hotRecommends.map((item, index) => {
            return <ItemSong key={index} itemData={item} />
          })
        }
      </div>
      <Title title='新碟上架' gotoRoute='/discover/album'></Title>
      <div className={s.newDisc}>
        <div className={s.autopic}>
          <CaretLeftOutlined className={`${s.button} ${s.button1}`} style={{ fontSize: '18px', color: '#898989' }} />
          <CaretRightOutlined className={`${s.button} ${s.button2}`} style={{ fontSize: '18px', color: '#898989' }} />
        </div>
      </div>
    </div>
  )
}

export default memo(ContentLeft)