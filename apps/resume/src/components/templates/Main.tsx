import React, { PropsWithChildren, ReactNode } from "react";
import { Footer, NavigationBar } from "@/components/templates";

interface MainProps extends PropsWithChildren {
  meta: ReactNode;
  useNav?: boolean;
  useFooter?: boolean;
}

const Main = ({
  meta,
  useNav = true,
  useFooter = true,
  children,
}: MainProps) => (
  <div className="min-h-screen bg-grey-50 text-grey-900">
    {meta}
    {useNav && <NavigationBar />}
    {children}
    {useFooter && <Footer />}
  </div>
);

export { Main };
