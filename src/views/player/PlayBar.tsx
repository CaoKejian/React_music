import React, { memo, useEffect, useRef, useState } from 'react'
import type { FC, ReactNode } from 'react'
import s from './PlayBar.module.scss'
import {
  StepBackwardOutlined, PlayCircleFilled, StepForwardOutlined
  , GatewayOutlined, FolderAddOutlined, FolderOpenOutlined
} from '@ant-design/icons';
import { Slider } from 'antd';
import './style.css'
import { useAppSelevtor } from '@/store';
import { Link } from 'react-router-dom';
import { shallowEqual } from 'react-redux';
import { getPlayerUrl } from '@/utils/handle-player';
interface IProps {
  children?: ReactNode
}

const PlayBar: FC<IProps> = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const audioRef = useRef<HTMLAudioElement>(null)
  const { currentSong } = useAppSelevtor((state) => ({
    currentSong: state.player.currentSong
  }), shallowEqual)
  useEffect(() => {
    console.log(audioRef.current);
    
    if (!audioRef.current) return
    audioRef.current.src = getPlayerUrl(currentSong.id)
    audioRef.current?.play().then(() => {
      setIsPlaying(true)
      console.log('歌曲播放成功');
    }).catch(error => {
      setIsPlaying(false)
      console.log('歌曲播放失败');
    })
  }, [currentSong])
  // 音乐播放进度处理
  function handleTimeUpdate() {
    // 1.获取当前的时间
    const currentTime = audioRef.current!.currentTime

    
  }
   /** 播放功能的交互 */
   function handlePlayBtnClick() {
    // const isPaused = audioRef.current!.paused
    isPlaying
      ? audioRef.current?.pause()
      : audioRef.current?.play().catch(err=>setIsPlaying(false))
    setIsPlaying(!isPlaying)
  }
  return (<>
    <div className={s.fake}>
      <div className={s.wrapper}>
        <div className={s.content}>
          <div className={s.play} >
            <StepBackwardOutlined style={{ color: "#fff", fontSize: '28px' }} />
            <PlayCircleFilled style={{ color: "#fff", fontSize: '36px' }} onClick={handlePlayBtnClick}/>
            <StepForwardOutlined style={{ color: "#fff", fontSize: '28px' }} />
          </div>
          <div className={s.audio}>
            <Link to={'/discover/player'}>
              <img className={s.image} src={currentSong.al.picUrl} alt="" />
            </Link>
            <div className={s.box}>
              <div className={s.info}>
                <div className={s.songName}>{currentSong.name}</div>
                <div className={s.songSinger}>{currentSong.ar[0].name}</div>
              </div>
              <div className={s.process}>
                <div className={s.pro}>
                  <div className={s.true}>
                    <Slider
                      value={progress}
                    />
                  </div>
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
    <audio ref={audioRef} onTimeUpdate={handleTimeUpdate}></audio>
  </>
  )
}

export default memo(PlayBar)