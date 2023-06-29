import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const Footer: FC<IProps> = () => {
  return (
    <div>Footer底部</div>
  )
}

export default memo(Footer)