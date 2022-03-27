import Nav from "./Nav";
import Logo from './Logo'
export default function Homepage() {
  return (
    <>
      <div className="pt-40 max-w-3xl mx-auto flex flex-wrap px-2" id="wrap">
        <div className="mx-auto text-center">
          <Logo />
          <p className="text-lg">Place for all bligumakers</p>
        </div>

        <div className="mx-auto">
          <form className="flex flex-col  p-4 text-xl border-4">
            <input type="text" className="p-1 border-2 my-2" placeholder="Name"/>

            <input type="text" className="p-1 border-2 my-2" placeholder="Password"/>
            <button className="bg-logo-blue my-2 p-1">Login</button>
          </form>
        </div>
      </div>
      <Nav />
    </>
  );
}
