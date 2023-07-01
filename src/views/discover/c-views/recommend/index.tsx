import { memo } from 'react'
import type { FC, ReactNode } from 'react'
import s from './index.module.scss'
import TopBanner from './share/TopBanner'
interface IProps {
  children?: ReactNode
}


const Recommend: FC<IProps> = () => {

  return (
    <div className={s.wrapper}>
      <TopBanner />
    </div>
  )
}

export default memo(Recommend)