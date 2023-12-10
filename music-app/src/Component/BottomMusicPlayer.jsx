import React from "react";
import {Box} from "@mui/material";
import {Stack} from "@mui/joy";

function bottomMusicPlayer() {
    return (
        <Stack sx={{position:"fixed", bottom: 0}} direction="row" justifyContent="center">
            <audio controls autoPlay></audio>
        </Stack>
    )
}

export default bottomMusicPlayer