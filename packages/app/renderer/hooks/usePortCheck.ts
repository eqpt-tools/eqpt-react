import { useEffect } from 'react';
import { useRouter } from 'next/router';
import usePort from './usePort';

/**
 * usePort, a hook to manage the error state if the backend fails to launch
 */
export default function usePortCheck() {
  const port = usePort();
  const router = useRouter();

  useEffect(() => {
    if (router.route === '/500') return;
    if (port.loading || port.data) return;

    router.push('/500');
  }, [port, router]);
}
