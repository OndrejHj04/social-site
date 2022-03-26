export default function homepage() {
  return (
    <div className="mx-auto w-96 my-10">
      <form className="flex flex-col w-full bg-red-600 p-5">
        <label>Username or email:</label>
        <input type="text" />

        <label>Password:</label>
        <input type="password" />

        <button className="mt-2 bg-gray-600">submit</button>
      </form>
    </div>
  );
}
