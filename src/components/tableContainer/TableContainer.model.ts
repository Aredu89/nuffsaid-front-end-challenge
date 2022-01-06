import { Message } from "../../Api";

export interface TableContainerProps {
  errors: Message[];
  warnings: Message[];
  infos: Message[];
  clearOne: (ms: Message) => void;
}