import { memo, useEffect, useRef, useState } from 'react'
import type { FC, ReactNode, ElementRef } from 'react'
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
  const bannerRef = useRef<ElementRef<typeof Carousel>>(null)
  const [currentIndex, setCurrentIndex] = useState(0);
  const [bgImgUrl, setBgImgUrl] = useState('');

  useEffect(() => {
    const imgUrl = banners[currentIndex]?.imageUrl;
    if (imgUrl) {
      setBgImgUrl(imgUrl + '?imageView&blur=40x20');
    }
  }, [banners, currentIndex]);

  const handleBeforeChange = (current: number, next: number) => {
    setCurrentIndex(next);
  };
 
  return (
    <div className={s.wrapper} style={{ backgroundImage: `url('${bgImgUrl}')` }}>
      <div className={s.auto}>
        <Carousel ref={bannerRef} autoplay className={s.autoPic} effect="fade" easing="ease-out"
          autoplaySpeed={3000}
          dots={false}
          beforeChange={handleBeforeChange}
          >
          {
            banners.map((item, index) => {
              return <div className={s.imgItem} key={index}>
                <img src={item.imageUrl} alt={item.typeTitle} />
              </div>
            })
          }
        </Carousel>
        <ul className={s.dots}>
          {
            banners.map((item, index) => {
              return <li key={item.imageUrl}>
                <span 
                className={index === currentIndex ? s.active : s.item} ></span>
              </li>
            })
          }
        </ul>
        <LeftOutlined onClick={() => bannerRef.current?.prev()} className={`${s.button} ${s.button1}`} style={{ fontSize: '54px', color: '#fff' }} />
        <RightOutlined onClick={() => bannerRef.current?.next()} className={`${s.button} ${s.button2}`} style={{ fontSize: '54px', color: '#fff' }} />
        <div className={s.floatPic}></div>
      </div>
    </div>
  )
}

export default memo(TopBanner)