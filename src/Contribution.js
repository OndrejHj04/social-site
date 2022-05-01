export default function Contribution(props) {
  const content = props.messages.map((item) => {
    return (
      <div className="flex border-4 mb-2 relative group w-full" key={item.id}>
        <p className="hidden">{item.id}</p>
        <img src={require("./trash.png")} onClick={props.click} width="30" height="30" className="absolute right-2 top-2 opacity-0 group-hover:opacity-100" alt="" />
        <div className="flex flex-col ">
          <img src={require("./img.png")} alt="" className="my-2 mx-auto h-16 w-16 " />
          <p className="text-base font-semibold text-center">{item.date}</p>
        </div>

        <div className="flex w-full flex-col min-w-0 break-words">
          <div className="flex justify-between h-16 flex-wrap">
            <h1 className="text-2xl my-auto mx-3">{item.user}</h1>
          </div>

          <div className="p-2">
            <h1 className="text-xl font-semibold">{item.title}</h1>
            <p>{item.text}</p>
          </div>
        </div>
      </div>
    );
  });

  return <>{content}</>;
}

