import { Message } from "../../Api";

export interface CardProps {
  message: string;
  priority: number;
  onClear: (ms: Message) => void;
}