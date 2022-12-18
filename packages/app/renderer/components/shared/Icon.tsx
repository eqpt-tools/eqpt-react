import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome';
import React from 'react';

interface Props {
  icon: IconDefinition;
  className?: string;
  size?: FontAwesomeIconProps['size'];
}

export default function Icon({ icon, size, className }: Props) {
  return (
    <FontAwesomeIcon icon={icon} size={size} className={className} fixedWidth />
  );
}
