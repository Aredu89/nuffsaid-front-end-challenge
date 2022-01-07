import { useState, useEffect } from 'react';
import generateMessage, { Message } from '../Api';
import { processData } from '../helpers/data';
import { toast } from 'react-toastify';
import { UseMessagesReturn } from './models/useMessages.model';

export const useMessages = (): UseMessagesReturn => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [stop, setStop] = useState<boolean>(false);

  useEffect(() => {
    const cleanUp = generateMessage((message: Message) => {
      if(message.priority === 0){
        toast.dismiss();
        toast.error(message.message);
      }
      if(!stop) setMessages(oldMessages => [message, ...oldMessages]);
    });
    if(stop){
      cleanUp();
    }
    return cleanUp;
  }, [stop, setMessages]);

  const clearAll = () => {
    setMessages([]);
  };

  const stopStart = () => {
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

  return {
    errors,
    warnings,
    infos,
    clearAll,
    stopStart,
    clearOne,
    stop,
  };
};