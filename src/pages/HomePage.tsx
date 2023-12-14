import { useGetActivitiesQuery } from "../store/services/stravaApi"


export const HomePage = () => {

  const { data } = useGetActivitiesQuery(undefined)

  return (
    <>
      <h1>Home Page</h1>
      <pre>
        {
          JSON.stringify(data)
        }
      </pre>
    </>

  )
}
