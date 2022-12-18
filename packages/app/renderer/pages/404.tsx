import React from 'react';
import Link from 'next/link';
import ErrorLayout from '../layouts/Error';
import Text from '../components/shared/Text';
import Button from '../components/shared/Button';
import useIsProd from '../hooks/useIsProd';

export default function NotFound() {
  const isProd = useIsProd();

  return (
    <ErrorLayout>
      <div className="space-y-3">
        <Text size="2xl" weight="bold">
          Uh-oh. We couldn't find what you were looking for.
        </Text>
        <Text size="md" weight="medium" opacity={70}>
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
