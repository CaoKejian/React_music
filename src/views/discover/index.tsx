import React,{ memo, Suspense } from 'react'
import type { FC, ReactNode } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import s from './index.module.scss'

interface IProps {
  children?: ReactNode
}

const Discover: FC<IProps> = () => {
  const mapHub: Record<string, string> = {
    "推荐": "/discover/recommend",
    "排行榜": "/discover/ranking",
    "歌单": "/discover/songs",
    "主播电台": "/discover/djradio",
    "歌手": "/discover/artist",
    "新碟上架": "/discover/album",
  }
  const barClick = () => {
    console.log(1);
  }
  return (
    <div>
      <div className={s.main}>
        <div className={s.item}>
          {
            Object.entries(mapHub).map(([key,value]) => {
              return  <React.Fragment key={key}>
              <NavLink
                onClick={() => barClick()}
                className={({ isActive }) => {
                  return isActive ? `${s.active}` : undefined;
                }}
                to={value}
              >
                {key}
              </NavLink>
            </React.Fragment>
            })
          }
        </div>
      </div>
      <Suspense fallback="">
        <Outlet />
      </Suspense>
    </div>
  )
}

export default memo(Discover)