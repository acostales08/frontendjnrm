import React from 'react'
import { Box, TextField } from '@mui/material'


const ControlledTextField  = (props) => {
    const { handleChange, label, style, variantTextfield, disable } = props

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
            onChange={handleChange}
            variant={variantTextfield}
            label={label}
            disabled={disable}
            ></TextField>
        </Box>
    )
}
export default ControlledTextField