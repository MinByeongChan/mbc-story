import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { StressButton } from "gocheok-project";

export const rootRoute = createRootRoute({
  component: () => (
    <div className="w-full h-[calc(100vh)] bg-(--color-bg-100)">
      <div className="p-2 flex gap-4">
        <StressButton className="w-[5rem] h-[1.5rem]">Home</StressButton>
        <Link to="/"></Link>
        {/* <Link to="/about">
          <StressButton>About</StressButton>
        </Link> */}
      </div>
      <Outlet />
      <TanStackRouterDevtools />
    </div>
  ),
});
