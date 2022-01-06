import React, { useState } from 'react';
import { useEffect } from 'react';
import generateMessage, { Message } from './Api';
import {
  ButtonsContainer,
  HeaderComponent,
  TableContainer,
} from './components';
import { ToastContainer, toast } from 'react-toastify';
import { processData } from './helpers/data';
import 'react-toastify/dist/ReactToastify.css';

const App: React.FC<{}> = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [stop, setStop] = useState<boolean>(false);

  useEffect(() => {
    const cleanUp = generateMessage((message: Message) => {
      if(message.priority === 0){
        toast.dismiss();
        toast(message.message);
      }
      setMessages(oldMessages => [message, ...oldMessages]);
    });
    if(stop){
      cleanUp();
    }
    return cleanUp;
  }, [stop, setMessages]);

  const clearAll = () => {
    console.log('clear')
    setMessages([]);
  };

  const stopStart = () => {
    console.log('stopstart')
    setStop(!stop);
  };

  const clearOne = (message: Message) => {
    const tempMessages = messages.filter(ms=>{
      if (
        ms.message === message.message &&
        ms.priority === message.priority
      ){
        return false;
      } else {
        return true;
      };
    });
    setMessages(tempMessages);
  }

  const { errors, warnings, infos } = processData({ data: messages});

  return (
    <div>
      <HeaderComponent title='nuffsaid.com Coding Challenge' />
      <ButtonsContainer clearAll={clearAll} stopStart={stopStart} stop={stop} />
      <TableContainer errors={errors} warnings={warnings} infos={infos} clearOne={clearOne} />
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
