import React from "react";
import {Avatar, Box, Container, Grid, Typography} from "@mui/material";
import "@fontsource/montserrat";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/400-italic.css";

function sideBar(props) {
  return (
      <Container sx={{marginTop: "3rem"}}>
        <Grid container spacing={1} >
          <Grid item xs={4}
                sx={{display: "flex",
                  flexDirection: "column",
                  gap: 2,
                  alignItems:"center",
                  justifyItems:"center",
                  padding:"8px",
                  border: "2px solid",
                  borderRadius:"8px",
                  boxShadow:"5px 10px 30px 1px #888888"
                }}>
            <Box sx={{display: "flex", flexDirection: "row", gap: 2, alignItems:"center", padding:"8px"}}>
              <Avatar src="https://promptsideas.b-cdn.net/prompts/279/wvJSVQrN1s5FBHDKfRnc.png"
                      sx={{width: 64, height: 64}}/>
              <Box sx={{display: "flex", flexDirection: "Column"}}>
                <Typography variant='h6' sx={{fontWeight: "bold"}}>Ava Max</Typography>
                <Typography
                    variant='p'
                    sx={{fontWeight: "bold", border: "1px solid", borderRadius: "0.5rem", padding: "0.2rem"}}>
                  Premium
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={8}>{props.children}</Grid>
        </Grid>
      </Container>
  )
}

export default sideBar