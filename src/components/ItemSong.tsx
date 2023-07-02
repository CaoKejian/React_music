import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import s from './ItemSongs.module.scss'
import { IHotRecommend } from '@/react-app-env'
import { PlayCircleOutlined } from '@ant-design/icons';
interface IProps {
  children?: ReactNode
  itemData: IHotRecommend
}

const ItemSongs: FC<IProps> = (props) => {
  const { itemData } = props
  return (<div className={s.content}>
    <div className={s.wrapper}>
      <img src={itemData.picUrl} alt="" />
      <div className={s.cover}>
        <div className={s.info}>
          <span className={s.infoLeft}>
            <img src={require('../assets/imgs/headListern.png')} alt='' className={s.headset} />
            <span className={s.count}>{itemData.playCount}</span>
          </span>
          <i className={s.play}>
            <PlayCircleOutlined style={{ fontSize: "16px" }} />
          </i>
        </div>
      </div>
    </div>
    <div className={s.bottom}>{itemData.name}</div>
  </div>
  )
}

export default memo(ItemSongs)