import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import s from './HotRecommend.module.scss'
import ItemSong from '@/components/ItemSong'
import { useAppSelevtor } from '@/store'
import { shallowEqual } from 'react-redux'

interface IProps {
  children?: ReactNode
}

const HotRecommend: FC<IProps> = () => {
  const { hotRecommends } = useAppSelevtor((state) => ({
    hotRecommends: state.recommend.hotRecommend
  }), shallowEqual)
  return (
    <div className={s.hotRecommend}>
        {
          hotRecommends.map((item, index) => {
            return <ItemSong key={index} itemData={item} />
          })
        }
      </div>
  )
}

export default memo(HotRecommend)