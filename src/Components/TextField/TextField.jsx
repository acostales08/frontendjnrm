import React from 'react'
import { Box, TextField } from '@mui/material'


const ControlledTextField  = (props) => {
    const { onChange, label, style, variant, disable, name } = props

    return (
        <Box
        component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
        >
            <TextField
            style={style}
            onChange={onChange}
            variant={variant}
            name={name}
            label={label}
            disabled={disable}
            fullWidth
            ></TextField>
        </Box>
    )
}
export default ControlledTextField