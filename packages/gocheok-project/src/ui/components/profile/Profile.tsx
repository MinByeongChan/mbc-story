import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";
import { Typography } from "../typography/Typography";

type ProfileProps = PropsWithChildren;
export const Profile = ({ ...props }: ProfileProps) => {
  return (
    <section className={twMerge("text-md text-(--color-neutral-100)")}>
      <div>
        <Typography className="text-xs">My Name is...</Typography>
      </div>
      <div>
        <Typography className="text-8xl">Min ByeongChan</Typography>
      </div>
      <div className="max-w-xl mt-4 text-xs">
        <Typography className="text-xs/3">
          즉각적인 UI 개발에 매료되어 프론트엔드 개발을 시작하게되었습니다.
          webview 환경과 어드민 사이드, B2C 프로젝트에 대해 다수 경험이
          있습니다. 운동을 좋아하며 쉬는날엔 정적인 환경에서 쉬며 자기개발하는
          것을 선호합니다.
        </Typography>
      </div>
    </section>
  );
};
