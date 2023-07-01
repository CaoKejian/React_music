import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import s from './TopBanner.module.scss'
import { useAppSelevtor } from '@/store'
import { Carousel } from 'antd';
import {
  RightOutlined,
  LeftOutlined,
} from '@ant-design/icons';
import { shallowEqual } from 'react-redux'
interface IProps {
  children?: ReactNode
}

const TopBanner: FC<IProps> = () => {
  const { banners } = useAppSelevtor((state) => ({
    banners: state.recommend.banners
  }),
    shallowEqual
  )
  console.log(banners);

  return (
    <div className={s.wrapper}>
      <div className={s.auto}>
        <Carousel autoplay className={s.autoPic}>
          {
            banners.map((item, index) => {
              return <div className={s.imgItem} key={index}>
                <img src={item.imageUrl} alt={item.typeTitle} />
              </div>
            })
          }
        </Carousel>
        <LeftOutlined className={`${s.button} ${s.button1}`} style={{fontSize:'54px',color:'#fff'}}/>
        <RightOutlined className={`${s.button} ${s.button2}`} style={{fontSize:'54px',color:'#fff'}}/>
        {/* <button className={`${s.button} ${s.button1}`}>1</button> */}
        {/* <button className={`${s.button} ${s.button2}`}>2</button> */}
        <div className={s.floatPic}></div>
      </div>
    </div>
  )
}

export default memo(TopBanner)