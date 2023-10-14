// import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
export default function Profile() {
  const userFromRedux = useSelector((state) => state.user);
  const { currentUser } = userFromRedux.user;

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">Profile</h1>
      <form className="flex flex-col gap-4">
        <img
          src={currentUser.rest.avator}
          alt="profile"
          className="rounded-full w-24 h-24 object-cover self-center"
        />
        <input
          type="text"
          placeholder="username"
          className="rounded-lg p-3"
          id="username"
        />
        <input
          type="email"
          placeholder="email"
          className="rounded-lg p-3 "
          id="email"
        />
        <input
          type="password"
          placeholder="password"
          className="rounded-lg p-3 "
          id="password"
        />
        <button className="bg-brightRedLight text-white p-3 uppercase rounded-lg hover:opacity-95 disabled:opacity-80">
          Update
        </button>
      </form>
      <div className="flex justify-between mt-5">
        <span className="text-red-700 cursor-pointer">Delete account</span>
        <span className="text-red-700 cursor-pointer">Sign out</span>
      </div>
    </div>
  );
}
