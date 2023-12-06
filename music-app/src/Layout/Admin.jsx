import React from "react";
import {Avatar, Box, Typography} from "@mui/material";
import {CssVarsProvider, FormControl, FormLabel, Input, Stack} from "@mui/joy";
import {Image} from "@mui/icons-material";
import thumbnailExample from '../../src/asset/image/thumbnail-example.jpg'

function Admin() {
  return(
      <>
        <Typography variant="h3">Admin Page</Typography>
        <Stack direction="row" spacing={2}>
          <Stack direction="column" spacing={2} sx={{width:"100%"}}>
            <FormControl>
              <FormLabel>Song Name</FormLabel>
              <Input placeholder="Song Name"/>
            </FormControl>
            <FormControl>
              <FormLabel>Artist Name</FormLabel>
              <Input placeholder="Artist Name" />
            </FormControl>
            <FormControl>
              <FormLabel>Album Name</FormLabel>
              <Input placeholder="Album Name" />
            </FormControl>
          </Stack>
          <Stack direction="column" spacing={2} sx={{width:"100%"}}>
            <FormControl>
              <FormLabel>Music</FormLabel>
              <Input type={"file"} sx={{zIndex:1}} onClick={()=>document.getElementById('fileAudio').click()}/>
              <input  id="fileAudio" type="file" accept="audio/*" className={"d-none"}/>
            </FormControl>
            <FormControl>
              <FormLabel>Thumbnail</FormLabel>
              <Box>
                <img role='button' width="100%" height="100%"
                     style={{borderRadius:"1rem"}}
                     src={thumbnailExample} onClick={()=>document.getElementById('fileImage').click()}/>
              </Box>
              <input id="fileImage" type="file" accept="image/*" className={"d-none"}/>
            </FormControl>
          </Stack>
        </Stack>

  </>
  )
}

export default Admin

