
import { Card, CardBody } from "@nextui-org/react";



export const EmptySection = () => ( 
  <div className="flex justify-center w-full p-2 absolute top-1/2 left-0">
    <Card>
      <CardBody>
        <p className="text-center">There seems to be nothing around here 🙁
        </p>
      </CardBody>
    </Card>
  </div>
)
