import { Divider } from "@nextui-org/react";
import { ActivityCard } from "../components/ActivityCard";
import { useGetActivitiesQuery } from "../store/services/stravaApi";
import { LoadingWithBackdrop } from "../components/LoadingWithBackdrop";
import { useLocation, useSearchParams } from "react-router-dom";
import { EmptySection } from "../components/EmptySection";

export const ActivitiesPage = () => {

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const { data: activities = [], isLoading } = useGetActivitiesQuery(queryParams.toString());

  if ( isLoading ) return <LoadingWithBackdrop />

  if ( activities.length === 0 ) return <EmptySection />


  return (
    <div className="flex flex-col gap-4 mt-8">
      <h2 className="text-xl px-4">Activities</h2>
      <Divider />
      <ul className="flex flex-col md:flex-row p-2 gap-2 justify-center">
        {
          activities.map(
            activity => <ActivityCard activity={activity} key={activity.id} />
          )
        }
      </ul>
    </div>

  )
}
