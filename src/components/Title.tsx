import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import {
  ArrowRightOutlined,SmileTwoTone
} from '@ant-design/icons';
import s from './Title.module.scss'
interface IProps {
  children?: ReactNode
  arr?: string[]
  title?:string
}

const Title: FC<IProps> = ({ title, arr }) => {
  return (
    <div className={s.wrapper}>
      <div className={s.left}>
        <SmileTwoTone twoToneColor='#c10d0c'/>
        <h3>{title}</h3>
        <div className={s.keyWords}>
          {
            arr?.map(item => {
              return <>
                <span>{item}</span>
                <span>|</span>
              </>
            })
          }
        </div>
      </div>
      <div className={s.right}>
        <a href="/">更多</a>
        <ArrowRightOutlined style={{ fontSize: '10px', color: "#c10d0c" }} />
      </div>
    </div>
  )
}

export default memo(Title)