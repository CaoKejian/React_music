import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import s from './PlayBar.module.scss'
import {
  StepBackwardOutlined, PlayCircleFilled, StepForwardOutlined
  , GatewayOutlined, FolderAddOutlined, FolderOpenOutlined
} from '@ant-design/icons';
import { Slider } from 'antd';
import './style.css'
interface IProps {
  children?: ReactNode
}

const PlayBar: FC<IProps> = () => {
  return (<>
    <div className={s.fake}>
      <div className={s.wrapper}>
        <div className={s.content}>
          <div className={s.play}>
            <StepBackwardOutlined style={{ color: "#fff", fontSize: '28px' }} />
            <PlayCircleFilled style={{ color: "#fff", fontSize: '36px' }} />
            <StepForwardOutlined style={{ color: "#fff", fontSize: '28px' }} />
          </div>
          <div className={s.audio}>
            <img src="https://s4.music.126.net/style/web2/img/default/default_album.jpg
" alt="" />
            <div className={s.box}>
              <div className={s.info}>
                <div className={s.songName}>日不落</div>
                <div className={s.songSinger}>蔡依林</div>
              </div>
              <div className={s.process}>
                <div className={s.pro}>
                  <div className={s.true}>
                    <Slider
                      step={0.5}
                      tooltip={{ formatter: null }}
                    />
                  </div>
                  {/* <div className={s.icon}></div> */}
                </div>
                <div className={s.time}>
                  <span>00:00</span>/00:00
                </div>
              </div>
            </div>
          </div>
          <div className={s.action}>
            <a href="#/" title='画中画歌词'>
              <GatewayOutlined style={{ color: "#a6a6a6", fontSize: '20px' }} />
            </a>
            <a href="#/" title='收藏'>
              <FolderAddOutlined style={{ color: "#a6a6a6", fontSize: '20px' }} />
            </a> <a href="#/" title='分享'>
              <FolderOpenOutlined style={{ color: "#a6a6a6", fontSize: '20px' }} />
            </a>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default memo(PlayBar)