import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import axios from 'axios'

import Header from '../components/layout/Header'
import Player from '../components/layout/Player'
import SongItem from '../components/list/SongItem'

export default function Home() {
  const router = useRouter()
  
  const [isLoading, setLoading] = useState(false)
  const [search, setSearch] = useState();
  const [page, setPage] = useState(0)
  const [isEnd, setEnd] = useState(false)

  const [songs, setSongs] = useState([])
  const [currSong, setCurrSong] = useState(-1)
  const [isPlay, setPlay] = useState(false)

  useEffect(() => setPlay(true), [currSong])
  useEffect(() => {
    if (router.isReady) {
      setSearch(router.query.search)
      loadData([], router.query.search, 0)
    }
  }, [router])

  async function loadData(songs, search, page) {
    setLoading(true)
    const response = await axios.get(search
      ? '/api/search/tracks'
      : '/api/featured_tracks/top/all-music', {
        params: {
          'client_id': 'v0C9kDEyULvWF0Ggb1vMnimjMDxtYX4B',
          'q': search,
          'limit': 10,
          'offset': 10 * page,
        }
      }
    )
    if (response.data.collection.length == 0)
      setEnd(true)
    else {
      setPage(page + 1)
      setSongs([...songs, ...response.data.collection])
      setLoading(false)
    }
  }

  function onPlay(index) {
    if (currSong == index)
      setPlay(!isPlay)
    else
      setCurrSong(index)
  }

  useEffect(() => {
    if (window.innerHeight > document.body.offsetHeight) {
      if (!isLoading && !isEnd) {
        loadData(songs, search, page)
      }
    }
    else {
      window.onscroll = function(ev) {
        if ((window.innerHeight + window.scrollY + 400) >= document.body.offsetHeight) {
          if (!isLoading && !isEnd) {
            loadData(songs, search, page)
          }
        }
      }
    }
  }, [isLoading])

  return (
    <>
      <Header search={search} />
      <div style={styles.background}>
        <div style={styles.container}>
          <div style={styles.content}>
            <h3>{router.isReady && (
              search
                ? 'Result for "' + search + '" in SoundCloud'
                : 'Trending Song in SoundCloud'
            )}
            </h3>
            <ul style={styles.list}>
              {songs.length === 0 && isEnd && (
                <><br/><h1>No Tracks Found</h1></>
              )}
              {songs.map((song, index) => (
                <SongItem
                  key={song.id}
                  song={song}
                  isPlay={index == currSong && isPlay}
                  onPlay={() => onPlay(index)}
                />
              ))}
            </ul>
          </div>
          <div style={{width: '360px'}}>
            <Player
              song={songs[currSong]}
              onChange={setPlay}
              isPlay={isPlay} />
          </div>
        </div>
      </div>
    </>
  )
}

const styles = {
  background: {
    minHeight: '100vh',
    background: '#f2f2f2',
    padding: '0 12px',
  },
  container: {
    display: 'flex',
    minHeight: '100vh',
    width: '100%',
    background: '#ffffff',
  },
  content: {
    flexGrow: 1,
    padding: '30px 30px 30px',
    overflow: 'hidden',
    borderRight: '1px solid #f5f5f5',
  },
  list: {
    listStyleType: 'none',
  },
}