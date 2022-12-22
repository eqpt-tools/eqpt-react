import { Dialog, Transition } from '@headlessui/react';
import React, { Fragment, ReactNode } from 'react';
import Text from './Text';

interface BaseProps {
  open: boolean;
  onClose: (show: boolean) => void;
  children: ReactNode;
}

interface HeaderProps {
  title: string;
  subtitle?: string;
}

interface BodyProps {
  children: ReactNode;
}

interface FooterProps {
  children: ReactNode;
}

function Modal({ open, onClose, children }: BaseProps) {
  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/30" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-lg transform rounded-md bg-[#181921] text-left align-middle shadow-xl transition-all">
                {children}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

function Header({ title, subtitle }: HeaderProps) {
  return (
    <div className="border-b border-gray-800 p-5">
      <Dialog.Title as={Text} size="2xl" weight="medium" opacity={100}>
        {title}
      </Dialog.Title>

      {subtitle && (
        <Dialog.Description as={Text} opacity={70}>
          {subtitle}
        </Dialog.Description>
      )}
    </div>
  );
}

function Body({ children }: BodyProps) {
  return <div className="p-5">{children}</div>;
}

function Footer({ children }: FooterProps) {
  return <div className="bg-[#22242d] p-5 rounded-b-md">{children}</div>;
}

Modal.displayName = 'Modal';
Header.displayName = 'ModalHeader';
Body.displayName = 'ModalBody';
Footer.displayName = 'ModalFooter';

Modal.Header = Header;
Modal.Body = Body;
Modal.Footer = Footer;

export default Modal;
