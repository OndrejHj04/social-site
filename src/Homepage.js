import Nav from "./Nav";

export default function Homepage() {
  return (
    <>
      <div className="pt-40 max-w-3xl mx-auto flex flex-wrap px-2" id="wrap">
        <div className="mx-auto text-center">
          <div className="bg-logo-blue text-white text-6xl rounded-xl py-4 px-2 font-chalk relative">
            <h1>Blig-b00k</h1>
            <div className="absolute rotate-90" id="smile">
              )
            </div>
            <div className="absolute text-5xl" id="left-dot">
              .
            </div>
            <div className="absolute text-5xl" id="right-dot">
              .
            </div>
          </div>
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
