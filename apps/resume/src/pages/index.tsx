import React from 'react';
import Image from 'next/image';
import { UnderlineAnchor } from 'gocheok-project';

import ResumeLayout from '@/layout/ResumeLayout';
import { Main } from '@/components/templates';
import { Experience, Introduction, OtherExperience, ResumeMeta, Skills } from '@/components';
import { SectionTitle } from '@/layout';

const contactLinks = [
  {
    href: 'tel:01077020481',
    icon: '/assets/icons/contact/phone.svg',
    label: '(+82) 010-7702-0481',
  },
  {
    href: 'mailto:mbc0481@naver.com',
    icon: '/assets/icons/contact/mail.svg',
    label: 'mbc0481@naver.com',
  },
  // {
  //   href: "https://mbc-dev-blog.vercel.app",
  //   icon: "/assets/icons/contact/website.svg",
  //   label: "mbc-dev-blog.vercel.app",
  // },
  {
    href: 'https://github.com/MinByeongChan',
    icon: '/assets/icons/contact/github.svg',
    label: 'MinByeongChan',
  },
] as const;

const ResumePage = () => (
  <Main meta={<ResumeMeta />}>
    <ResumeLayout>
      <div className="flex flex-col-reverse items-start justify-between gap-8 pb-10 sm:flex-row sm:items-center">
        <ul className="space-y-2">
          <li className="mb-3 ">
            <h1 className="tracking-widest">민병찬</h1>
          </li>
          <li>
            <p>Frontend Developer</p>
          </li>
          {contactLinks.map(({ href, icon, label }) => (
            <li key={href} className="m-0">
              <UnderlineAnchor
                href={href}
                className="inline-flex w-fit items-center gap-2 pb-1 text-sm leading-relaxed text-grey-800 after:from-blue-600 after:via-blue-600 after:to-blue-600 sm:text-sm">
                <Image aria-hidden alt="" height={20} src={icon} width={20} />
                {label}
              </UnderlineAnchor>
            </li>
          ))}
        </ul>
        <Image
          alt="민병찬 프로필"
          className="size-40 shrink-0 rounded-full border-4 border-blue-50 object-cover shadow-sm sm:size-52"
          height={208}
          src="/assets/images/portfolio/profile_circle_img.png"
          width={208}
        />
      </div>

      <Introduction />

      <SectionTitle title="Work Experiences." id="experience" />
      <Experience />

      <SectionTitle title="Other Experience." id="other-experience" />
      <OtherExperience />

      <SectionTitle title="Skills." id="skill" />
      <Skills />

      <SectionTitle title="Education." id="education" />
      <p>2020.02 성결대학교 정보통신공학부 졸업</p>
    </ResumeLayout>
  </Main>
);

export default ResumePage;
