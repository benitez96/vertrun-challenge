import {Card, CardBody} from "@nextui-org/react";
import { Activity } from "../types";
import { KeyValuePair } from "./KeyValuePair";
import { CiClock2 } from "react-icons/ci";
import { RiPinDistanceFill } from "react-icons/ri";
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";
import { TbFileDescription } from "react-icons/tb";
import dayjs from "dayjs";
import duration from 'dayjs/plugin/duration'

dayjs.extend(duration)

type Props = {
  activity: Pick< Activity, 'distance' 
  | 'start_date' 
  | 'total_elevation_gain' 
  | 'name' 
  | 'elapsed_time'
>,
}

export const ActivityCard = ({ activity }: Props) => {

  const { name, start_date, distance, elapsed_time, total_elevation_gain } = activity

  return (
    <Card className="w-full sm:max-w-md">
      <CardBody className="flex gap-1 p-8">
        <KeyValuePair icon={<TbFileDescription />} label="Name" value={name} />
        <KeyValuePair icon={<FaCalendarAlt />} label="Date" value={dayjs(start_date).format('YYYY-MM-DD')} />
        <KeyValuePair icon={<CiClock2 />} label="Time" value={dayjs.duration(elapsed_time, 'seconds' ).asHours() + " h"} />
        <KeyValuePair icon={<RiPinDistanceFill />} label="Distance" value={distance} />
        <KeyValuePair icon={<MdOutlineKeyboardDoubleArrowUp />} label="Elevation Gain" value={total_elevation_gain} />
      </CardBody>
    </Card>
  )

}
