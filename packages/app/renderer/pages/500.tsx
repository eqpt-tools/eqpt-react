import React from 'react';
import ErrorLayout from '../layouts/Error';
import Text from '../components/shared/Text';

export default function ApplicationError() {
  return (
    <ErrorLayout>
      <div className="space-y-3">
        <Text size="2xl" weight="bold">
          Uh-oh.
        </Text>
        <Text size="md" weight="medium" opacity={70}>
          If you're seeing this page, it means something went wrong while
          launching the application. Please force-quit and re-launch.
        </Text>
      </div>
    </ErrorLayout>
  );
}
