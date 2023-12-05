import React, {useState} from "react";
import {Avatar, Button, Container, Grid, Stack, Typography} from "@mui/material";
import "@fontsource/montserrat";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/400-italic.css";
import {
  AlbumsIcon, ArtistsIcon, BrowseIcon,
  HomeIcon, LikedIcon,
  PlayListsIcon,
  PodcastsIcon,
  RadioIcon,
  SongsIcon
} from "../Icon/MusicLogo";
import {NavLink, Link} from "react-router-dom";

function SideBar({children}) {
  // const [showFullSideBar,setShowFullSideBar] = useState(false)
  const libraryElements = [
    {
      "elementIcon": <HomeIcon fill="RGBA(182,187,196,0.7)"/>,
      "elementName": "Home",
      "address": "home"
    }
    ,
    {
      "elementIcon": <SongsIcon fill="RGBA(182,187,196,0.7)"/>,
      "elementName": "Songs",
      "address": "songs"
    },
    {
      "elementIcon": <AlbumsIcon fill="RGBA(182,187,196,0.7)"/>,
      "elementName": "Albums",
      "address": "album"
    },
    {
      "elementIcon": <ArtistsIcon fill="RGBA(182,187,196,0.7)"/>,
      "elementName": "Artists",
      "address": "artists"
    },
    {
      "elementIcon": <LikedIcon fill="RGBA(182,187,196,0.7)"/>,
      "elementName": "Liked",
      "address": "liked"
    },
    {
      "elementIcon": <PlayListsIcon fill="RGBA(182,187,196,0.7)"/>,
      "elementName": "Playlists",
      "address": "playlists"
    }

  ]
  const discoverElements = [
    {
      "elementIcon": <RadioIcon/>,
      "elementName": "Radio",
      "address": "radio"
    },
    {
      "elementIcon": <PodcastsIcon/>,
      "elementName": "Podcast",
      "address": "podcast"
    },
    {
      "elementIcon": <BrowseIcon/>,
      "elementName": "Browse",
      "address": "browse"
    },
  ]
  return (
      <Container sx={{marginTop: "3rem"}}>
        <Grid container spacing={1}>
          <Grid item md={3}
                sx={{
                  padding: "8px",
                  paddingBottom: "2rem",
                  marginBottom: "2rem"
                }}>
            <Stack direction="column" spacing={2} alignItems="center" justifyItems='center'>
              <Stack sx={{
                padding: "8px",
                borderBottom: "1px solid #D0E0D2",
                paddingBottom: "2rem", marginBottom: "2rem",
                width: "100%"
              }} direction="row" spacing={2} alignItems="center">
                <Avatar src="https://promptsideas.b-cdn.net/prompts/279/wvJSVQrN1s5FBHDKfRnc.png"
                        sx={{width: 72, height: 72}}/>
                <Stack flexDirection="column">
                  <Typography variant="h6" sx={{fontWeight: "bold"}}>Ava Max</Typography>
                  <Typography
                      variant='p'
                      sx={{
                        fontWeight: "bold",
                        border: "1px solid",
                        borderRadius: "0.2rem",
                        paddingX: "0.6rem",
                        paddingY: "0.2rem",
                        textAlign: "center"
                      }}>
                    PREMIUM
                  </Typography>
                </Stack>
              </Stack>
              <Stack sx={{width: "100%"}} direction="column">
                <Typography variant="h6" sx={{fontWeight: "bold"}}>Library</Typography>
                <Stack sx={{width: "100%", paddingY: "1rem", marginBottom: "2rem"}} direction='column'
                       spacing={3}>
                  {libraryElements.map((element) => (
                      <Button id={element.id} component={NavLink}
                              variant='text'
                              to={`${element.address}`}
                              sx={{
                                width: "100%", paddingX: "2rem",
                                display: "flex", direction: "row",
                                justifyContent: "start", textTransform: "none",
                                color: "#FFFBF5"
                              }}>
                        <Stack
                            direction="row" spacing={2} justifyItems={'start'}
                            sx={{textDecoration: "none"}}>
                          {element.elementIcon}
                          <Typography variant="subtitle1" sx={{
                            fontWeight: "bold",
                            justifyContent: "start"
                          }} className={"sideBar-typo"}>{element.elementName}</Typography>
                        </Stack>
                      </Button>

                  ))}
                </Stack>
                <Typography variant="h6" sx={{fontWeight: "bold"}}>Discover</Typography>
                <Stack sx={{width: "100%", paddingY: "1rem", paddingX: "2rem"}} direction='column' spacing={3}>
                  {discoverElements.map((element) => (
                      <Stack direction="row" spacing={2}>
                        {element.elementIcon}
                        <Typography variant="subtitle1" sx={{
                          fontWeight: "bold",
                          justifyContent: "start"
                        }}>{element.elementName}</Typography>
                      </Stack>
                  ))}
                </Stack>
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={9}>{children}</Grid>
        </Grid>
      </Container>
  )
}

export default SideBar