import { Message } from "../Api";

export interface DataReturn {
  errors: Message[];
  warnings: Message[];
  infos: Message[];
}