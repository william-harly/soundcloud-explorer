import Header from '../components/layout/Header'

export default function Home() {
  return (
    <div style={styles.main}>
      <Header />
      <div style={styles.background}>
        <div style={styles.container}>
          <div style={styles.content}>
            <h1>Music Explorer</h1><br/>
            <p>
              Explore and stream, music shared by emerging and major
              artists around the world.
            </p>
            <a href="/explore" style={styles.explore}> Explore Popular Song</a>
            &nbsp;or&nbsp;
            <form action="/explore" style={styles.form}>
              <input style={styles.search}
                placeholder="Search for tracks"
                type="search"
                name="search"
                autoComplete="off"
              />
              <button type='submit' style={styles.submit}></button>
            </form>
            <div style={styles.about}>
              This website is made by<br/>
              <u>William Harly (2101664523)</u> as assignment for <br/>
              <u>COMP8036 Services Oriented Architecture</u>.<br/>
              <br/>Made using:
              <div style={styles.tools}>
                <a href="https://nextjs.org">
                  <img
                    src="/nextjs.png"
                    width="130px" height="60px"
                    style={{paddingLeft: '30px'}}
                  />
                </a>
                <a href="https://vercel.com">
                  <img width="160px" height="60px" src="/vercel.svg" />
                </a>
                <a href="https://developer.soundcloud.com">
                  <img
                    width="170px" height="60px"
                    src="https://developers.soundcloud.com/assets/powered_by_black.png"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const styles = {
  main: {
    height: '100vh',
    overflow: 'hidden',
  },
  background: {
    minHeight: '100vh',
    background: '#f2f2f2',
    padding: '0 12px',
  },
  container: {
    display: 'flex',
    justifyContent: 'flex-end',
    minHeight: '100vh',
    width: '100%',
    background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url("home.webp")',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  content: {
    flexDirection: 'column',
    width: '360px',
    height: '100vh',
    padding: '30px 30px',
    top: '46px',
    right: '-12px',
    borderLeft: '1px solid #f5f5f5',
    background: '#fff',
  },
  form: {
    display: 'inline-block',
    position: 'relative',
    margin: '9px 0',
    width: '100%',
  },
  search: {
    color: '#666',
    background: '#e5e5e5',
    outline: 0,
    border: 0,
    padding: '15px 7px',
    width: '100%',
    borderRadius: '4px',
  },
  submit: {
    border: 0,
    padding: 0,
    background: 'url(https://a-v2.sndcdn.com/assets/images/search-dbfe5cbb.svg) 0 0 no-repeat',
    width: '15px',
    height: '30px',
    position: 'absolute',
    right: '13px',
    top: '17px',
    cursor: 'pointer',
  },
  explore: {
    display: 'inline-block',
    background: 'linear-gradient(#f70,#f30)',
    border: 0,
    borderRadius: '3px',
    color: '#fff',
    padding: '15px',
    margin: '9px 0',
  },
  about: {
    marginTop: '11px',
    paddingTop: '11px',
    borderTop: '1px solid #f5f5f5'
  },
  tools: {
    margin: '11px 19px',
  }
}