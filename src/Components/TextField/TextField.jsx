import React from 'react'
import { TextField } from '@mui/material'
import ControlledTypography from '../Typography/Typography'


const ControlledTextField  = (props) => {
    const { handleChange, variant, label, style, variantTextfield, isGutterBottom, disable } = props

    return (
        <>
            <ControlledTypography 
            variant={variant}
            isGutterBottom={isGutterBottom}
            text={label}
            />
            <TextField
            style={style}
            onChange={handleChange}
            variant={variantTextfield}
            disabled={disable}
            ></TextField>
        </>
    )
}
export default ControlledTextField