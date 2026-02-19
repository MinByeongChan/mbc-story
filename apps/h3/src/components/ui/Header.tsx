import { css } from '@styled-system/css';

const headerStyles = css({
  display: 'flex',
  alignItems: 'center',
  height: '60px',
  padding: '0 16px',
  borderBottom: '1px solid token(colors.grey.300)',
});

export const Header = () => {
  return (
    <header className={headerStyles}>
      <h2>VWorld + H3 WebGL 예제</h2>
    </header>
  );
};
