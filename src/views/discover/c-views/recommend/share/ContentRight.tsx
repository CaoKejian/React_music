import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import s from './contentRight.module.scss'
import RightTopLogin from './components/RightTopLogin'
import LittleTitle from '@/components/LittleTitle'
import { useAppSelevtor } from '@/store'
import { shallowEqual } from 'react-redux'
import { imgFormat } from '@/utils/format'

interface IProps {
  children?: ReactNode
}

const ContentRight: FC<IProps> = () => {
  const { hotArtists } = useAppSelevtor((state) => ({
    hotArtists: state.recommend.hotArtists,
  }),
    shallowEqual
  )
  // 热门主播
 const hotRadios = [
  {
    picUrl:
      'http://p1.music.126.net/H3QxWdf0eUiwmhJvA4vrMQ==/1407374893913311.jpg',
    name: '陈立',
    position: '心理学家、美食家陈立教授',
    url: '/user/home?id=278438485'
  },
  {
    picUrl:
      'http://p1.music.126.net/y5-sM7tjnxnu_V9LWKgZlw==/7942872001461517.jpg',
    name: 'DJ艳秋',
    position: '著名音乐节目主持人',
    url: '/user/home?id=91239965'
  },
  {
    picUrl:
      'http://p1.music.126.net/6cc6lgOfQTo6ovNnTHPyJg==/3427177769086282.jpg',
    name: '国家大剧院古典音乐频道',
    position: '国家大剧院古典音乐官方',
    url: '/user/home?id=324314596'
  },
  {
    picUrl:
      'http://p1.music.126.net/xa1Uxrrn4J0pm_PJwkGYvw==/3130309604335651.jpg',
    name: '谢谢收听',
    position: '南京电台主持人王馨',
    url: '/user/home?id=1611157'
  },
  {
    picUrl:
      'http://p1.music.126.net/slpd09Tf5Ju82Mv-h8MP4w==/3440371884651965.jpg',
    name: 'DJ晓苏',
    position: '独立DJ，CRI环球旅游广播特邀DJ',
    url: '/user/home?id=2313954'
  }
]
  return (
    <div className={s.wrapper}>
      <RightTopLogin />
      <div className={s.box1}>
        <LittleTitle title={'入驻歌手'} isShow={true} toLink='#/discover/artist' />
        <div className={s.hotArtist}>
          {hotArtists.map(item => {
            return <a href='#/discover/artist' key={item.name}>
              <img src={imgFormat(item.picUrl, 62)} alt="" />
              <div className={s.info}>
                <div className={s.name}>{item.name}</div>
                <div className={s.alias}>{item.alias}</div>
              </div>
            </a>
          })}
        </div>
        <div className={s.applyArtist}>
          <a href="#/">申请成为Colin音乐人</a>
        </div>
        <LittleTitle title={'热门主播'} />
        <div className={s.anchor}>
          {hotRadios.map(item => {
            return <div key={item.picUrl} className={s.content}>
              <img src={item.picUrl} alt="" />
              <div className={s.info}>
                <p className={s.name}>{item.name}</p>
                <p className={s.position}>{item.position}</p>
              </div>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default memo(ContentRight)