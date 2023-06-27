import React from 'react'
import { Grid, Button, TextField } from '@mui/material'

const HomeContactContent = () => {
  return (
    <div name="contact" className='h-auto w-full bg-transparent flex justify-end items-end shadow-xl lg:px-40'>
        <div className="h-auto mt-0 lg:mt-96 w-full flex flex-col lg:flex-row my-10">
            <div className=" w-full h-full flex flex-col lg:flex-row justify-center items-center">
              <div className="w-[75%] h-[80%] mb-10 lf-mb-0">
                <h3 className="  mt-16 py-3 tracking-widest text-[#C88EA7] font-semibold">Contact Us</h3>
                <p className="text-1xl lg:text-3xl tracking-widest">Email us with any question or inquiries.We would be happy to answer your question and set up a meeting with you.</p>               
              </div>
            </div>
            <div className=" w-full h-full flex justify-center items-center">
              <div className=" w-[75%] h-[80%]">
              <form >
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <TextField
                          label="Full Name"
                          variant="outlined"
                          fullWidth
                          // value={fullName}
                          // onChange={(e) => setFullName(e.target.value)}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          label="Email"
                          variant="outlined"
                          fullWidth
                          // value={email}
                          // onChange={(e) => setEmail(e.target.value)}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          label="Message"
                          variant="outlined"
                          multiline
                          rows={8}
                          fullWidth
                          // value={message}
                          // onChange={(e) => setMessage(e.target.value)}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Button
                        style={{
                          backgroundColor: '#C88EA7'
                        }}
                          variant="contained"
                          type="submit"
                          fullWidth
                        >
                          Submit
                        </Button>
                      </Grid>
                    </Grid>
                  </form>
              </div>
            </div>
        </div>
    </div>
  )
}

export default HomeContactContent