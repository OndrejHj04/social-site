import { nanoid } from "nanoid";
export default function Contribution(props) {
  const content = props.allContribution.map((item) => {
    return (
      <div className="flex border-4 mb-2" key={nanoid()}>
        <div className="flex flex-col ">
          <img src={require("./img.png")} alt="" className="my-2 mx-auto h-16 w-16 " />
          <p className="text-base font-semibold text-center">14:45 15.5.2021</p>
        </div>

        <div className="flex w-full flex-col">
          <div className="flex justify-between h-16 flex-wrap">
            <h1 className="text-2xl my-auto mx-3">Ondřej Hájek</h1>
          </div>

          <div>
            <h1 className="text-xl font-semibold">{item.title}</h1>
            <p>{item.content}</p>
          </div>
        </div>
      </div>
    );
  });

  return <>{content}</>;
}
