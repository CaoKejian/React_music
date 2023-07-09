import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import s from './LittleTitle.module.scss'
import { SwapRightOutlined } from '@ant-design/icons';

interface IProps {
  children?: ReactNode
  title: string
  isShow?: Boolean
  toLink?:string
}

const LittleTitle: FC<IProps> = (props) => {
  const { title, isShow,toLink } = props
  return (
    <div className={s.wrapper}>
      <span className={s.title}>{title}</span>
      {
        isShow ?
          <div>
            <a href={toLink} className={s.right}>查看全部</a>
            <SwapRightOutlined style={{ fontSize: '12px' }} />
          </div> : <div></div>
      }
    </div>
  )
}

export default memo(LittleTitle)