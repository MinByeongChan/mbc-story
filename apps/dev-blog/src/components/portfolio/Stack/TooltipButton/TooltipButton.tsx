import React from 'react';
import { IconButton, Tooltip } from '@mui/material';
import Image from 'next/image';

interface TooltipButtonProps {
  title: string;
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export const TooltipButton = ({ title, src, alt, width = 32, height = 32 }: TooltipButtonProps) => {
  return (
    <Tooltip title={title}>
      <IconButton>
        <Image width={width} height={height} src={src} alt={alt} />
      </IconButton>
    </Tooltip>
  );
};
