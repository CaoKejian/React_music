import React, { ElementRef, memo, useRef } from 'react'
import type { FC, ReactNode } from 'react'
import s from './NewDisc.module.scss'
import NewDocs from '@/components/NewDocs'
import { Carousel } from 'antd'
import { useAppSelevtor } from '@/store'
import { shallowEqual } from 'react-redux'
import {
  CaretLeftOutlined,
  CaretRightOutlined,
} from '@ant-design/icons';
interface IProps {
  children?: ReactNode
}

const NewDisc: FC<IProps> = () => {
  const {  newDosc } = useAppSelevtor((state) => ({
    newDosc: state.recommend.newDosc
  }), shallowEqual)
  const bannerRef = useRef<ElementRef<typeof Carousel>>(null)
  const handlePrev = () => {
    bannerRef.current?.prev()
  }
  const handleNext = () => {
    bannerRef.current?.next()
  }
  return (
    <div className={s.newDisc}>
      <div className={s.autopic}>
        <div className={s.banner}>
          <Carousel ref={bannerRef} className={s.autoPic}
            autoplaySpeed={3000}
            speed={2000}
            dots={false}
          >
            {
              [0, 1].map((item, index) => {
                return (
                  <div key={index}>
                    <div className={s.autoPicItem}>
                      {
                        newDosc.slice(item * 5, (item + 1) * 5).map(x => {
                          return <NewDocs key={x.picId} data={x} />
                        })
                      }
                    </div>
                  </div>
                )
              })
            }
          </Carousel>
        </div>
        <CaretLeftOutlined onClick={handlePrev} className={`${s.button} ${s.button1}`} style={{ fontSize: '18px', color: '#898989' }} />
        <CaretRightOutlined onClick={handleNext} className={`${s.button} ${s.button2}`} style={{ fontSize: '18px', color: '#898989' }} />
      </div>
    </div>
  )
}

export default memo(NewDisc)