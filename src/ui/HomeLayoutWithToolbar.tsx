import { Outlet, useLocation } from "react-router";

export const Component = function HomeLayoutWithToolbar() {
  const { pathname } = useLocation();

  return (
    <>
      <div className="grid grid-cols-4 gap-4">
        {/* Badge */}
        <div className="col-span-1 my-auto text-center">
          <div className="badge badge-info gap-2 mx-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-4 w-4 stroke-current transition-transform transform hover:scale-150"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
            info
          </div>

          <div className="badge badge-info gap-2 mx-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-4 w-4 stroke-current transition-transform transform hover:scale-150"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
            info
          </div>

          <div className="badge badge-info gap-2 mx-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-4 w-4 stroke-current transition-transform transform hover:scale-150"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
            info
          </div>
          <div className="badge badge-info gap-2 mx-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-4 w-4 stroke-current transition-transform transform hover:scale-150"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
            info
          </div>
        </div>

        {/* Search */}
        <div className="col-span-2 ">
          <label className="input input-bordered flex items-center gap-2 w-1/2 mx-auto">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input type="search" className="grow" placeholder="Search" />
            <kbd className="kbd kbd-sm">⌘</kbd>
            <kbd className="kbd kbd-sm">K</kbd>
          </label>
        </div>

        {/* Button */}
        <div className="col-span-1 text-center">
          <button className="btn btn-primary">
            {pathname === "/home/student" ? "Create Student" : "Upload Score"}
          </button>
        </div>
      </div>

      <Outlet />
    </>
  );
};
