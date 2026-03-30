import React from 'react';

import styled from '@emotion/styled';
import Link from 'next/link';

import { color, spacing } from '@/utils/StyleTheme';
import TextDefault from '@/components/ui/TextDefault';
import { useRouter } from 'next/router';

const NavLayout = styled.nav({
  gridColumn: 'span 12',
  position: 'sticky',
  top: '0',
  width: '100%',
  borderBottom: `1px solid ${color.darkWhite}`,
  boxShadow: '0 0 9px 3px rgb(41 41 41 / 25%)',
  backgroundColor: `${color.white}`,
  opacity: '0.9',
  zIndex: 1,
});

const NavContainer = styled.div({
  height: '100%',
  margin: '0 40px',
  '@container section-container (min-width: 0px) and (max-width: 768px)': {
    margin: '0 20px',
  },
});

const NavUl = styled.ul(() => ({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  height: '100%',
  gap: spacing(3),
  margin: '0',
  padding: 0,
}));

const NavLi = styled.li<{ initHeight: string }>(
  {
    position: 'relative',
    height: '100%',
    lineHeight: '68px',
    transition: '0.1s linear',
    listStyle: 'none',
    '&::after': {
      content: `""`,
      position: 'absolute',
      left: '0',
      bottom: '0',
      width: '100%',
      backgroundColor: color.darkslategray,
      transition: '0.1s linear',
    },
    '&:hover::after': {
      opacity: '0.7',
      height: '4px',
    },
  },
  (props) => ({
    '&::after': {
      height: props.initHeight ?? '0px',
    },
  }),
);
const StyledLink = styled(Link)({
  display: 'inline-block',
  height: '100%',
});

export const NavigationBar = () => {
  const router = useRouter();
  return (
    <NavLayout>
      <NavContainer>
        <NavUl>
          <NavLi initHeight={router.pathname === '/' ? '4px' : '0px'}>
            <StyledLink href="/">
              <TextDefault>Blog</TextDefault>
            </StyledLink>
          </NavLi>
          <NavLi initHeight={router.pathname === '/tags' ? '4px' : '0px'}>
            <StyledLink href="/tags">
              <TextDefault>Tags</TextDefault>
            </StyledLink>
          </NavLi>
          <NavLi initHeight={router.pathname === '/portfolio' ? '4px' : '0px'}>
            <StyledLink href="/portfolio">
              <TextDefault>Portfolio</TextDefault>
            </StyledLink>
          </NavLi>
          <NavLi initHeight={router.pathname === '/about' ? '4px' : '0px'}>
            <StyledLink href="/about">
              <TextDefault>About</TextDefault>
            </StyledLink>
          </NavLi>
        </NavUl>
      </NavContainer>
    </NavLayout>
  );
};
