export default function ScrollPage() {
  return (
    <div className=" w-full max-w-scroll-page mx-auto my-5 flex justify-between flex-wrap">
      <div className="wrap:w-side-box p-2 border-4 order-1 w-full">
        <h1 className="font-semibold">You may know...</h1>

        <div className="flex wrap:flex-col flex-row flex-wrap">
          <div className="flex my-2 wrap:w-auto w-64">
            <img src={require("./img.png")} width="50" />
            <div className="flex w-full flex-col ml-2 justify-between">
              <h1 className="text-center">Ondřej Hájek</h1>
              <div className=" mx-auto px-2 rounded-md bg-logo-blue">
                Follow
              </div>
            </div>
          </div>

          <div className="flex my-2 wrap:w-auto w-64">
            <img src={require("./img.png")} width="50" />
            <div className="flex w-full flex-col ml-2 justify-between">
              <h1 className="text-center">Ondřej Hájek</h1>
              <div className=" mx-auto px-2 rounded-md bg-logo-blue">
                Follow
              </div>
            </div>
          </div>

          <div className="flex my-2 wrap:w-auto w-64">
            <img src={require("./img.png")} width="50" />
            <div className="flex w-full flex-col ml-2 justify-between">
              <h1 className="text-center">Ondřej Hájek</h1>
              <div className=" mx-auto px-2 rounded-md bg-logo-blue">
                Follow
              </div>
            </div>
          </div>

          <div className="flex my-2 wrap:w-auto w-64">
            <img src={require("./img.png")} width="50" />
            <div className="flex w-full flex-col ml-2 justify-between">
              <h1 className="text-center">Ondřej Hájek</h1>
              <div className=" mx-auto px-2 rounded-md bg-logo-blue">
                Follow
              </div>
            </div>
          </div>

          <div className="flex my-2 wrap:w-auto w-64">
            <img src={require("./img.png")} width="50" />
            <div className="flex w-full flex-col ml-2 justify-between">
              <h1 className="text-center">Ondřej Hájek</h1>
              <div className=" mx-auto px-2 rounded-md bg-logo-blue">
                Follow
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="wrap:w-main-box w-full flex flex-col p-2 border-4 order-3 wrap:order-2">
        <div className="flex flex-col w-full">
          <label className="text-lg">Share how do you feel!</label>
          <textarea className="w-full resize-none h-28 outline-none bg-logo-blue text-white p-1"></textarea>
          <div className="my-2">
            <button className="bg-logo-blue p-1 rounded-lg text-xl ml-auto">
              Post!
            </button>
          </div>
        </div>

        <div className="flex p-1 flex-col my-1">
          <div className="flex flex-row justify-between w-full">
            <div className="flex">
              <img src={require("./img.png")} width="50" className="m-auto"/>
              <h1 className="text-2xl my-auto mx-3">Ondřej Hájek</h1>
            </div>

            <p className="my-auto mx-3">10.3. 2012</p>
          </div>
          <div>
            <h1 className="text-xl font-semibold">asfadsas</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              omnis voluptatem consectetur consequuntur optio qui eligendi culpa
              ipsum temporibus eos tempora error, fuga corrupti ex nulla
              praesentium incidunt beatae et!
            </p>
          </div>
        </div>

        <div className="flex p-1 flex-col my-1">
          <div className="flex flex-row justify-between w-full">
            <div className="flex">
              <img src={require("./img.png")} width="50" className="m-auto"/>
              <h1 className="text-2xl my-auto mx-3">Ondřej Hájek</h1>
            </div>

            <p className="my-auto mx-3">10.3. 2012</p>
          </div>
          <div>
            <h1 className="text-xl font-semibold">asfadsas</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              omnis voluptatem consectetur consequuntur optio qui eligendi culpa
              ipsum temporibus eos tempora error, fuga corrupti ex nulla
              praesentium incidunt beatae et!
            </p>
          </div>
        </div>

        <div className="flex p-1 flex-col my-1">
          <div className="flex flex-row justify-between w-full">
            <div className="flex">
              <img src={require("./img.png")} width="50" className="m-auto"/>
              <h1 className="text-2xl my-auto mx-3">Ondřej Hájek</h1>
            </div>

            <p className="my-auto mx-3">10.3. 2012</p>
          </div>
          <div>
            <h1 className="text-xl font-semibold">asfadsas</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              omnis voluptatem consectetur consequuntur optio qui eligendi culpa
              ipsum temporibus eos tempora error, fuga corrupti ex nulla
              praesentium incidunt beatae et!
            </p>
          </div>
        </div>
      </div>

      <div className="wrap:w-side-box border-4 p-2 order-2 wrap:order-3 w-full">
        <h1 className="font-semibold">Groups...</h1>

        <div className="flex wrap:flex-col flex-row flex-wrap">
          <div className="flex my-2 wrap:w-auto w-64">
            <img src={require("./img.png")} width="50" />
            <div className="flex w-full flex-col ml-2 justify-between">
              <h1 className="text-center">Murdria</h1>
              <div className=" mx-auto px-2 rounded-md bg-logo-blue">Join</div>
            </div>
          </div>

          <div className="flex my-2 wrap:w-auto w-64">
            <img src={require("./img.png")} width="50" />
            <div className="flex w-full flex-col ml-2 justify-between">
              <h1 className="text-center">Murdria</h1>
              <div className=" mx-auto px-2 rounded-md bg-logo-blue">Join</div>
            </div>
          </div>

          <div className="flex my-2 wrap:w-auto w-64">
            <img src={require("./img.png")} width="50" />
            <div className="flex w-full flex-col ml-2 justify-between">
              <h1 className="text-center">Murdria</h1>
              <div className=" mx-auto px-2 rounded-md bg-logo-blue">Join</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}