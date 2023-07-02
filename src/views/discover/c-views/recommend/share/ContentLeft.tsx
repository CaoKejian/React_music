import React, { memo,useRef } from 'react'
import type { FC, ReactNode,ElementRef } from 'react'
import s from './contentLeft.module.scss'
import Title from '@/components/Title'
import { useAppSelevtor } from '@/store'
import { shallowEqual } from 'react-redux'
import ItemSong from '@/components/ItemSong'
import {
  CaretLeftOutlined,
  CaretRightOutlined,
} from '@ant-design/icons';
import { Carousel } from 'antd'

interface IProps {
  children?: ReactNode
}

const ContentLeft: FC<IProps> = () => {
  const TitleArr = ['华语', '流行', '摇滚', '民谣', '电子']
  const { hotRecommends } = useAppSelevtor((state) => ({
    hotRecommends: state.recommend.hotRecommend
  }), shallowEqual)
  const bannerRef = useRef<ElementRef<typeof Carousel>>(null)
  const handlePrev = () => {
    bannerRef.current?.prev()
  }
  const handleNext = () => {
    bannerRef.current?.next()
  }
  return (
    <div className={s.wrapper}>
      <Title arr={TitleArr} title='热门推荐' gotoRoute='/discover/songs'></Title>
      <div className={s.hotRecommend}>
        {
          hotRecommends.map((item, index) => {
            return <ItemSong key={index} itemData={item} />
          })
        }
      </div>
      <Title title='新碟上架' gotoRoute='/discover/album'></Title>
      <div className={s.newDisc}>
        <div className={s.autopic}>
          <div className={s.banner}>
            <Carousel ref={bannerRef} className={s.autoPic} 
              autoplaySpeed={3000}
              speed={2000}
              dots={false}
              // beforeChange={handleBeforeChange}
            >
              {
                [1,2,3].map((item, index) => {
                  return <h1 key={index}>{item}</h1>
                })
              }
            </Carousel>
          </div>
          <CaretLeftOutlined onClick={handlePrev} className={`${s.button} ${s.button1}`} style={{ fontSize: '18px', color: '#898989' }} />
          <CaretRightOutlined onClick={handleNext}  className={`${s.button} ${s.button2}`} style={{ fontSize: '18px', color: '#898989' }} />
        </div>
      </div>
    </div>
  )
}

export default memo(ContentLeft)