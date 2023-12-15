import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { Activity, Auth } from '../../types'
import { RootState } from '..'

export const stravaApi = createApi({
  reducerPath: 'stravaApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: 'https://www.strava.com/',
    prepareHeaders: (headers, { getState }) => {
      const tokenType = (getState() as RootState).auth.token_type
      const token = (getState() as RootState).auth.access_token

      if (token) {
        headers.set('authorization', `${tokenType} ${token}`)
      }

      return headers
    },
  }),
  endpoints: (builder) => ({
    getToken: builder.mutation<Auth, URLSearchParams>({
      query: (params: URLSearchParams) => ({
        url: `oauth/token?${params}`,
        method: 'POST'
      })
    }),
    getActivities: builder.query<Activity[], string | void>({
      query: (params) => `api/v3/athlete/activities?${!!params ? params: ''}`,
    }),
  }),
})

export const { useGetActivitiesQuery, useGetTokenMutation } = stravaApi
