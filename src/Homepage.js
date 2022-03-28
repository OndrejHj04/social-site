import Nav from "./Nav";
import Logo from './Logo'
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Homepage() {

  const [login, setLogin] = useState({name: "", password: ""})

  function change(event){
    setLogin(oldVal=>{
      return {
        ...oldVal,
        [event.target.name]: event.target.value
      }
    })
  }
 
  console.log(login)

  return (
    <>
      <Nav />

      <div className="pt-40 max-w-3xl mx-auto flex flex-wrap px-2" id="wrap">
        <div className="mx-auto text-center">
          <Logo />
          <p className="text-lg">Place for all bligumakers</p>
        </div>

        <div className="mx-auto">
          <form className="flex flex-col  p-4 text-xl">
            <input type="text" className="p-1 border-2 my-2" placeholder="Name" name="name" onChange={change}/>

            <input type="text" className="p-1 border-2 my-2" placeholder="Password" name="password" onChange={change}/>
            <button className=" p-2 bg-logo-blue text-white rounded-2xl mx-auto my-2 active:bg-dark-logo-blue">
              Login
          </button>
          </form>
        </div>
      </div>
    </>
  );
}
