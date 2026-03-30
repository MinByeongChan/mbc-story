import { color, fontSize, fontWeight } from '@/utils/StyleTheme';
import styled from '@emotion/styled';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpen, faPhoneSquareAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';

const BottomWrapper = styled.footer`
  grid-column: span 12;
  background-color: ${color.black};
  padding: 60px 30px;
  color: ${color.white};
  a {
    color: ${color.orange};
    font-weight: ${fontWeight.bold};
  }
  @media screen and (min-width: 0px) and (max-width: 480px) {
    padding: 40px 20px;
  }
`;
const BottomContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const BottomContentTitle = styled.div`
  margin-bottom: 20px;
  .footer-title {
    margin: 0 0 10px 0;
    font-size: ${fontSize.xg};
    font-weight: ${fontWeight.bold};
  }
  .footer-subtitle {
    margin: 0;
    font-size: ${fontSize.sm};
  }
`;

const BottomContentMid = styled.div`
  .mid-container {
    display: flex;
    align-items: center;
    margin: 10px 0;
  }
  .left-img {
    width: 22px;
    height: auto;
  }
  a {
    font-size: ${fontSize.sm};
    margin-left: 15px;
  }
`;

const BottomContentEnd = styled.div`
  margin-top: 50px;
  text-align: center;
`;

export const Footer = () => {
  return (
    <BottomWrapper>
      <BottomContainer>
        <BottomContentTitle>
          <p className="footer-title">Byeong Chan`s 기술 블로그</p>
          <p className="footer-subtitle">개발했던 것을 정리하기 위한 기술 블로그 입니다.</p>
        </BottomContentTitle>

        <BottomContentMid>
          <div className="mid-container">
            <FontAwesomeIcon className="left-img" icon={faGithubSquare} inverse />
            <a href="https://github.com/MinByeongChan">Byeong Chan</a>
          </div>
          <div className="mid-container">
            <FontAwesomeIcon className="left-img" icon={faEnvelopeOpen} inverse />
            <a href="mailto:mbc0481@naver.com">mbc0481@naver.com</a>
          </div>
          <div className="mid-container">
            <FontAwesomeIcon className="left-img" icon={faPhoneSquareAlt} inverse />
            <a href="tel:01077020481">010-7702-0481</a>
          </div>
        </BottomContentMid>

        <BottomContentEnd>
          <span>© Copyright {new Date().getFullYear()} Powered with</span>
          <a href="https://github.com/MinByeongChan"> Byeong Chan</a>
        </BottomContentEnd>
      </BottomContainer>
    </BottomWrapper>
  );
};
