import {Card, CardBody} from "@nextui-org/react";
import { Activity } from "../types";
import { KeyValuePair } from "./KeyValuePair";


type Props = {
  activity: Activity
}

export const ActivityCard = ({ activity }: Props) => {

  const { name, start_date, distance, elapsed_time, total_elevation_gain } = activity

  return (
    <Card>
      <CardBody className="flex gap-1 p-8">
        <KeyValuePair label="Name" value={name} />
        <KeyValuePair label="Date" value={start_date} />
        <KeyValuePair label="Distance" value={distance} />
        <KeyValuePair label="Duration" value={elapsed_time} />
        <KeyValuePair label="Elevation Gain" value={total_elevation_gain} />
      </CardBody>
    </Card>
  )

}
