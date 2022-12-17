import React from 'react';
import { faSignOut } from '@fortawesome/free-solid-svg-icons/faSignOut';
import { faComputer } from '@fortawesome/free-solid-svg-icons/faComputer';
import Button from '../../components/shared/Button';
import PageTitle from '../../components/shared/PageTitle';
import SettingsLayout from '../../layouts/Settings';
import Profile from '../../components/settings/account/Profile';
import LicenseDetails from '../../components/settings/account/LicenseDetails';

export default function AccountSettings() {
  return (
    <SettingsLayout>
      <div className="px-10">
        <PageTitle title="Account Information" />
      </div>

      <div className="flex justify-between pt-12 pb-8 px-10 overflow-ellipsis border-b border-gray-700">
        <Profile />

        <div className="space-x-3 my-auto">
          <Button type="button" color="primary" size="lg" icon={faComputer}>
            Dashboard
          </Button>
          <Button type="button" color="warning" size="lg" icon={faSignOut}>
            Log out
          </Button>
        </div>
      </div>

      <LicenseDetails />
    </SettingsLayout>
  );
}
