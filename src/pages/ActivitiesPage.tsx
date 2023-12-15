import { useAppSelector } from "../hooks";

export const ActivitiesPage = () => {


  const athlete = useAppSelector(state => state.auth.athlete)


  return (
    <>
      <h1>Activities Page</h1>
      <pre>
        { 
          JSON.stringify(athlete, null, 2)
        }
      </pre>
    </>

  )
}
