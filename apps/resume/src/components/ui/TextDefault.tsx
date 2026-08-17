import React, { CSSProperties, forwardRef, ReactNode } from 'react';
import styled from '@emotion/styled';
import { color as fontColor, fontSize, lineHeight as lh } from '../../utils/StyleTheme';

export interface TextDefaultProps {
  size?: string;
  color?: string;
  weight?: '300' | '500' | 'normal' | '700';
  lineHeight?: string;
  letterSpacing?: string;
  children?: ReactNode;
  style?: CSSProperties;
}

const Text = styled.span`
  font-size: ${(props: TextDefaultProps) => props.size};
  color: ${(props: TextDefaultProps) => props.color};
  font-weight: ${(props: TextDefaultProps) => props.weight};
  line-height: ${(props: TextDefaultProps) => props.lineHeight};
  letter-spacing: ${(props: TextDefaultProps) => props.letterSpacing}px;

  @media (min-width: 500px) and (max-width: 820px) {
    font-size: ${(props: TextDefaultProps) =>
      (props.size === 'h1' && fontSize.xxg) ||
      (props.size === 'xxg' && fontSize.xg) ||
      (props.size === 'xg' && fontSize.lg) ||
      (props.size === 'lg' && fontSize.lg) ||
      (props.size === 'md' && fontSize.md)};
  }
  @media (min-width: 0px) and (max-width: 499px) {
    font-size: ${(props: TextDefaultProps) =>
      (props.size === 'h1' && fontSize.xxg) ||
      (props.size === 'xxg' && fontSize.xg) ||
      (props.size === 'xg' && fontSize.lg) ||
      (props.size === 'lg' && fontSize.md) ||
      (props.size === 'md' && fontSize.sm) ||
      (props.size === 'sm' && fontSize.xs)};
  }
`;

const TextDefault = forwardRef<HTMLSpanElement, TextDefaultProps>(function TextDefault(
  { children, size, color, weight, lineHeight, letterSpacing, style }: TextDefaultProps,
  ref,
) {
  return (
    <Text
      ref={ref}
      size={size ? fontSize[`${size}`] : fontSize[`${fontSize.md}`]}
      color={color ? fontColor[`${color}`] : ''}
      weight={weight}
      lineHeight={lineHeight ? lh[`${lineHeight}`] : lh[`${lh.md}`]}
      letterSpacing={letterSpacing}
      style={style}>
      {children}
    </Text>
  );
});

export default TextDefault;
