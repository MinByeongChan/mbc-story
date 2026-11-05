"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap, { ScrollTrigger } from "gsap/all";
import { twMerge } from "tailwind-merge";
import { metaInfo } from "@/app/constant";

interface ContactLink {
  label: string;
  value: string;
  href: string;
  external: boolean;
}

const contactLinks: ContactLink[] = [
  {
    label: "Email",
    value: metaInfo.email,
    href: `mailto:${metaInfo.email}`,
    external: false,
  },
  {
    label: "GitHub",
    value: "github.com/minbyeongchan",
    href: metaInfo.github,
    external: true,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/병찬-민-2b2414200",
    href: metaInfo.linkedin,
    external: true,
  },
  {
    label: "Instagram",
    value: "instagram.com/byongchan",
    href: metaInfo.instagram,
    external: true,
  },
];

export const ContactMe = () => {
  const sectionRef = useRef<HTMLElement>(null);
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(".contact-reveal", {
          y: 24,
          opacity: 0,
          duration: 0.7,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            once: true,
          },
        });
      });

      return () => mm.revert();
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      aria-labelledby="contact-heading"
      className="mb-32 text-(--color-neutral-100) sm:mb-40"
    >
      <header className="contact-reveal max-w-2xl">
        <h2
          id="contact-heading"
          className="text-3xl font-bold text-white sm:text-5xl"
        >
          Contact Me
        </h2>
        <p className="mt-5 text-base break-keep text-neutral-300 leading-relaxed sm:text-lg">
          저에 대해 더 궁금하거나 함께 이야기하고 싶다면 편하게 연락 주세요.
          이메일과 아래 채널 모두 열려 있습니다.
        </p>
      </header>

      <ul className="mt-14 border-b border-neutral-800">
        {contactLinks.map((link) => (
          <li key={link.label} className="contact-reveal border-t border-neutral-800">
            <a
              href={link.href}
              {...(link.external && {
                target: "_blank",
                rel: "noopener noreferrer",
              })}
              className={twMerge(
                "group grid grid-cols-[minmax(0,1fr)_auto] items-center gap-x-6 gap-y-1 py-6",
                "sm:grid-cols-[10rem_minmax(0,1fr)_auto]",
                "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-(--color-primary)",
              )}
            >
              <span className="text-sm font-semibold text-neutral-400">
                {link.label}
              </span>
              <span
                className={twMerge(
                  "col-start-1 row-start-2 truncate text-lg text-neutral-200 transition-colors duration-200",
                  "group-hover:text-white sm:col-start-2 sm:row-start-1 sm:text-2xl",
                )}
              >
                {link.value}
              </span>
              <span
                aria-hidden="true"
                className={twMerge(
                  "col-start-2 row-span-2 text-xl text-neutral-500 transition-transform duration-200",
                  "group-hover:translate-x-1 group-hover:text-(--color-primary)",
                  "sm:col-start-3 sm:row-span-1",
                )}
              >
                {link.external ? "↗" : "→"}
              </span>
              {link.external && <span className="sr-only">(새 창에서 열림)</span>}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};
