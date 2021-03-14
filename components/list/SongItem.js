export default function SongItem({song, isPlay, onPlay}) {

  function getArtwork() {
    return song.artwork_url ? song.artwork_url : song.user.avatar_url
  }

  return (
    <div style={styles.container}>
      <div style={styles.artwork} >
        <img src={getArtwork()} />
      </div>
      <div>
        <div style={styles.detail}>
          <div style={styles.play_btn} onClick={onPlay}>
            <img width='12px' height='18px' src={isPlay ? 'pause.svg' : '/play.svg'}/>
          </div>
          <div style={styles.header}>
            <span>{song.user.username}</span>
            <h3 style={styles.song_name}>{song.title}</h3>
          </div>
        </div>
        <div style={styles.play_count}>
          <img src='/play_count.svg' /> &nbsp;{song.playback_count}
        </div>
      </div>
    </div>
  )
}

const styles = {
  container: {
    display: 'flex',
    padding: '16px 0 20px',
    overflow: 'hidden',
  },
  artwork: {
    padding: '1px',
    width: '100px',
    height: '100px',
    marginRight: '15px',
    boxShadow: 'inset 1px 1px rgb(0 0 0 / 10%)',
  },
  detail: {
    display: 'flex',
    marginTop: '15px',
  },
  header: {
    flexGrow: 1,
  },
  song_name: {
    margin: 0,
    whiteSpace: 'nowrap',
  },
  play_btn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#f50',
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    marginRight: '5px',
  },
  play_count: {
    display: 'flex',
    marginTop: '10px',
  }
}