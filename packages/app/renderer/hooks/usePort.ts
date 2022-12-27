import { useState, useEffect } from 'react';
import { ipcRenderer } from 'electron';

interface UsePortReturnType {
  data: string | null;
  loading: boolean;
}

/**
 * usePort, a hook to retrieve the GraphQL server port from the backend
 */
export default function usePort(): UsePortReturnType {
  const [port, setPort] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getPort() {
      const receivedPort: string = await ipcRenderer.invoke('get-port');

      setPort(receivedPort);
      setLoading(false);
      process.env.NEXT_PUBLIC_TRPC_PORT = receivedPort;
    }

    getPort();
  }, []);

  return { loading, data: port };
}
