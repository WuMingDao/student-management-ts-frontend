import { useNavigate } from "react-router";

export const Component = function NotFound() {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="grid grid-rows-2 gap-4">
          <h1 className="text-center text-red-600 text-4xl font-mono">
            404 Not Found :(
          </h1>

          <div className="text-center">
            <button className="btn btn-primary" onClick={() => navigate("/")}>
              Back Home
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
