import React, { useCallback, useState } from 'react';
import { faPlay } from '@fortawesome/pro-solid-svg-icons/faPlay';
import { faCopy } from '@fortawesome/pro-solid-svg-icons/faCopy';
import Button from '../shared/Button';

type Mode = 'request' | 'ping';

export default function Menu() {
  const [mode, setMode] = useState<Mode>('request');

  const handleChangeMode = useCallback((mode: Mode) => {
    return function () {
      setMode(mode);
    };
  }, []);

  return (
    <div className="absolute bottom-8 bg-[#25263075] p-4 rounded-xl space-x-3 flex">
      {/* <Select name="mode" options={modes} /> */}
      <div>
        <Button
          type="button"
          color={mode === 'request' ? 'primary' : 'secondary'}
          size="md"
          className="rounded-l-md rounded-r-none"
          onClick={handleChangeMode('request')}
        >
          Request
        </Button>
        <Button
          type="button"
          color={mode === 'ping' ? 'primary' : 'secondary'}
          size="md"
          className="rounded-r-md rounded-l-none"
          onClick={handleChangeMode('ping')}
        >
          Ping
        </Button>
      </div>

      <Button type="button" color="primary" size="md" icon={faPlay}>
        Test All
      </Button>
      <Button type="button" color="secondary" size="md" icon={faCopy}>
        Copy All
      </Button>
    </div>
  );
}
