import { Button, Card, CardBody, Divider, Link } from "@nextui-org/react"
import { useAppSelector } from "../hooks"


export const HomePage = () => {

  const { access_token } = useAppSelector(state => state.auth)
  const signed = !!access_token

  return (
    <div className="flex flex-col gap-4 pt-8 h-[calc(100vh-4rem)]">
      <h2 className="text-xl px-4">Welcome</h2>
      <Divider />
      {
        !signed
          ? 
          <div className="flex justify-center w-full p-2 absolute top-1/2 left-0">
            <Card>
              <CardBody>
                <p className="text-center"> Please sign in to see your activities. 🏃
                </p>
              </CardBody>
            </Card>
          </div>
          :
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
      }
    </div>

  )
}
