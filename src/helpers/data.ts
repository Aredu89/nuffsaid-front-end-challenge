import { DataReturn } from './data.model';
import { Message } from '../Api';

export const processData = ({ data }: { data: Message[] }): DataReturn => {
  const errors: Message[] = [];
  const warnings: Message[] = [];
  const infos: Message[] = [];
  data?.forEach(mss=>{
    switch(mss.priority){
      case 0:
        errors.push(mss);
        break;
      case 1:
        warnings.push(mss);
        break;
      case 2:
        infos.push(mss);
        break;
      default:
        errors.push(mss);
    }
  })
  return { errors, warnings, infos };
};