import React from 'react';
import {
  ButtonsContainer,
  HeaderComponent,
  TableContainer,
} from './components';
import {
  useMessages,
  ButtonsProvider,
  TableProvider,
} from './hooks';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App: React.FC<{}> = () => {
  const {
    errors,
    warnings,
    infos,
    clearAll,
    stopStart,
    clearOne,
    stop,
  } = useMessages();

  return (
    <div>
      <HeaderComponent title='nuffsaid.com Coding Challenge' />
      <ButtonsProvider value={{ clearAll, stopStart, stop }}>
        <ButtonsContainer />
      </ButtonsProvider>
      <TableProvider value={{ errors, warnings, infos, clearOne }}>
        <TableContainer />
      </TableProvider>
      <ToastContainer
        autoClose={2000}
        hideProgressBar={true}
        closeOnClick={true}
        pauseOnHover={false}
        draggable={false}
        toastClassName={'toast-new-style'}
      />
    </div>
  );
}

export default App;
