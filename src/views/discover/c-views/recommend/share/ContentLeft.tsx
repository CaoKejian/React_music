import { memo } from 'react'
import type { FC, ReactNode } from 'react'
import s from './contentLeft.module.scss'
import Title from '@/components/Title'
import HotRecommend from './components/HotRecommend'
import NewDisc from './components/NewDisc'
import Ranking from './components/Ranking'

interface IProps {
  children?: ReactNode
}

const ContentLeft: FC<IProps> = () => {
  const TitleArr = ['华语', '流行', '摇滚', '民谣', '电子']
  return (
    <div className={s.wrapper}>
      <Title arr={TitleArr} title='热门推荐' gotoRoute='/discover/songs'></Title>
      <HotRecommend />
      <Title title='新碟上架' gotoRoute='/discover/album'></Title>
      <NewDisc/>
      <Title title='榜单' gotoRoute='/discover/ranking'></Title>
      <Ranking />
    </div>
  )
}

export default memo(ContentLeft)