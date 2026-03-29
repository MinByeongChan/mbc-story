import { css } from '@styled-system/css';

const liStyles = css({
  listStyle: 'none',
  borderBottom: '1px solid token(colors.grey.300)',
  padding: '8px 0',
});

const snbStyles = css({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  gap: '4',
});

export const SnbS2Info = () => {
  return (
    <ul className={snbStyles}>
      <li className={liStyles}>
        <h4>
          <strong>S2 Info</strong>
        </h4>
      </li>
    </ul>
  );
};
