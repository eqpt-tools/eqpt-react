import React from 'react';
import PageTitle from '../../components/shared/PageTitle';
import SettingsLayout from '../../layouts/Settings';

export default function IntegrationsSettings() {
  return (
    <SettingsLayout>
      <div className="px-10">
        <PageTitle title="Integrations" />
      </div>
    </SettingsLayout>
  );
}
