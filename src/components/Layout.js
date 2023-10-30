import { NavLink, Outlet } from "react-router-dom";
import { Suspense } from "react";

const Layout = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/dogs">Dogs</NavLink>
        </li>
      </ul>
      <Suspense fallback={<div>Loading....</div>}><main>
        <Outlet />
      </main></Suspense>
    </div>
  );
};

export default Layout