import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { Activity } from '../../types'

export const stravaApi = createApi({
  reducerPath: 'stravaApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: 'https://www.strava.com/api/v3/',
    prepareHeaders: ( headers ) =>
      headers.set('Authorization', `Bearer ${import.meta.env.VITE_STRAVA_ACCESS_TOKEN}`)
  }),
  endpoints: (builder) => ({
    getActivities: builder.query({
      query: () => `athlete/activities`,
    }),
  }),
})

export const { useGetActivitiesQuery } = stravaApi
