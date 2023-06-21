import React from 'react';
import { useRoutes } from 'react-router-dom';
import routes from './router/route';
import DownLoad from './views/download';

function App() {
  return (
    <div>
      <DownLoad name={'colin'} age={20}  />
      <div className='main'>{useRoutes(routes)}</div>
    </div>
  );
}

export default App;
