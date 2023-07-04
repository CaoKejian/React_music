import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import s from './Ranking.module.scss'
import { useAppSelevtor } from '@/store'

interface IProps {
  children?: ReactNode
}

const Ranking: FC<IProps> = () => {
  const {rankings} = useAppSelevtor((state) => ({
    rankings:state.recommend.rankings
  }))
  return (
    <div className={s.wrapper}>
      <div className={s.content}>
        {
          rankings.map(item => {
            return <div className={s.item} key={item}>{item.name}</div>
          })
        }
      </div>
    </div>
  )
}

export default memo(Ranking)