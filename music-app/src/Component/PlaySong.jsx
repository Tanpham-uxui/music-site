import React from "react";

function PlaySong({src}) {
  return(
      <>
        <audio id="playingSong" src={src}></audio>
      </>
  )

}

export default PlaySong