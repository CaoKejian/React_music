import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import s from './LittleTitle.module.scss'
import { SwapRightOutlined } from '@ant-design/icons';

interface IProps {
  children?: ReactNode
  title: String
  isShow?: Boolean
}

const LittleTitle: FC<IProps> = (props) => {
  const { title, isShow } = props
  return (
    <div className={s.wrapper}>
      <span className={s.title}>{title}</span>
      {
        isShow ?
          <div>
            <span className={s.right}>查看全部</span>
            <SwapRightOutlined style={{ fontSize: '12px' }} />
          </div> : <div></div>
      }
    </div>
  )
}

export default memo(LittleTitle)