import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'
import logo from '../assets/imgs/logo.png';
import { SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';

interface IProps {
  children?: ReactNode
}

const Header: FC<IProps> = () => {
  return (
    <div className='wrapper'>
      <div className="content">
        <img src={logo} alt="" />
        <Link to="/" className='logo-name'>Colin音乐</Link>
        <Link to="/discover">发现音乐</Link>
        <Link to="/mine">我的音乐</Link>
        <Link to="/focus">我的关注</Link>
        <Link to="/download">下载客户端</Link>
        <div className='right-div'>
          <div className='search'>
            <Input placeholder="音乐/视频/电台/用户" prefix={<SearchOutlined />} />
          </div>
          <a href='/'>登录</a>
        </div>
      </div>
    </div>

  )
}

export default memo(Header)