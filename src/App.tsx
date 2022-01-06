import React, { useState } from 'react';
import { useEffect } from 'react';
import generateMessage, { Message } from './Api';

import { HeaderComponent, ButtonsContainer } from './components'; 

const App: React.FC<{}> = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    const cleanUp = generateMessage((message: Message) => {
      setMessages(oldMessages => [...oldMessages, message]);
    });
    return cleanUp;
  }, [setMessages]);

  return (
    <div>
      <HeaderComponent title='nuffsaid.com Coding Challenge' />
      <ButtonsContainer />
      {messages?.map?.(msg => <div key={msg?.message}>{msg?.message}</div>)}
    </div>
  );
}

export default App;
