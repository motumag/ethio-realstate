import { Link } from "react-router-dom";
export default function SignUp() {
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold">Sign Up</h1>
      <form className="flex flex-col gap-4 my-7">
        <input
          type="text"
          placeholder="Username"
          className="border p-3 rounded-lg"
          id="username"
        />
        <input
          type="email"
          placeholder="Email"
          className="border p-3 rounded-lg focus:outline-none"
          id="email"
        />
        <input
          type="Password"
          placeholder="password"
          className="border p-3 rounded-lg focus:outline-none"
          id="password"
        />
        <button className="bg-slate-700 text-white p-3 hover:opacity-90 rounded-lg uppercase disabled:opacity-80">
          sign up
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Have an account?</p>
        <Link to={"/sign-in"}>
          <span className="text-blue-700">Sign In</span>
        </Link>
      </div>
    </div>
  );
}
