import React from 'react';
import PageTitle from '../../components/shared/PageTitle';
import SettingsLayout from '../../layouts/Settings';

export default function SoftwareSettings() {
  return (
    <SettingsLayout>
      <div className="px-10">
        <PageTitle title="Software Information" />
      </div>
    </SettingsLayout>
  );
}
