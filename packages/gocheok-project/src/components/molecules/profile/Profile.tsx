import { twMerge } from 'tailwind-merge';
import { Typography } from '../../atom/typography/Typography';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/all';

export const Profile = () => {
  gsap.registerPlugin(SplitText);

  useGSAP(() => {
    gsap.set('.split', { opacity: 1 });
    let split;
    SplitText.create('.split', {
      type: 'words,lines',
      linesClass: 'line',
      autoSplit: true,
      mask: 'lines',
      onSplit: (self) => {
        split = gsap.from(self.lines, {
          duration: 1,
          yPercent: 100,
          opacity: 0,
          stagger: 0.3,
          ease: 'expo.out',
        });
        return split;
      },
    });
  });

  return (
    <section className={twMerge('text-md h-[calc(100vh)] px-16 py-8 text-(--color-neutral-100)')}>
      <article className="mt-16">
        <Typography className="split text-2xl font-semibold">안녕하세요.</Typography>
        <div className="mt-2">
          <Typography className="split text-5xl font-semibold">민병찬 입니다.</Typography>
        </div>
        <div className="mt-4">
          <Typography className="split text-5xl font-semibold text-(--color-primary)">
            Frontend Developer
          </Typography>
        </div>
      </article>
      <article className="mt-8 max-w-xl text-sm">
        <div>
          <Typography className="split text-xs/4 font-semibold text-(--color-accent-200)">
            즉각적인 UI 개발에 매료되어 프론트엔드 개발을 시작하게되었습니다. 현재는 Coway 에서 대내
            및 대외 서비스를 개발하고 서비스를 유지보수하고 있습니다. 렌더링 이슈와 운영 버그들을
            잡으려고 노력하고 있습니다.
          </Typography>
        </div>
        <div className="mt-2">
          <Typography className="split text-xs/4 font-semibold text-(--color-accent-200)">
            쉬는날엔 운동을하거나, 정적인 환경에서 쉬며 자기개발하는 것을 선호합니다.
          </Typography>
        </div>
      </article>
    </section>
  );
};
