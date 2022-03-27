export default function Logo(props) {

  return (
    <div className={`bg-logo-blue text-white text-6xl rounded-xl py-4 px-2 font-chalk relative w-72 ${props.class}`} >
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
  );
}
