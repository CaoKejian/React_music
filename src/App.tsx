import { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import routes from './router/route';
import s from './App.module.scss'
import PlayBar from './views/player/PlayBar';

function App() {

  return (
    <div className='wrapper'>
      <Header />
      <Suspense fallback="">
        <div className={s.main}>{useRoutes(routes)}</div>
      </Suspense>
      <Footer />
      <PlayBar />
    </div>
  );
}

export default App;
