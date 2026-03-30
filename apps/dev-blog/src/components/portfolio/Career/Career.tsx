import {
  CareerContentTitle,
  CareerBackGroundContainer,
  CareerFlexContainer,
  CareerLogoBox,
  CareerCardContainer,
  CareerCardItem,
  CareerLogoRemarkStack,
} from '@/components/portfolio/Career';
import React, { useCallback, useMemo, useState } from 'react';
import Image from 'next/image';
import { Box, Typography } from '@mui/material';
import dayjs from 'dayjs';
import { CareerServiceInfo } from '@/components/portfolio/Career/CareerServiceInfo';
import { ModalContent, PortfolioDetails } from '@/types';
import { CareerDetailsModal } from '@/components/portfolio/Career/CareerDetailsModal/CareerDetailsModal';

interface CareerProps {
  careerDetails: PortfolioDetails[];
}

export const Career = ({ careerDetails }: CareerProps) => {
  const [modalContent, setModalContent] = useState<ModalContent>({
    isOpen: false,
    content: '',
  });

  const cowayCareer = useMemo(() => {
    const target = dayjs('2021-09-01');
    const yearDiff = dayjs().diff(target, 'year');
    const monthDiff = dayjs().diff(target.add(yearDiff, 'year'), 'month');
    return { yearDiff, monthDiff };
  }, []);

  const ksnetCareer = useMemo(() => {
    const from = dayjs('2020-02-01');
    const to = dayjs('2021-09-01');
    const yearDiff = to.diff(from, 'year');
    const monthDiff = to.diff(from.add(yearDiff, 'year'), 'month');
    return { yearDiff, monthDiff };
  }, []);

  const handleClickDetailsButton = useCallback(
    (argId: string) => {
      const target = careerDetails.find(({ id }) => id === argId);
      if (!target) return;
      setModalContent({ isOpen: true, content: target?.content });
    },
    [setModalContent, careerDetails],
  );

  const handleModalClose = () => {
    setModalContent({ isOpen: false, content: '' });
  };

  return (
    <>
      <CareerBackGroundContainer className="career">
        <CareerContentTitle>Career.</CareerContentTitle>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '16px' }}>
          <CareerFlexContainer>
            <CareerLogoBox>
              <Image
                width={181}
                height={184}
                src="/assets/images/portfolio/coway_logo.png"
                alt="coway_logo"
              />
            </CareerLogoBox>
            <CareerLogoRemarkStack>
              <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <Typography variant="h5" fontWeight="bold">
                  (주) 코웨이
                </Typography>
              </Box>

              <Typography variant="subtitle1" fontWeight="bold" color="#5D5D5D">
                2021.09 ~ present ({cowayCareer.yearDiff}년 {cowayCareer.monthDiff}개월)
              </Typography>

              <CareerCardContainer>
                <CareerCardItem>Frontend 개발</CareerCardItem>
                <CareerCardItem>백오피스 개발</CareerCardItem>
                <CareerCardItem>B2C 개발</CareerCardItem>
              </CareerCardContainer>

              <Box>
                <CareerServiceInfo
                  title="ABC  Admin"
                  managePeriod="2024.04 ~ present (신규 개발)"
                  description="ABC Admin은 네코아(코웨이 미국 법인)의 직원, 관리자 모든 직원들이 사용하고 이를 통해 내부 사무업무를 관리하는 어드민입니다. 일종의 SAP과 유사합니다."
                  serviceDescDetails={[
                    '주문 관리 시스템: 고객이 주문한 제품을 관리하는 서비스입니다. 고객에 대한 정보, 제품 정보 등 확인하고 관리할 수 있습니다.',
                    '물류 관리 시스템: 네코아의 제품(정수기, 매트리스, 공기청정기, 자재 등)을 관리합니다. 재고관리, 창고 간 제품 이동, 발주, 출고, 입고 등 물류 전반적인 시스템을 관리할 수 있습니다.',
                    '테크니션: 테크니션이 어느 위치, 시점에서 일하는지 일정을 확인하고, 관리자는 작업을 배정할 수 있습니다.',
                    '시스템: 공통 코드 관리, 권한관리 등의 서비스를 제공합니다. 또한 넷마블의 챗봇 연동이 되어 직원들에게 업무 가이드를 보다 편리하게 제공합니다.',
                  ]}
                  serviceStack="React, Typescript, TanStack Query, Recoil, Mui, Emotion, Sentry, Vitest, Vite, AWS(EC2), ArgoCD"
                  onClickDetailsButton={() => handleClickDetailsButton('portfolioDetailsAbcAdmin')}
                />
                <CareerServiceInfo
                  title="통합회원"
                  managePeriod="2023.05 ~ 2024.04 (리팩터링 및 운영 개발)"
                  description="코웨이 구서비스 및 신규 서비스 회원을 통합하기 위한 서비스 입니다."
                  serviceDescDetails={[
                    '코웨이 서비스인 코웨이몰, iocare(코웨이 IoT APP)에 대한 회원을 보유 및 통합하여 관리합니다.',
                    '회원가입, 계정찾기, 마이페이지, 회원 로그인 서비스 관련된 기본적인 기능을 제공합니다.',
                    '미국 신사업 프로젝트의 회원체계를 동일한 구조로 제공합니다.',
                  ]}
                  serviceStack="Vue3, Typescript, Pinia, vite, SCSS, AWS(S3, CloudFront), Jest, Storybook, Cypress"
                  onClickDetailsButton={() => handleClickDetailsButton('portfolioDetailsAccounts')}
                />
                <CareerServiceInfo
                  title="실시간 코디매칭 서비스"
                  managePeriod="2022.04 ~ 2023.11"
                  description="코디(영업사원)가 직접 방문판매를 하는것이 아닌, 매칭 서비스를 사용하여 이전보다 쉬운 영업서비스를 제공합니다."
                  serviceDescDetails={[
                    '서비스 지역 내에서 고객의 코디 매칭 요청이 있을 경우 코디에게 알림톡(또는 SMS 메세지)이 발송됩니다.',
                    '코디는 알림톡을 받고 1분 내 매칭을 승인합니다.',
                    '매칭이 완료된 후, 고객은 완료되었다는 메세지를 받게되며, 코디에게 제품에 대한 설명을 듣고 렌탈 및 구매하는 프로세스로 진행됩니다.',
                  ]}
                  serviceStack="React, Typescript, TanStack Query, jotai, vite, AWS (S3, CloudFront)"
                  onClickDetailsButton={() =>
                    handleClickDetailsButton('portfolioDetailsCodyMatching')
                  }
                />
                <CareerServiceInfo
                  title="통합회원 어드민"
                  managePeriod="2021.11 ~ 2022.02"
                  description="코웨이 통합회원의 회원 조회, 통계성 데이터 제공, 이용약관 관리 등 코웨이 관리자가 회원 서비스를 조회 및 제어할 수 있는 서비스를 제공합니다."
                  serviceDescDetails={[
                    '회원 관리, 회원 통계 데이터를 확인할 수 있습니다.',
                    '수시로 변경되는 이용약관을 에디터를 통해 관리할 수 있습니다.',
                  ]}
                  serviceStack="React, Typescript, Redux(RTK / redux-thunk), Mui, vite, AWS (S3, CloudFront)"
                  onClickDetailsButton={() =>
                    handleClickDetailsButton('portfolioDetailsAccountsAdmin')
                  }
                />
              </Box>
            </CareerLogoRemarkStack>
          </CareerFlexContainer>

          <CareerFlexContainer>
            <CareerLogoBox>
              <Image
                width={181}
                height={184}
                src="/assets/images/portfolio/ksnet_logo.png"
                alt="ksnet_logo"
              />
            </CareerLogoBox>
            <CareerLogoRemarkStack>
              <Typography variant="h5" gutterBottom fontWeight="bold">
                케이에스넷
              </Typography>
              <Typography variant="subtitle1" fontWeight="bold" color="#5D5D5D">
                2020.02 ~ 2021.09 ({ksnetCareer.yearDiff}년 {ksnetCareer.monthDiff}개월)
              </Typography>

              <CareerCardContainer>
                <CareerCardItem>Frontend 개발</CareerCardItem>
                <CareerCardItem>AOS 개발</CareerCardItem>
              </CareerCardContainer>

              <Box>
                <CareerServiceInfo
                  title="KSTA"
                  managePeriod="2020.04 ~ 2021.09 (개발 및 유지보수)"
                  description="KSNET VAN 가맹점의 매출 정보를 확인할 수 있도록 가맹점주들에게 제공하는 앱."
                  serviceDescDetails={[
                    'Android 네이티브 및 웹뷰 개발.',
                    '정보계 API 연동하여 VAN 매출정보 조회 기능 개발.',
                    'KSNET VAN/PG 가맹점에 대한 매출정보확인 앱 리뉴얼 및 서비스 유지보수',
                  ]}
                  serviceStack="JavaScript, HTML5, CSS, jQuery"
                />
              </Box>
            </CareerLogoRemarkStack>
          </CareerFlexContainer>
        </Box>
      </CareerBackGroundContainer>

      <CareerDetailsModal onClose={handleModalClose} {...modalContent} />
    </>
  );
};
