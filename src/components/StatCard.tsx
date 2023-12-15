import {Card, CardBody, CardHeader} from "@nextui-org/react";
import { Activity } from "../types";
import { KeyValuePair } from "./KeyValuePair";
import { CiClock2 } from "react-icons/ci";
import { RiPinDistanceFill } from "react-icons/ri";
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import duration from 'dayjs/plugin/duration'

dayjs.extend(duration)


type Props = {
  stats: Pick<Activity, 'distance' | 'elapsed_time' | 'total_elevation_gain'>,
  month: number
}

export const StatCard = ({ stats, month }: Props) => {

  const navigate = useNavigate()

  const { elapsed_time, distance, total_elevation_gain } = stats
  
  const handleNavigate = () => {

    const queryParams = new URLSearchParams({
      before: dayjs().month(month).endOf('month').unix().toString(),
      after: dayjs().month(month).startOf('month').unix().toString()
    })

    navigate({
      pathname: '/activities',
      search: queryParams.toString()
    })

  }

  return (
    <Card 
      className="w-full" 
      isPressable
      onClick={handleNavigate}
    >
      <CardHeader>{dayjs().month(month).format("MMMM")}</CardHeader>
      <CardBody className="flex gap-1 p-8">
        <KeyValuePair icon={<CiClock2 />} label="Time" value={dayjs.duration(elapsed_time, 'seconds' ).asHours() + " h"} />
        <KeyValuePair icon={<RiPinDistanceFill />} label="Distance" value={distance} />
        <KeyValuePair icon={<MdOutlineKeyboardDoubleArrowUp />} label="Elevation Gain" value={total_elevation_gain} />
      </CardBody>
    </Card>
  )

}
