import React from "react";
import { Grid } from "@mui/material";

const ControlledGrid = (props) => {
    const {
        rowSpacing,
        columnSpacing,
        xs,
        arrMapping = [],
        style
    } = props 
    return (
        <Grid style={style} container rowSpacing={rowSpacing} columnSpacing={columnSpacing}>
            {
                arrMapping.map((item) => (
                    <Grid item xs={xs}>
                        {item.children}
                    </Grid>
                ))
            }
        </Grid>
    )

    
}
export default ControlledGrid