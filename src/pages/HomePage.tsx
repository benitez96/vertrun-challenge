import { Button, Divider, Link } from "@nextui-org/react"

const CLIENT_ID = import.meta.env.VITE_CLIENT_ID
const REDIRECT_URI = import.meta.env.VITE_AUTH_REDIRECT_HOST_URI + '/exchange-token'

export const HomePage = () => {

  const authURL = `http://www.strava.com/oauth/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${REDIRECT_URI}&approval_prompt=force&scope=read,activity:read`

  return (
    <main className="flex flex-col gap-4 pt-8 h-[calc(100vh-4rem)]">
      <h2 className="text-xl px-4">Wellcome</h2>
      <Divider />
      <section className="flex flex-col md:flex-row gap-4 h-full justify-center items-center">
        <Button
          href="/activities"
          as={Link}
          className="w-full md:w-auto"
          color="primary"
          variant="solid"
          size="lg"
        >
          Activities
        </Button>
        <Button
          href="/stats"
          as={Link}
          color="primary"
          className="w-full md:w-auto"
          variant="solid"
          size="lg"
        >
          Statistics
        </Button>
      </section>
    </main>

  )
}
