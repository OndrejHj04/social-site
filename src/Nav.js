import { NavLink, Outlet, Link } from "react-router-dom"
export default function Nav(){

  const active = ({isActive}) => {
    return {
      textDecoration: isActive ? 'underline' : 'none'
    }
    
  }

    return(
        <>
        <footer className="bg-logo-blue bottom-0 w-full flex py-4 text-xl items-center mt-auto">
        <NavLink style={active} className="mx-4 font-chalk text-white text-4xl" to="/">Blig</NavLink>
        <div className="flex flex-col sm:flex-row ml-auto sm:m-0">
        <NavLink style={active} className="mx-4 text-xl text-center"  to="/CreateAccount" >Create account</NavLink>
        <NavLink style={active} className="mx-4 text-xl text-center" to="/ForgottenPassword">Forgotten password</NavLink>
        </div>

      </footer>
        <Outlet />
      </>
      
    )
}