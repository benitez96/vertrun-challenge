

export type Activity = {
  resource_state: number
  athlete: Athlete
  name: string
  distance: number
  moving_time: number
  elapsed_time: number
  total_elevation_gain: number
  type: string
  sport_type: string
  workout_type: any
  id: number
  start_date: string
  start_date_local: string
  timezone: string
  utc_offset: number
  location_city: any
  location_state: any
  location_country: any
  achievement_count: number
  kudos_count: number
  comment_count: number
  athlete_count: number
  photo_count: number
  map: Map
  trainer: boolean
  commute: boolean
  manual: boolean
  private: boolean
  visibility: string
  flagged: boolean
  gear_id: any
  start_latlng: any[]
  end_latlng: any[]
  average_speed: number
  max_speed: number
  has_heartrate: boolean
  heartrate_opt_out: boolean
  display_hide_heartrate_option: boolean
  upload_id: any
  external_id: any
  from_accepted_tag: boolean
  pr_count: number
  total_photo_count: number
  has_kudoed: boolean
}

export interface Map {
  id: string
  summary_polyline: string
  resource_state: number
}

export type Auth = {
  token_type: string | undefined
  expires_at: number | undefined
  expires_in: number | undefined
  refresh_token: string | undefined
  access_token: string | undefined
  athlete: Athlete | undefined
}

export type Athlete = {
  id: number
  username: string | undefined
  resource_state: number
  firstname: string
  lastname: string
  bio: string | undefined
  city: string | undefined
  state: string | undefined
  country: string | undefined
  sex: string
  premium: boolean
  summit: boolean
  created_at: string
  updated_at: string
  badge_type_id: number
  weight: string | undefined
  profile_medium: string
  profile: string
  friend: string | undefined
  follower: string | undefined
}


