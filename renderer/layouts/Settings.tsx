import { faChartSimple } from '@fortawesome/free-solid-svg-icons/faChartSimple';
import { faWaveSquare } from '@fortawesome/free-solid-svg-icons/faWaveSquare';
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser';
import React, { ReactNode } from 'react';
import Navbar from '../components/navigation/Navbar';
import SettingsTab, {
  Props as TabProps,
} from '../components/settings/SettingsTab';
import PageTitle from '../components/shared/PageTitle';

interface Props {
  children: ReactNode;
}

const tabs: TabProps[] = [
  {
    title: 'Account Information',
    subtitle: 'Renewal date, status, dashboard',
    route: '/settings',
    icon: faUser,
  },
  {
    title: 'Software Information',
    subtitle: 'Check for updates, read changelogs',
    route: '/settings/information',
    icon: faChartSimple,
  },
  {
    title: 'Integrations',
    subtitle: 'Configure webhooks, set API keys',
    route: '/settings/integrations',
    icon: faWaveSquare,
  },
];

export default function SettingsLayout({ children }: Props) {
  return (
    <div className="flex flex-grow min-h-screen select-none drag">
      <Navbar />
      <div className="ml-52 grid grid-cols-12 w-full text-white">
        <div className="flex-col col-start-1 col-end-5 border-r border-gray-700 p-10 space-y-8">
          <PageTitle title="Settings" />
          {tabs.map((tab) => (
            <SettingsTab
              key={tab.route}
              title={tab.title}
              subtitle={tab.subtitle}
              icon={tab.icon}
              route={tab.route}
            />
          ))}
        </div>
        <div className="flex-col col-start-5 col-end-13 py-10 min-w-max">
          {children}
        </div>
      </div>
    </div>
  );
}
