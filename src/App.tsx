import { Suspense } from 'react';
import { Link, useRoutes } from 'react-router-dom';
import routes from './router/route';
import { shallowEqualApp, useAppDispatch, useAppSelevtor } from './store';
import { changeMessage } from './store/modules/counter';

// type state = typeof store.getState
// type FnReturnType = ReturnType<state>

function App() {
  // const state = useSelector((state: FnReturnType) => ({
  //   count: state.counter.count,
  //   message: state.counter.message
  // }), shallowEqual)
  const state = useAppSelevtor((state) => ({
    count: state.counter.count,
    message: state.counter.message,
    direction: state.counter.direction
  }), shallowEqualApp)
  const dispatch = useAppDispatch()
  const handleChangeMessage = () => {
    dispatch(changeMessage('哈哈哈哈'))
  }
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
      <h2>当前方向：{state.direction}</h2>
      <button onClick={() => handleChangeMessage()}>修改message</button>
      <Suspense fallback="">
        <div className='main'>{useRoutes(routes)}</div>
      </Suspense>
    </div>
  );
}

export default App;
