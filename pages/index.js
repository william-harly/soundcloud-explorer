import { useEffect, useState } from 'react'
import axios from 'axios'

import Header from '../components/layout/Header'
import Player from '../components/layout/Player'
import SongItem from '../components/list/SongItem'

export default function Home() {

  const [songs, setSongs] = useState([])
  const [currSong, setCurrSong] = useState(-1)
  const [isPlay, setIsPlay] = useState(false)

  useEffect(() => {
    setIsPlay(true)
  }, [currSong])

  function onPlay(index) {
    if (currSong == index) {
      setIsPlay(!isPlay)
    }
    else
      setCurrSong(index)
  }

  async function loadData() {
    const response = await axios.get('/api/featured_tracks/top/all-music', {
      params: {
        'client_id': 'v0C9kDEyULvWF0Ggb1vMnimjMDxtYX4B',
        'limit': 12,
      },
    })
    setSongs(response.data.collection)
    console.log(response.data.collection)
  }

  useEffect(() => {
    loadData()
  }, [])

  return (
    <>
      <Header />
      <div style={styles.background}>
        <div style={styles.container}>
          <div style={styles.content}>
            <h3>Top 10 Trening Song in SoundCloud</h3>
            {songs.map((song, index) => (
              <SongItem
                key={song.id}
                song={song}
                isPlay={index == currSong && isPlay}
                onPlay={() => onPlay(index)}
              />
            ))}
          </div>
          <Player
            song={songs[currSong]}
            onChange={isPlay => {
              setIsPlay(isPlay)
            }}
            isPlay={isPlay} />
        </div>
      </div>
    </>
  )
}

const styles = {
  background: {
    background: '#f2f2f2',
    padding: '0 12px',
  },
  container: {
    width: '100%',
    background: '#ffffff',
  },
  content: {
    padding: '76px 30px 30px',
    marginRight: '360px',
  }
}