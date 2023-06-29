import { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import routes from './router/route';



function App() {

  return (
    <div>
      <Header />
      <Suspense fallback="">
        <div className='main'>{useRoutes(routes)}</div>
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
