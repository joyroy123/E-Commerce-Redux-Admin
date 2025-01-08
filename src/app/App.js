import Store from '@/redux/store';
import React from 'react';
import { Provider } from 'react-redux';


const App = ({children}) => {
  return (
    <Provider store={Store}>{children}</Provider>
  )
}

export default App;