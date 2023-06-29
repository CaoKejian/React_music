import { Suspense } from 'react';
import { Link, useRoutes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
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
      <Header />
      <h2>当前计数：{state.count}</h2>
      <h2>当前消息：{state.message}</h2>
      <h2>当前方向：{state.direction}</h2>
      <button onClick={() => handleChangeMessage()}>修改message</button>
      <Suspense fallback="">
        <div className='main'>{useRoutes(routes)}</div>
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
