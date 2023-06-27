import React, { Suspense } from 'react';
import { Link, useRoutes } from 'react-router-dom';
import routes from './router/route';
import { useSelector, shallowEqual } from 'react-redux'
import store, { useAppSelevtor } from './store';

// type state = typeof store.getState
// type FnReturnType = ReturnType<state>

function App() {
  // const state = useSelector((state: FnReturnType) => ({
  //   count: state.counter.count,
  //   message: state.counter.message
  // }), shallowEqual)
  const state = useAppSelevtor((state) => ({
    count: state.counter.count,
    message: state.counter.message
  }), shallowEqual)
  return (
    <div>
      <div className="nav">
        <Link to="/discover">发现音乐</Link>
        <Link to="/mine">我的音乐</Link>
        <Link to="/focus">我的关注</Link>
        <Link to="/download">下载客户端</Link>
      </div>
      <h2>当前计数：{state.count}</h2>
      <h2>当前消息：{state.message}</h2>
      <Suspense fallback="">
        <div className='main'>{useRoutes(routes)}</div>
      </Suspense>
    </div>
  );
}

export default App;
