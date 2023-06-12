import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function BasicButtons({variant, spacing, direction,text, style, className}) {
  return (
    <Stack spacing={spacing} direction={direction}>
      <Button className={className} variant={variant} style={style}>{text}</Button>
    </Stack>
  );
}