import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

 const ControlledButton = ({variant, size, type, text, color, onClick, icon, fullWidth}) => {

  return (
    <Box sx={{ '& button': { m: 1 } }}>
      <div>
        <Button type={type} variant={variant} size={size} color={color} onClick={onClick} fullWidth={fullWidth}>
          {icon}
          {text}
        </Button>
      </div>
    </Box>
  );
}
export default ControlledButton