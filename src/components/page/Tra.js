import React from 'react'
import { useParams } from 'react-router-dom'
import YouTube,{YouTubeProps} from 'react-youtube'

const Tra = ({movies}) => {
    const {id} = useParams()
    const onPlayerReady: YouTubeProps['onReady'] = (event) => {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
      }
    
      const opts: YouTubeProps['opts'] = {
        height: '390',
        width: '640',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
      const movie = movies.find((movie)=>movie.id === +id)
  return (
    <div>
        <h3>{movie.name}</h3>
        <YouTube videoId={movie.tra} opts={opts} onReady={onPlayerReady} />
        <p>{movie.discription}</p>
    </div>
  )
}

export default Tra