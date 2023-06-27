import Album from '@/views/discover/c-views/album'
import Artist from '@/views/discover/c-views/artist'
import Djradio from '@/views/discover/c-views/djradio'
import Ranking from '@/views/discover/c-views/ranking'
import Recommend from '@/views/discover/c-views/recommend'
import Songs from '@/views/discover/c-views/songs'
import { lazy } from 'react'
import { Navigate, RouteObject } from 'react-router-dom'

const Discover = lazy(() => import('@/views/discover'))
const Download = lazy(() => import('@/views/download'))
const Focus = lazy(() => import('@/views/focus'))
const Mine = lazy(() => import('@/views/mine'))
const routes: RouteObject[] = [
  {
    path: '/', element: <Navigate to='/discover'/>
  },
  {
    path: '/discover', element: <Discover />,
    children:[
      {
        path:'/discover',
        element: <Navigate to="/discover/recommend"/>
      },
      {
        path:'/discover/recommend',
        element: <Recommend/>
      },
      {
        path:'/discover/ranking',
        element: <Ranking />
      },
      {
        path:'/discover/songs',
        element: <Songs/>
      },
      {
        path:'/discover/djradio',
        element: <Djradio/>
      },
      {
        path:'/discover/artist',
        element: <Artist/>
      },
      {
        path:'/discover/album',
        element: <Album/>
      },
    ]
  },
  {
    path: '/mine', element: <Mine />
  },
  {
    path: '/focus', element: <Focus />
  },
  {
    path: '/download', element: <Download />
  }
]

export default routes