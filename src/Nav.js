import { useState, useEffect} from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";


export default function Nav(props) {
  const active = ({ isActive }) => {
    return {
      textDecoration: isActive ? "underline" : "none",
    };
  };
  const [loged, setLoged] = useState();  
  const navigation = useNavigate();


  useEffect(() => {
    if (window.location.href.includes("user")) {
      setLoged(true);
    } else {
      setLoged(false);
    }
  }, [navigation]);


  
  
  return (
    <>
      <footer className="bg-logo-blue w-full flex py-4 text-xl items-center mt-auto">
        {!loged && (
          <>
            <NavLink className="mx-4 font-chalk text-white text-4xl" to="/">
              Blig
            </NavLink>
            <div className="flex flex-col sm:flex-row ml-auto sm:m-0">
              <NavLink style={active} className="mx-4 text-xl text-center" to="/guest/CreateAccount">
                Create account
              </NavLink>
              <NavLink style={active} className="mx-4 text-xl text-center" to="/guest/ForgottenPassword">
                Forgotten password
              </NavLink>
            </div>
          </>
        )}

        {loged && (
          <>
            <NavLink className="mx-4 font-chalk text-white text-4xl" to="/user/ScrollPage">
              Blig
            </NavLink>
            <div className="flex flex-col sm:flex-row ml-auto sm:m-0">
              <NavLink style={active} className="mx-4 text-xl text-center" to="/user/Profile">
              Profile
              </NavLink>
              <NavLink style={active} className="mx-4 text-xl text-center" to="/user/Settings">
                Settings
              </NavLink>
              <NavLink style={active} className="mx-4 text-xl text-center" to="/" onClick={props.removeActive}>
                Log out
              </NavLink>
            </div>
          </>
        )}
      </footer>

      <Outlet />
    </>
  );
}
