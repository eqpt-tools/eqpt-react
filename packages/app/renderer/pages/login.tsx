import React, { useCallback } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { faXmark } from '@fortawesome/free-solid-svg-icons/faXmark';
import { ipcRenderer } from 'electron';
import AuthLayout from '../layouts/Auth';
import Text from '../components/shared/Text';
import LoginForm from '../forms/login/LoginForm';
import Icon from '../components/shared/Icon';

const LOGO_SIZE = 75;

export default function Login() {
  const handleClick = useCallback(() => {
    ipcRenderer.send('close-app');
  }, []);

  return (
    <AuthLayout>
      <Head>
        <title>Login — EQPT Tools</title>
      </Head>
      <div className="flex flex-col justify-center items-center w-full max-w-sm mx-auto gap-y-6">
        {/* Row for top content */}
        <div className="flex flex-row space-x-3">
          <Image
            src="/images/logo.png"
            width={LOGO_SIZE}
            height={LOGO_SIZE}
            alt="EQPT Logo"
          />
          <div className="flex flex-col justify-center">
            <Text weight="semibold" size="3xl">
              EQPT Tools
            </Text>
            <Text weight="medium" size="xl" opacity={40}>
              Sign in to access your toolbox.
            </Text>
          </div>
        </div>

        {/* Login form */}
        <LoginForm />
      </div>

      {/* Close button */}
      <div className="absolute top-4 right-6">
        <div
          role="button"
          onClick={handleClick}
          className="text-gray-600 hover:text-gray-700 transition hover:cursor-pointer w-5 h-5"
        >
          <Icon icon={faXmark} size="lg" />
        </div>
      </div>
    </AuthLayout>
  );
}
