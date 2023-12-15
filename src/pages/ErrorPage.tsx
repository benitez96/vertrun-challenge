import {Card, CardBody, Link} from "@nextui-org/react";

export const ErrorPage = () => {

  return (
    <div className="flex flex-col items-center justify-center h-screen p-2">
      <Card>
        <CardBody>
          <p className="text-center">Something went wrong, sorry 💔. 
            <Link 
              className="ml-1"
              showAnchorIcon 
              href="/"
            >
              Back to home
            </Link>
          </p>
        </CardBody>
      </Card>
    </div>
  )
}
