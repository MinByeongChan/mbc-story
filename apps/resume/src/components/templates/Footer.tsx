import { Container } from 'gocheok-project';

const contactItems = [
  { href: 'https://github.com/MinByeongChan', label: 'GitHub' },
  { href: 'mailto:mbc0481@naver.com', label: 'mbc0481@naver.com' },
  { href: 'tel:01077020481', label: '010-7702-0481' },
];

export const Footer = () => (
  <footer className="mt-20 border-t border-grey-200 bg-white py-10 text-grey-600">
    <Container className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <p className="text-lg font-bold text-grey-900">Frontend Developer · Min Byeongchan</p>
        <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm">
          {contactItems.map(({ href, label }) => (
            <a className="transition-colors hover:text-blue-600" href={href} key={href}>
              {label}
            </a>
          ))}
        </div>
      </div>
      <small>© {new Date().getFullYear()} Min Byeongchan</small>
    </Container>
  </footer>
);
