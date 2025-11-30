import { css } from '@styled-system/css';

const copyrightStyles = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
  fontSize: '12px',
  color: 'token(colors.grey.500)',
  textAlign: 'center',
});

export const Copyright = () => {
  return (
    <footer className={copyrightStyles}>
      <span>Copyright © 2025.</span> <span> MBC.</span> <span> All right reserved.</span>
    </footer>
  );
};
