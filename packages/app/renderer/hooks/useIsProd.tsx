import { useState, useEffect } from 'react';
import { ipcRenderer } from 'electron';

export default function useIsProd() {
  const [isProd, setIsProd] = useState(false);

  useEffect(() => {
    async function getEnv() {
      const env: boolean = await ipcRenderer.invoke('get-env');

      setIsProd(env);
    }

    getEnv();
  }, []);

  return isProd;
}
