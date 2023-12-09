import React from "react";
import {Avatar, Typography} from "@mui/material";
import {Button} from "@mui/joy";
import {Play} from "../Icon/MusicLogo";

function MusicRowCard({song}){
  const handlePlaySong = () => {
      document.getElementById(song.id).play()
  }
  return(
        <tr>
          <td><Avatar src={song.thumbnail}/></td>
          <td><Typography variant="body2">{song.songName}</Typography></td>
          <td><Typography variant="body2">{song.artist}</Typography></td>
          <td><Typography variant="body2">{song.musician}</Typography></td>
          <td><Typography variant="body2">{song.album}</Typography></td>
          <td>
            <Button onClick={handlePlaySong}><Play/></Button>
            <audio id={song.id} src={song.audio}></audio>
          </td>
        </tr>
  )
}
export default MusicRowCard
