import { useState, useEffect } from "react";
import { NavLink, Outlet, Link, useNavigate } from "react-router-dom";
export default function Nav() {
  const active = ({ isActive }) => {
    return {
      textDecoration: isActive ? "underline" : "none",
    };
  };

  const [loged, setLoged] = useState()

  const navigation = useNavigate()
  
  useEffect(()=>{
    if(window.location.href.includes('user')){
      setLoged(true)
    }
    else{
      setLoged(false)
    }
  },[navigation])

  return (
    <>
      <footer className="bg-logo-blue bottom-0 w-full flex py-4 text-xl items-center mt-auto">
        <NavLink className="mx-4 font-chalk text-white text-4xl" to="/">
          Blig
        </NavLink>

        {!loged && (
          <div className="flex flex-col sm:flex-row ml-auto sm:m-0">
            <NavLink style={active} className="mx-4 text-xl text-center" to="/guest/CreateAccount">
              Create account
            </NavLink>
            <NavLink style={active} className="mx-4 text-xl text-center" to="/guest/ForgottenPassword">
              Forgotten password
            </NavLink>
          </div>
        )}

        {loged && (
          <div className="flex flex-col sm:flex-row ml-auto sm:m-0">
            <NavLink style={active} className="mx-4 text-xl text-center" to="/user/Profile">
              Profile
            </NavLink>
            <NavLink style={active} className="mx-4 text-xl text-center" to="/user/Settings">
              Settings
            </NavLink>
          </div>
        )}
      </footer>
      <Outlet />
    </>
  );
}
