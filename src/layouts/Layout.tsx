import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  Link,
} from "@nextui-org/react";

import { useAppSelector, useAppDispatch } from "../hooks";
import { logout } from "../store/slices/auth";
import { useNavigate } from "react-router-dom";
import { FC, PropsWithChildren } from "react";
import { ThemeSwitch } from "../components/ThemeSwitch";

const CLIENT_ID = import.meta.env.VITE_CLIENT_ID
const REDIRECT_URI = import.meta.env.VITE_AUTH_REDIRECT_HOST_URI + '/exchange-token'
const authURL = `http://www.strava.com/oauth/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${REDIRECT_URI}&approval_prompt=force&scope=read,activity:read`

export const Layout: FC<PropsWithChildren> = ({ children }) => {


  const { athlete } = useAppSelector(state => state.auth)

  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handleLogin = () => {
    window.location.href = authURL
  }

  const handleLogout = () => {
    dispatch(logout())
    navigate('/')
  }

  return (
    <>
      <Navbar
        shouldHideOnScroll 
        maxWidth="full"
        classNames={{
          wrapper: 'px-3',
        }}
      >
        <NavbarBrand>
          <Link href='/' className="font-bold text-inherit">
            <h1 className="text-2xl md:text-3xl font-bold">Vert Challenge</h1>
          </Link>
        </NavbarBrand>
        <NavbarContent justify="end" className="hidden sm:flex">
          {
            !!athlete 
              ? 
              <NavbarItem className="flex items-center gap-4">
                <ThemeSwitch />
                <h5 className="">Hi, {athlete.firstname}</h5>
                <Button 
                  color="primary" 
                  variant="ghost" 
                  onClick={handleLogout}
                >
                  Log out
                </Button>
              </NavbarItem>
              :
              <NavbarItem>
                <Button 
                  color="primary" 
                  onClick={handleLogin}
                  variant="shadow"
                >
                  Log in
                </Button>
              </NavbarItem>
          }
        </NavbarContent>
      </Navbar>
      <main className="container mx-auto">
        { children }
      </main>
    </>
    
  )
}
