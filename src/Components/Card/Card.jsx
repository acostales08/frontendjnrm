import React from "react";
import { Card, CardContent } from "@mui/material";

const ControlledCard = (props) => {
    const {children, style} = props

    return (
        <>
        <Card style={style}>
          {children}
        </Card>
        </>
    )
}

export default ControlledCard