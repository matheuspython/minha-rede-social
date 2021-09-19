import React from 'react';
import { Header } from './components/Header';
import { Main } from './components/Main/index.jsx';

import GlobalStyle from './styles/global'

const App:React.FC = ()=> {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Main />
    </>
  );
}

export default App;
