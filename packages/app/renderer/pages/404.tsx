import React from 'react';
import Link from 'next/link';
import { faWarning } from '@fortawesome/pro-solid-svg-icons/faWarning';
import ErrorLayout from '../layouts/Error';
import Text from '../components/shared/Text';
import Button from '../components/shared/Button';
import useIsProd from '../hooks/useIsProd';
import Icon from '../components/shared/Icon';

export default function NotFound() {
  const isProd = useIsProd();

  return (
    <ErrorLayout>
      <div className="space-y-3">
        <div className="w-12 h-12 rounded-md flex items-center justify-center transition bg-gray-800 text-white">
          <Icon icon={faWarning} size="lg" />
        </div>

        <Text size="2xl" weight="semibold">
          Uh-oh. We couldn't find what you were looking for.
        </Text>
        <Text size="md" opacity={70}>
          This is most likely something on our end. We're on it. Please
          force-quit and re-launch the application.
        </Text>

        {/* TODO: why can't we do Button as Link */}
        {!isProd && (
          <Link href="/login">
            <Button className="mt-3" type="button" size="md" color="secondary">
              Go home
            </Button>
          </Link>
        )}
      </div>
    </ErrorLayout>
  );
}
