import { useEffect, useState } from "react"

export default function Player({song, isPlay, onChange}) {
  const [player, setPlayer] = useState()
  const [state, setstate] = useState(false)

  useEffect(() => {
    const SC = window.SC
    const new_player = SC.Widget(document.getElementById("sc-widget"))
    setPlayer(new_player)
  }, [])

  useEffect(() => {
    if (player && song) {
      setstate(true)
      player.load(song.uri, {
        show_artwork: true,
        auto_play: true,
        download: false,
        sharing: true,
        show_comments: false,
        show_playcount: true,
        show_user: true,
        start_track: 0,
        hide_related: true,
        buying: false,
        visual: false
      })
      player.bind(SC.Widget.Events.READY, () => {
        player.bind(SC.Widget.Events.PLAY, () => setstate(true))
        player.bind(SC.Widget.Events.PAUSE, () => setstate(false))
        player.bind(SC.Widget.Events.FINISH, () => setstate(false))
      })
    }
  }, [song])

  useEffect(() => {
    if (state != isPlay) {
      setstate(isPlay)
      player.toggle()
    }
  }, [isPlay])

  useEffect(() => {
    onChange(state)
  }, [state])

  function getArtwork() {
    if (!song)
      return undefined
    const url = song.artwork_url ? song.artwork_url : song.user.avatar_url
    return url.replace(new RegExp('large.jpg$'), 't500x500.jpg');
  }

  return (
    <div style={styles.container}>
      <div style={styles.artworkContainer}>
        <img style={styles.artwork} src={getArtwork()} />
      </div>
      <script src="https://w.soundcloud.com/player/api.js" type="text/javascript" />
      <iframe
        id="sc-widget"
        width="100%"
        height="166"
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        src={'https://w.soundcloud.com/player/?url=' + song?.uri +
          '&amp;auto_play=true&hide_related=true&show_comments=false' +
          '&show_user=true&show_artwork=true&show_reposts=false&' +
          'buying=false&download=false'} />
    </div>
  )
}
  
const styles = {
  container: {
    position: 'fixed',
    display: 'flex',
    flexDirection: 'column',
    width: '360px',
    padding: '30px 30px',
    top: '46px',
    right: '12px',
    borderLeft: '1px solid #f5f5f5',
    background: '#ffffff',
  },
  artworkContainer: {
    position: 'relative',
    width: '100%',
    paddingTop: '100%',
    marginBottom: '12px',
  },
  artwork: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
  }
}