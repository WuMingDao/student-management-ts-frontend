import { useNavigate } from "react-router";

export const Component = function Register() {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center h-screen">
      <form className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 shadow-2xl shadow-blue-300">
        <fieldset className="fieldset w-full">
          <h2 className="text-center text-2xl font-black p-2">
            Student Management
          </h2>

          <label className="label">Email</label>
          <input
            type="email"
            className="input validator"
            placeholder="Email"
            required
          />
          <p className="validator-hint hidden">Required</p>
        </fieldset>

        <label className="fieldset">
          <span className="label">Password</span>
          <input
            type="password"
            className="input validator"
            placeholder="Password"
            required
          />
          <span className="validator-hint hidden">Required</span>
        </label>

        <button className="btn btn-neutral mt-4" type="submit">
          Register
        </button>
        <button
          className="btn btn-ghost mt-1"
          type="reset"
          onClick={() => navigate("/auth/login")}
        >
          Login
        </button>
      </form>
    </div>
  );
};
