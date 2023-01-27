import { useState, useCallback } from 'react';
import copy from 'copy-to-clipboard';

export default function useCopy(value?: string | null) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(() => {
    if (!value) return;

    copy(value);
    setCopied(true);

    setTimeout(() => setCopied(false), 1500);
  }, [value]);

  return {
    copied,
    copy: handleCopy,
  };
}
