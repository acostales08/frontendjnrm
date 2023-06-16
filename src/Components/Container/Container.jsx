import React from "react";
import { Container } from "@mui/system";

const ControlledContainer = ({style, children}) => {

    return (
        <Container style={{style,}}>
            {children}
        </Container>
    )
}
export default ControlledContainer