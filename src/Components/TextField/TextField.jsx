import React from 'react'
import { Box, TextField } from '@mui/material'


const ControlledTextField  = (props) => {
    const { onChange, label, style, variant, disable, name, value, type } = props

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
            type={type}
            style={style}
            onChange={onChange}
            variant={variant}
            name={name}
            label={label}
            disabled={disable}
            value={value}
            fullWidth
            ></TextField>
        </Box>
    )
}
export default ControlledTextField