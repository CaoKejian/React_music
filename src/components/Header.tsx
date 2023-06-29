import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import s from './Header.module.scss'
import logo from '../assets/imgs/logo.png';
import { SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';

interface IProps {
  children?: ReactNode
}

const Header: FC<IProps> = () => {
  const mapHub: Record<string, string> = {
    "发现音乐": "/discover",
    "我的音乐": "/mine",
    "我的关注": "/focus",
    "下载客户端": "/download",
  }
  return (
    <div className={s.wrapper}>
      <div className={s.content}>
        <img src={logo} alt="" />
        <Link to="/" className={s.logoname}>Colin音乐</Link>
        {
          Object.entries(mapHub).map(([key, value]) => {
            return <Link to={value}>{key}</Link>
          })
        }
        <div className={s.rightdiv}>
          <div className={s.search}>
            <Input placeholder="音乐/视频/电台/用户" prefix={<SearchOutlined />} />
          </div>
          <a href='/'>登录</a>
        </div>
      </div>
    </div>

  )
}

export default memo(Header)