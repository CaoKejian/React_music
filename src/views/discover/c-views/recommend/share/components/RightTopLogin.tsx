import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import s from './RightTopLogin.module.scss'
import { Link } from 'react-router-dom'

interface IProps {
  children?: ReactNode
}

const RightTopLogin: FC<IProps> = () => {
  return (
    <div className={s.imgTitle}>
      <p>登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
      <Link to={'/'}>用户登录</Link>
    </div>
  )
}

export default memo(RightTopLogin)