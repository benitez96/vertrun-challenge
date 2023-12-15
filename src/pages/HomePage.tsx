
const CLIENT_ID = import.meta.env.VITE_CLIENT_ID
const REDIRECT_URI = import.meta.env.VITE_AUTH_REDIRECT_HOST_URI + '/exchange-token'

export const HomePage = () => {

  const authURL = `http://www.strava.com/oauth/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${REDIRECT_URI}&approval_prompt=force&scope=read`


  return (
    <>
      <h1>Home Page</h1>
      <button onClick={() => window.open(authURL)}>
        Ingresar
      </button>
    </>

  )
}
