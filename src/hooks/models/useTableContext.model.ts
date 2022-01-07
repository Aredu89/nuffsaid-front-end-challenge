import { Message } from "../../Api";

export interface TableContextProps {
  errors: Message[];
  warnings: Message[];
  infos: Message[];
  clearOne: (ms: Message) => void;
}