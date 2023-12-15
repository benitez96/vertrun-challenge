import {Card, CardBody, CardHeader} from "@nextui-org/react";
import { Activity } from "../types";
import { KeyValuePair } from "./KeyValuePair";
import { CiClock2 } from "react-icons/ci";
import { RiPinDistanceFill } from "react-icons/ri";
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";


type Props = {
  stats: Pick<Activity, 'distance' | 'elapsed_time' | 'total_elevation_gain'>,
  month: string
}

export const StatCard = ({ stats, month }: Props) => {

  const { elapsed_time, distance, total_elevation_gain } = stats

  return (
    <Card className="w-full">
      <CardHeader>{month}</CardHeader>
      <CardBody className="flex gap-1 p-8">
        <KeyValuePair icon={<CiClock2 />} label="Time" value={elapsed_time} />
        <KeyValuePair icon={<RiPinDistanceFill />} label="Distance" value={distance} />
        <KeyValuePair icon={<MdOutlineKeyboardDoubleArrowUp />} label="Elevation Gain" value={total_elevation_gain} />
      </CardBody>
    </Card>
  )

}
