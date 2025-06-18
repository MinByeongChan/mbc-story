import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "gocheok-project/src/tailwind.css";
import { createRouter, RouterProvider } from "@tanstack/react-router";
import { rootRoute } from "./routes/root.tsx";
import { indexRoute } from "./routes/index.tsx";

const routeTree = rootRoute.addChildren([indexRoute]);

const router = createRouter({ routeTree });

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
