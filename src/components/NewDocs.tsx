import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import s from './NewDocs.module.scss'
import { imgFormat } from '@/utils/format'

interface IProps {
  children?: ReactNode
  data:any
}

const NewDocs: FC<IProps> = (props) => {
  const {data} = props
  return (
    <div className={s.wrapper}>
      <div className={s.top}>
        <img src={imgFormat(data.picUrl,100)} alt="" />
        <i className={s.cover}></i>
      </div>
      <div className={s.bottom}>
        <div className={s.name}>{data.name}</div>
        <div className={s.artist}>{data.artist.name}</div>
      </div>
    </div>
  )
}

export default memo(NewDocs)