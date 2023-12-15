import { Divider } from "@nextui-org/react";
import { ActivityCard } from "../components/ActivityCard";
import { useGetActivitiesQuery } from "../store/services/stravaApi";
import { LoadingWithBackdrop } from "../components/LoadingWithBackdrop";
import dayjs

export const ActivitiesPage = () => {

  {/* const month = dayjs().month(); */} 
  {/* const fromDate = dayjs().month(month).startOf("month").format("YYYY-MM-DD"); */}
  {/* const toDate = dayjs().month(month).endOf("month").format("YYYY-MM-DD"); */}


  const { data: activities = [], isLoading } = useGetActivitiesQuery();

  if ( isLoading ) return <LoadingWithBackdrop />


  return (
    <main className="flex flex-col gap-4 mt-8">
      <h2 className="text-xl px-4">Activities</h2>
      <Divider />
      <ul className="flex flex-wrap gap-4">
        {
          activities.map(
            activity => <ActivityCard activity={activity} key={activity.id} />
          )
        }
      </ul>
    </main>

  )
}
