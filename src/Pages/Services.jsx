import React, { useEffect, useState } from 'react'
import { ControlledContainer, ControlledCard, ControlledTypography, ControlledGrid, ControlledTextField } from '../Components'

export const Services = () => {
    const [state, setState] = useState({
        firstname : '', lastname: ''
    })
    const handleChange = (event, formName) => {
        setState({...state, [formName]: event.target.value})
    }
    return(
        <>
            {console.log(state)}
            <ControlledContainer style={{ alignItems: '100px'}}>
                <ControlledCard style={{
                    marginTop: '20px'
                }}>
                    <ControlledTypography 
                    variant="subtitle1"
                    isgutterbottom={true}
                    text="User Form"
                    />
                    <ControlledGrid 
                        rowSpacing={1}
                        columnSpacing={{xs: 1, sm: 2, md: 3}}
                        xs={6}
                        style={{ marginTop: '10px' }}
                        arrMapping={
                            [
                                {
                                    children : (
                                    <>
                                        <ControlledTextField 
                                            handleChange={(event) => handleChange(event, "firstname")}
                                            variant="subtitle1"
                                            label="Firstname"
                                            style={{
                                                marginTop: '10px',
                                                marginBottom: '10px',
                                                width: '100%'
                                            }}
                                            variantTextfield="outlined"
                                            isgutterbottom={false}
                                        />
                                    </>
                                    )
                                },
                                {
                                    children : (
                                        <>
                                            <ControlledTextField 
                                                handleChange={(e) => handleChange(e, "lastname")}
                                                variant="subtitle1"
                                                label="Lastname"
                                                style={{
                                                    marginTop: '10px',
                                                    marginBottom: '10px',
                                                    width: '100%'
                                                }}
                                                variantTextfield="outlined"
                                                isgutterbottom={false}
                                            />
                                        </>
                                        )
                                }
                            ]
                        }
                    />
                </ControlledCard>

            </ControlledContainer>

            
        </>
    )
}
export default Services