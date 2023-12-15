import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../hooks";



export const PrivateRoutes = () => {

  const { access_token } = useAppSelector(state => state.auth)
  const signed = !!access_token


  return signed ? <Outlet /> : <Navigate to="/" />

}
