import { Link, Outlet } from "react-router-dom"
export default function Nav(){

    return(
        <>
        <Outlet />
        <footer className="bg-logo-blue absolute bottom-0 w-full flex py-4 text-xl items-center">
        <Link className="mx-4 font-chalk text-white text-4xl w-full sm:w-min" to="/">Blig</Link>
        <Link className="mx-4 text-xl text-center" to="/CreateAccount">Create account</Link>
        <Link className="mx-4 text-xl text-center" to="/ForgottenPassword">Forgotten password</Link>
      </footer>
      
      </>
      
    )
}