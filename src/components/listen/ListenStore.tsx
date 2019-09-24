import React, { useState } from 'react';

interface IState {
  seconds: number
  setSeconds: React.Dispatch<React.SetStateAction<number>>
}

const initialState: IState = {
  seconds: 0,
  setSeconds: (): void => {}
};

// export const Store = React.createContext<IState>(initialState);
export const Store = React.createContext<IState>(initialState);

export const StoreProvider = (props: any): JSX.Element => {
  const [ seconds, setSeconds ] = useState<number>(0);

  return <Store.Provider value={{seconds, setSeconds}}>{props.children}</Store.Provider>
}
