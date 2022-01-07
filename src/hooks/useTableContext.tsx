import { createContext, ReactElement, useContext } from 'react';
import { TableContextProps } from './models/useTableContext.model';

const TableContext = createContext<TableContextProps>({
  errors: [{ message: '', priority: 0 }],
  warnings:[{ message: '', priority: 0 }],
  infos: [{ message: '', priority: 0 }],
  clearOne: (ms) => null,
});

export function useTableContext(): TableContextProps {
  const tableContext = useContext<TableContextProps>(TableContext);

  return tableContext;
};

interface TableProviderProps {
  children: ReactElement;
  value: TableContextProps;
};

export function TableProvider({ children, value }: TableProviderProps) {
  return <TableContext.Provider value={value}>{children}</TableContext.Provider>;
};