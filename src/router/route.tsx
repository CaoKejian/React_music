import Discover from '@/views'
import DownLoad from '@/views/download'
import Focus from '@/views/focus'
import Mine from '@/views/mine'
import { Navigate, RouteObject } from 'react-router-dom'
const routes: RouteObject[] = [
  {
    path: '/', element: <Navigate to='/discover'/>
  },
  {
    path: '/discover', element: <Discover />
  },
  {
    path: '/mine', element: <Mine />
  },
  {
    path: '/focus', element: <Focus />
  },
  {
    path: '/download', element: <DownLoad />
  }
]

export default routes