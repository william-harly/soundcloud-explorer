import Head from 'next/head'

export default function Header({search}) {
  return (
    <>
      <Head>
        <title>Music Explorer</title>
        <link rel="icon" href="/logo.ico" />
        <script src="https://w.soundcloud.com/player/api.js" type="text/javascript" />
      </Head>
      <div style={styles.container}>
        <div style={styles.logo}>
          <a href="https://soundcloud.com">
            <img src='https://developers.soundcloud.com/assets/logo_big_white.png' />
          </a>
        </div>
        <a href="/" style={styles.menu}>Home</a>
        <a href="/explore" style={styles.menu}>Explore</a>
        <div style={styles.menu} />
        <form action="/explore" style={styles.form}>
          <input style={styles.search}
            defaultValue={search}
            placeholder="Search for tracks"
            type="search"
            name="search"
            autoComplete="off"
          />
          <button type='submit' style={styles.submit}></button>
        </form>
        <div style={styles.right}>
          <div style={styles.logo}>
            <a href="https://developers.soundcloud.com">
              <img src="https://developers.soundcloud.com/assets/powered_by_white.png" />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

const styles = {
  container: {
    top: 0,
    position: 'sticky',
    display: 'flex',
    width: '100%',
    minWidth: '1000px',
    padding: '0 12px',
    height: '46px',
    background: '#333',
  },
  logo: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0 10px',
    height: '100%',
    background: 'linear-gradient(#f70,#f30)',
  },
  menu: {
    color: '#ccc',
    display: 'flex',
    width: '104px',
    height: '46px',
    borderRight: '1px solid #111',
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    position: 'relative',
    padding: '9px 10px 8px',
    width: '500px',
  },
  search: {
    color: '#666',
    background: '#e5e5e5',
    outline: 0,
    border: 0,
    padding: '5px 7px',
    width: '100%',
    borderRadius: '4px',
    height: '28px',
  },
  submit: {
    border: 0,
    padding: 0,
    background: 'url(https://a-v2.sndcdn.com/assets/images/search-dbfe5cbb.svg) 0 0 no-repeat',
    width: '15px',
    height: '15px',
    position: 'absolute',
    right: '20px',
    top: '15px',
    cursor: 'pointer',
  },
  right: {
    display: 'flex',
    flexGrow: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
}