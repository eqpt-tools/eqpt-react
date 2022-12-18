import { faEye } from '@fortawesome/free-solid-svg-icons/faEye';
import { faCopy } from '@fortawesome/free-solid-svg-icons/faCopy';
import React, { useCallback, useMemo, useState } from 'react';
import { useFetchSettings } from '@local/graphql';
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck';
import Button from '../../shared/Button';
import Text from '../../shared/Text';
import useCopy from '../../../hooks/useCopy';

export default function LicenseDetails() {
  const [visible, setVisible] = useState(false);
  const { data } = useFetchSettings();
  const { copy, copied } = useCopy(data?.settings?.licenseKey);

  const key = useMemo(() => {
    if (!data?.settings?.licenseKey) return '';

    if (visible) return data.settings.licenseKey;

    return `•••• •••• •••• ${data.settings.licenseKey.substring(
      data.settings.licenseKey.length - 4,
    )}`;
  }, [data, visible]);

  const handleSetVisible = useCallback(() => setVisible((prev) => !prev), []);
  const handleCopy = useCallback(() => {
    copy();
  }, [copy]);

  return (
    <div className="px-10 py-8">
      <div className="mb-5">
        <Text size="xl" weight="semibold">
          License Key
        </Text>
      </div>
      <div className="flex flex-row space-x-3">
        <div className="bg-[#27272A] px-3 py-1.5 rounded inline-block">
          <Text size="sm" weight="medium" opacity={60} tracking="widest">
            {key}
          </Text>
        </div>
        <Button
          type="button"
          onClick={handleSetVisible}
          icon={faEye}
          color="secondary"
          size="xs"
        />
        <Button
          onClick={handleCopy}
          type="button"
          icon={copied ? faCheck : faCopy}
          color="secondary"
          size="xs"
        />
      </div>
    </div>
  );
}
