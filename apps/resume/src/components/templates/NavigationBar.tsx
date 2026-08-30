import Link from 'next/link';
import { Container } from 'gocheok-project';
import { PORTFOLIO_URL } from '@/constants/resume';

const navItems = [
  { href: '/', label: 'Resume' },
  { href: PORTFOLIO_URL, label: 'Portfolio' },
  { href: 'https://github.com/MinByeongChan', label: 'GitHub' },
];

export const NavigationBar = () => (
  <nav className="sticky top-0 z-20 border-b border-grey-200 bg-white/90 backdrop-blur">
    <Container className="flex h-16 items-center justify-between" size="lg" padding="md">
      <Link className="text-lg font-bold tracking-tight text-grey-900" href="/">
        Min Byeongchan
      </Link>
      <ul className="flex items-center gap-1 sm:gap-3">
        {navItems.map(({ href, label }) => (
          <li key={href}>
            <Link
              className="rounded-xl px-3 py-2 text-sm font-medium text-grey-600 transition-colors hover:bg-grey-100 hover:text-grey-900"
              href={href}>
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  </nav>
);
