import React from "react";
import {Avatar, Box, Container, Grid, Stack, Typography} from "@mui/material";
import "@fontsource/montserrat";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/400-italic.css";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import {UilCompactDisc, UilEstate, UilHeadphonesAlt} from "@iconscout/react-unicons";
import {Album, Artist, Heart, Home, MagnifyingGlass, PlayList, Podcast, RadioIcon, Song} from "../Icon/MusicLogo";
import {PlaylistAddCheck} from "@mui/icons-material";

function sideBar(props) {
  const libraryElements = [
    {
      "elementIcon" : <Home/>,
      "elementName":"Home"
    }
    ,
    {
      "elementIcon" : <Song/>,
      "elementName":"Song"
    },
    {
      "elementIcon" : <Album/>,
      "elementName":"Home"
    },
    {
      "elementIcon" : <Artist/>,
      "elementName":"Artists"
    },
    {
      "elementIcon" : <Heart/>,
      "elementName":"Lịked"
    },
    {
      "elementIcon" : <PlayList/>,
      "elementName":"Playlists"
    }

  ]
  const discoverElements = [
    {
      "elementIcon" : <RadioIcon/>,
      "elementName":"Radio"
    },
    {
      "elementIcon" : <Podcast/>,
      "elementName":"Podcast"
    },
    {
      "elementIcon" : <MagnifyingGlass/>,
      "elementName":"Browse"
    },

  ]
  return (
      <Container sx={{marginTop: "3rem"}}>
        <Grid container spacing={1} >
          <Grid item md={3}
                sx={{display: "flex",
                  flexDirection: "column",
                  gap: 2,
                  alignItems:"center",
                  justifyItems:"center",
                  padding:"8px",
                  paddingBottom:"2rem", marginBottom:"2rem"
                }}>
            <Stack sx={{
              padding:"8px",
              borderBottom: "1px solid #ccc",
              paddingBottom:"2rem", marginBottom:"2rem",
              width: "100%"
            }}direction="row" spacing={2} alignItems="center" >
              <Avatar src="https://promptsideas.b-cdn.net/prompts/279/wvJSVQrN1s5FBHDKfRnc.png"
                      sx={{width: 72, height: 72}}/>
              <Stack  flexDirection="column">
                <Typography variant="h6" sx={{fontWeight: "bold"}}>Ava Max</Typography>
                <Typography
                    variant='p'
                    sx={{fontWeight: "bold", border: "1px solid", borderRadius: "0.2rem", paddingX:"0.6rem",paddingY:"0.2rem", textAlign:"center"}}>
                  PREMIUM
                </Typography>
              </Stack>
            </Stack>
          <Stack sx={{ width:"100%"}} direction="column" >
            <Typography variant="h6" sx={{fontWeight: "bold"}}>LIBRARY</Typography>
            <Stack sx={{width:"100%", paddingY: "1rem", paddingX: "2rem"}} direction='column' spacing={3}>
              {libraryElements.map((element)=>(
                  <Stack direction="row" spacing={2}>
                    {element.elementIcon}
                    <Typography variant="subtitle1" sx={{fontWeight: "bold",  justifyContent:"start"}}>{element.elementName}</Typography>
                  </Stack>
              ))}
            </Stack>
            <Typography variant="h6" sx={{fontWeight: "bold"}}>Discover</Typography>
            <Stack sx={{width:"100%", paddingY: "1rem", paddingX: "2rem"}} direction='column' spacing={3}>
              {discoverElements.map((element)=>(
                  <Stack direction="row" spacing={2}>
                    {element.elementIcon}
                    <Typography variant="subtitle1" sx={{fontWeight: "bold",  justifyContent:"start"}}>{element.elementName}</Typography>
                  </Stack>
              ))}
            </Stack>
          </Stack>
          </Grid>
          <Grid item xs={8}>{props.children}</Grid>
        </Grid>
      </Container>
  )
}

export default sideBar