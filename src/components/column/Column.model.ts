import { Message } from "../../Api";

export interface ColumnProps {
  title: string;
  data: Message[];
  clearOne: (ms: Message) => void;
}