import { Activity } from "../types";
import dayjs from "dayjs";



export const aggregateActivitiesByMonth = ( activities: Activity[], month: number ) => {

  const monthActivities = activities
    .filter( activity => dayjs(activity.start_date_local).month() === month)

  const aggregatedActivity = monthActivities.reduce( (acc, activity) => {

    const distance = acc.distance + activity.distance
    const elapsed_time = acc.elapsed_time + activity.elapsed_time
    const total_elevation_gain = acc.total_elevation_gain + activity.total_elevation_gain

    return { distance, elapsed_time, total_elevation_gain }

  }, { distance: 0, elapsed_time: 0, total_elevation_gain: 0 })

  return aggregatedActivity

}
