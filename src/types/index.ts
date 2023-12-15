

export type Activity = {
  name: string
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
