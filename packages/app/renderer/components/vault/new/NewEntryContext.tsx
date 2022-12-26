import { createContext, useContext, MouseEvent } from 'react';

export type Step = 0 | 1 | 2 | 3;

interface NewEntryContext {
  step: Step;
  setStep: (step: Step) => void;
  type: string;
  setType: (type: string) => void;
  handleClose: (e: MouseEvent) => void;
}

export const NewEntryContext = createContext<NewEntryContext | null>(null);

export default function useNewEntryContext() {
  const context = useContext(NewEntryContext);
  if (!context) throw Error('New Entry context must be provided.');

  return context;
}
