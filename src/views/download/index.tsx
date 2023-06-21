import React from 'react'

interface IProps {
  name?: string
  age?: number
  height?: number
}

const DownLoad:React.FC<IProps> = (props) => {
  return (
    <div>
      <div>name:{props.name}</div>
      <div>age:{props.age}</div>
      {props.height ?
        <div>height:{props.height}</div>
        :
        <div></div>
      }
    </div>
  )
}

export default DownLoad