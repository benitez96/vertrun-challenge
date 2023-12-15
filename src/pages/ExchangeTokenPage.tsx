import { useEffect } from "react";
import { Navigate, useLocation, useParams, useSearchParams } from "react-router-dom"
import { useGetTokenMutation } from "../store/services/stravaApi";
import { useAppDispatch } from "../hooks";
import { setCredentials } from "../store/slices/auth";

const CLIENT_ID = import.meta.env.VITE_CLIENT_ID
const CLIENT_SECRET = import.meta.env.VITE_CLIENT_SECRET


export const ExchangeTokenPage = () => {

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const code = queryParams.get('code');

  const dispatch = useAppDispatch()

  const [getToken, { isLoading, isSuccess }] = useGetTokenMutation()

  const login = async () => {
    if (!code) return

    const params = new URLSearchParams()

    params.append('client_id', CLIENT_ID)
    params.append('client_secret', CLIENT_SECRET)
    params.append('code', code)
    params.append('grant_type', 'authorization_code')

    const user = await getToken(params).unwrap()
    dispatch(setCredentials(user))

  }

  useEffect(() => {
    login()
  }, [])

  if (isLoading) return <div>Loading...</div>
  if (isSuccess) return <Navigate to="/activities" />

}
