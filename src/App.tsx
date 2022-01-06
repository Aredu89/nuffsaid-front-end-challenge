import React, { useState } from 'react';
import { useEffect } from 'react';
import generateMessage, { Message } from './Api';

import {
  ButtonsContainer,
  HeaderComponent,
  TableContainer,
} from './components'; 
import { processData } from './helpers/data';

const App: React.FC<{}> = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    const cleanUp = generateMessage((message: Message) => {
      setMessages(oldMessages => [...oldMessages, message]);
    });
    return cleanUp;
  }, [setMessages]);

  const { errors, warnings, infos } = processData({ data: messages});

  return (
    <div>
      <HeaderComponent title='nuffsaid.com Coding Challenge' />
      <ButtonsContainer />
      <TableContainer errors={errors} warnings={warnings} infos={infos} />
    </div>
  );
}

export default App;
