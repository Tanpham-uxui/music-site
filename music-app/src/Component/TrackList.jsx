import React from "react";
import {Stack, Typography} from "@mui/material";

function TrackList(){
  return(
      <Stack
      direction={{sm:'column', md:'row'}}
      spacing={2}
      >
          <Stack direction="column" spacing={2}>
            <Typography variant="h5" sx={{fontWeight: "bold"}}>Tracks For You</Typography>
            <Stack direction="column">
            <Stack direction="row">
              
            </Stack>
            </Stack>
          </Stack>
      </Stack>
  )
}
export default TrackList