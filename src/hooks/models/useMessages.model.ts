import { Message } from '../../Api';

export interface UseMessagesReturn {
  errors: Message[];
  warnings: Message[];
  infos: Message[];
  clearAll: () => void;
  stopStart: () => void;
  clearOne: (ms: Message) => void;
  stop: boolean;
}