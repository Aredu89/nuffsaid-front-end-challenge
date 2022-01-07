import { createContext, ReactElement, useContext } from 'react';
import { ButtonsContextProps } from './models/useButtonsContext.model';

const ButtonsContext = createContext<ButtonsContextProps>({
  clearAll: () => null,
  stopStart: () => null,
  stop: false,
});

export function useButtonsContext(): ButtonsContextProps {
  const buttonsContext = useContext<ButtonsContextProps>(ButtonsContext);

  return buttonsContext;
};

interface ButtonsProviderProps {
  children: ReactElement;
  value: ButtonsContextProps;
};

export function ButtonsProvider({ children, value }: ButtonsProviderProps) {
  return <ButtonsContext.Provider value={value}>{children}</ButtonsContext.Provider>;
};