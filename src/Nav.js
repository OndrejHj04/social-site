import { NavLink, Outlet, Link } from "react-router-dom"
export default function Nav(){

  const active = ({isActive}) => {
    return {
      textDecoration: isActive ? 'underline' : 'none'
    }
    
  }

    return(
        <>
        <Outlet />
        <footer className="bg-logo-blue bottom-0 w-full flex py-4 text-xl items-center mt-auto">
        <NavLink style={active} className="mx-4 font-chalk text-white text-4xl w-full sm:w-min" to="/">Blig</NavLink>
        <NavLink style={active} className="mx-4 text-xl text-center"  to="/CreateAccount" >Create account</NavLink>
        <NavLink style={active} className="mx-4 text-xl text-center" to="/ForgottenPassword">Forgotten password</NavLink>
      </footer>
      
      </>
      
    )
}