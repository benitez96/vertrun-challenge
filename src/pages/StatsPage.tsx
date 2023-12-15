import dayjs from "dayjs";
import { useGetActivitiesQuery } from "../store/services/stravaApi";
import { aggregateActivitiesByMonth } from "../utils/aggregateActivities";
import { StatCard } from "../components/StatCard";
import { LoadingWithBackdrop } from "../components/LoadingWithBackdrop";
import { Divider } from "@nextui-org/react";

export const StatsPage = () => {

  const params = new URLSearchParams()
  params.append('before', dayjs().endOf("month").unix().toString())
  params.append('after', dayjs().subtract(2, 'month').startOf("month").unix().toString())

  const { data: activities = [], isLoading } = useGetActivitiesQuery(params.toString())


  const currentMonthData = aggregateActivitiesByMonth(activities!, dayjs().month())
  const lastMonthData = aggregateActivitiesByMonth(activities!, dayjs().subtract(1, 'month').month())
  const twoMonthsAgoData = aggregateActivitiesByMonth(activities!, dayjs().subtract(2, 'month').month())

  if (isLoading) return <LoadingWithBackdrop />

  return (
    <div className="flex flex-col gap-4 mt-8">
      <h2 className="text-xl px-4">Statistics of last 3 months</h2>
      <Divider />
      <div className="flex flex-col md:flex-row p-2 gap-2">
        <StatCard stats={twoMonthsAgoData} month={dayjs().month() - 2} />
        <StatCard stats={lastMonthData} month={dayjs().month() - 1} />
        <StatCard stats={currentMonthData} month={dayjs().month()} />
      </div>

    </div>
  )
}
