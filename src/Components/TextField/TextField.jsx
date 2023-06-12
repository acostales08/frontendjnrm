import * as React from 'react';
import TextField from '@mui/material/TextField';

const ControlledTexField = ({label, variant}) => {
  return (

      <TextField id="standard-basic" label={label} variant={variant} />
  );
}

export default ControlledTexField;