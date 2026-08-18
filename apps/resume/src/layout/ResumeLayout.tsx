import React, { PropsWithChildren } from "react";
import { Container } from "gocheok-project";

type ResumeLayoutProps = PropsWithChildren;

const ResumeLayout = ({ children }: ResumeLayoutProps) => (
  <main className="py-8 sm:py-12">
    <Container size="lg" padding="md">
      <div className="grid grid-cols-12 gap-4 sm:gap-6">
        <article className="col-span-12 min-w-0 sm:col-span-10 sm:col-start-2 xl:col-span-8 xl:col-start-3">
          {children}
        </article>
      </div>
    </Container>
  </main>
);

export default ResumeLayout;
