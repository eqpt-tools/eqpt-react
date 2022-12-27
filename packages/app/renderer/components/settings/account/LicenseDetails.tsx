import { faEye } from '@fortawesome/pro-solid-svg-icons/faEye';
import { faCopy } from '@fortawesome/pro-solid-svg-icons/faCopy';
import React, { useCallback, useMemo, useState } from 'react';
import { faCheck } from '@fortawesome/pro-solid-svg-icons/faCheck';
import Button from '../../shared/Button';
import Text from '../../shared/Text';
import useCopy from '../../../hooks/useCopy';
import { trpc } from '../../../helpers/trpc';

export default function LicenseDetails() {
  const [visible, setVisible] = useState(false);
  const { data } = trpc.settings.retrieve.useQuery();
  const { copy, copied } = useCopy(data?.licenseKey);

  const key = useMemo(() => {
    if (!data?.licenseKey) return '';

    if (visible) return data.licenseKey;

    return `•••• •••• •••• ${data.licenseKey.substring(
      data.licenseKey.length - 4,
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
