import { Outlet } from "react-router";
import NavBar from "./NavBar";

export const Component = function Home() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};
