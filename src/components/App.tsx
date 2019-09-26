import React, { useState } from 'react';

import Header from './layout/header//Header';
import Router from './router/Router';

const AppContext = React.createContext({});

interface IAppContext {
  auth: string,
  setAuth: React.Dispatch<React.SetStateAction<string>>
}

const initialState: IAppContext = {
  auth: "",
  setAuth: (): void => {}
}

const AppContextComponent: React.FC = (props) => {
  const [ auth, setAuth ] = useState<string>("");
  return <AppContext.Provider value={initialState}>{props.children}</AppContext.Provider>
}

const App: React.FC = () => {
  return (
    <AppContextComponent>
      <Header />
      <Router />
    </AppContextComponent>
 );
}

export default App;