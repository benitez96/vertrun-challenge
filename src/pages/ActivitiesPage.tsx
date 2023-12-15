import { useGetActivitiesQuery } from "../store/services/stravaApi";

export const ActivitiesPage = () => {


  const { data: activities = [], isLoading } = useGetActivitiesQuery();

  if ( isLoading ) return <h1>Loading...</h1>


  return (
    <>
      <h1>Activities Page</h1>
      <pre>
        { 
          JSON.stringify(activities, null, 2)
        }
      </pre>
    </>

  )
}
