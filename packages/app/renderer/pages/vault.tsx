import { faLayerPlus } from '@fortawesome/pro-solid-svg-icons/faLayerPlus';
import { faPlus } from '@fortawesome/pro-solid-svg-icons/faPlus';
import { faTrash } from '@fortawesome/pro-solid-svg-icons/faTrash';
import React, { useMemo } from 'react';
import { faArrowRightToBracket } from '@fortawesome/pro-solid-svg-icons/faArrowRightToBracket';
import { faArrowRightFromBracket } from '@fortawesome/pro-solid-svg-icons/faArrowRightFromBracket';
import Button from '../components/shared/Button';
import Table from '../components/shared/Table';
import AppLayout from '../layouts/App';
import Actions from '../components/vault/Actions';

interface Entry {
  firstName: string;
  lastName: string;
  visits: number;
  status: string;
}

const data: Entry[] = [
  {
    firstName: 'elevator',
    lastName: 'success',
    visits: 38,
    status: 'complicated',
  },
  {
    firstName: 'development',
    lastName: 'cloud',
    visits: 8,
    status: 'single',
  },
  {
    firstName: 'hobbies',
    lastName: 'rice',
    visits: 36,
    status: 'single',
  },
  {
    firstName: 'wash',
    lastName: 'force',
    visits: 1,
    status: 'relationship',
  },
  {
    firstName: 'entry',
    lastName: 'grocery',
    visits: 98,
    status: 'single',
  },
  {
    firstName: 'door',
    lastName: 'salt',
    visits: 56,
    status: 'single',
  },
  {
    firstName: 'wrench',
    lastName: 'scissors',
    visits: 9,
    status: 'complicated',
  },
  {
    firstName: 'consequence',
    lastName: 'popcorn',
    visits: 31,
    status: 'relationship',
  },
  {
    firstName: 'database',
    lastName: 'crown',
    visits: 96,
    status: 'single',
  },
  {
    firstName: 'geese',
    lastName: 'fang',
    visits: 81,
    status: 'relationship',
  },
  {
    firstName: 'excitement',
    lastName: 'conclusion',
    visits: 59,
    status: 'relationship',
  },
  {
    firstName: 'hotel',
    lastName: 'recognition',
    visits: 97,
    status: 'complicated',
  },
  {
    firstName: 'toy',
    lastName: 'division',
    visits: 27,
    status: 'complicated',
  },
  {
    firstName: 'carriage',
    lastName: 'week',
    visits: 38,
    status: 'single',
  },
  {
    firstName: 'replacement',
    lastName: 'error',
    visits: 22,
    status: 'single',
  },
  {
    firstName: 'zephyr',
    lastName: 'assumption',
    visits: 50,
    status: 'single',
  },
  {
    firstName: 'tomatoes',
    lastName: 'eggs',
    visits: 73,
    status: 'relationship',
  },
  {
    firstName: 'can',
    lastName: 'eyes',
    visits: 86,
    status: 'single',
  },
  {
    firstName: 'downtown',
    lastName: 'bun',
    visits: 69,
    status: 'single',
  },
  {
    firstName: 'ant',
    lastName: 'paint',
    visits: 28,
    status: 'complicated',
  },
];

export default function Vault() {
  const columns = useMemo(
    () => [
      {
        accessor: 'firstName',
        Header: 'First Name',
      },
      {
        accessor: 'lastName',
        Header: 'Last Name',
      },
      {
        accessor: 'visits',
        Header: 'Visits',
      },
      {
        accessor: 'status',
        Header: 'Status',
      },
      {
        accessor: 'id',
        Header: '',
        Cell: Actions,
      },
    ],
    [],
  );

  return (
    <AppLayout title="Vault">
      <div className="flex flex-col w-full">
        <div className="flex justify-between my-5">
          <div className="space-x-3">
            <Button type="button" size="md" color="primary" icon={faPlus}>
              Create
            </Button>

            <Button type="button" size="md" color="primary" icon={faLayerPlus}>
              Bulk create
            </Button>
            <Button type="button" size="md" color="warning" icon={faTrash}>
              Clear
            </Button>
          </div>
          <div className="space-x-3">
            <Button
              type="button"
              size="md"
              color="secondary"
              icon={faArrowRightToBracket}
            >
              Import
            </Button>
            <Button
              type="button"
              size="md"
              color="secondary"
              icon={faArrowRightFromBracket}
            >
              Export
            </Button>
          </div>
        </div>

        <AppLayout.Scroll>
          <Table<Entry> data={data} columns={columns} />
        </AppLayout.Scroll>
      </div>
    </AppLayout>
  );
}
