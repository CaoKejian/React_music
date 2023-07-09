import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import s from './Ranking.module.scss'
import { useAppSelevtor } from '@/store'
import { imgFormat } from '@/utils/format'
import { Link } from 'react-router-dom'
import {
  PlayCircleOutlined, FolderAddOutlined, PlusOutlined, SendOutlined
} from "@ant-design/icons"
interface IProps {
  children?: ReactNode
}

const Ranking: FC<IProps> = () => {
  const { rankings } = useAppSelevtor((state) => ({
    rankings: state.recommend.rankings
  }))
  return (
    <div className={s.wrapper}>
      <div className={s.content}>
        {
          rankings.map(item => {
            return <div className={s.item} key={item.coverImgUrl}>
              <div className={s.header}>
                <div className={s.image}>
                  <img src={imgFormat(item.coverImgUrl, 80)} alt="" />
                  <Link to={'/'} className={s.imgCover}></Link>
                </div>
                <div className={s.info}>
                  <div className={s.name}>{item.name}</div>
                  <div className={s.buttonF}>
                    <PlayCircleOutlined className={`${s.button} ${s.play}`} style={{ color: '#b1b1b1', fontSize: '22px' }} />
                    <FolderAddOutlined className={`${s.button} ${s.favor}`} style={{ color: '#b1b1b1', fontSize: '24px' }} />
                  </div>
                </div>
              </div>
              <div className={s.list}>
                {item.tracks.slice(0, 10).map((list: any, index: number) => {
                  return <div className={s.listItem} key={list.id}>
                    <div className={s.index}>{index + 1}</div>
                    <div className={s.info}>
                      <div className={s.name}>{list.name}</div>
                      <div className={s.opeartor}>
                        <PlayCircleOutlined className={`${s.button} ${s.play}`} style={{ color: '#7a7979', fontSize: '18px' }} />
                        <PlusOutlined className={`${s.button} ${s.add}`} style={{ color: '#7a7979', fontSize: '18px' }} />
                        <FolderAddOutlined className={`${s.button} ${s.favor}`} style={{ color: '#7a7979', fontSize: '18px' }} />
                      </div>
                    </div>
                  </div>
                })}
              </div>
              <div className={s.footer}>查看全部 <SendOutlined /></div>
            </div>
          })
        }
      </div>
    </div>
  )
}

export default memo(Ranking)