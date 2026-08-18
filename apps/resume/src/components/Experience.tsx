import React, { PropsWithChildren } from "react";
import Image from "next/image";

const ListItems = ({ children }: PropsWithChildren) => (
  <ul className="ml-5 list-disc space-y-2 py-3">{children}</ul>
);
const ListItem = ({ children }: PropsWithChildren) => <li>{children}</li>;
const ComponyItem = ({ children }: PropsWithChildren) => (
  <div className="mt-1 flex items-center gap-2">{children}</div>
);

export const Experience = () => (
  <>
    <div>
      <p>2021. 09 - 현재</p>
    </div>
    <div>
      <ComponyItem>
        <Image
          alt="coway"
          src="/assets/images/about/coway_logo.png"
          width={26}
          height={26}
        />
        <h3>코웨이</h3>
        <p>(서울)</p>
      </ComponyItem>
    </div>

    <ListItems>
      <ListItem>
        <p>
          국내 정수기 및 생활가전 제조업 기업 코웨이에서 IT 프론트엔드 개발을
          수행하고 있습니다. 코웨이에서 구축한 통합회원, 통합회원 어드민 회원
          체계, 그리고 전자결제 서비스, 코디 매칭 서비스, 국내 배정 어드민, 미국
          신사업 어드민 사이트, 미국 신사업 배정판과 같은 서비스를 만들었습니다.
        </p>
      </ListItem>

      <ListItem>
        <p>
          팀원들과 이슈들에 대해 소통하며 개발에 참여했습니다. 라이브러리 하나
          선정하는 것도 여러 토의와 기술 검토를 통해 채택하는 과정을 거쳤습니다.
        </p>
      </ListItem>

      <ListItem>
        <p>
          매주 스프린트 개발하는 애자일 개발 프로세스를 경험했습니다. 해당
          프로젝트의 기획이나 이슈가 있는 사항은 이슈화하여 산출물을 보다 완성도
          있게 만들도록 했습니다.
        </p>
      </ListItem>

      {/* <ListItem>
        <p>
          - 코웨이에서 제공하는 대내외 서비스&nbsp;
        </p>
        <p>
          프론트엔드&nbsp;
        </p>
        <p>
          개발.
        </p>
      </ListItem>
      <ListItem>
        <p>
          - 코웨이 미국 신사업 어드민 FE 개발 &nbsp;
        </p>
        <p>
          코웨이 미국 신사업을 진출하기 위한 어드민 사이트 구축. 전사를 관리하는 시스템이며, 물류,
          테크니션 관리, 주문, 테크니션 배정, 시스템 등 사업부에서 관리하기 위한 모든 기능을
          제공하는 어드민 사이트 개발.
        </p>
      </ListItem>
      <ListItem>
        <p>
          - 통합회원 FE 담당 &nbsp;
        </p>
        <p>
          코웨이몰, 코웨이와 연관된 서비스를 통합하는 회원체계 서비스 개발 및 운영. 내부에서
          통합회원을 관리하는 어드민 사이트 개발.
        </p>
      </ListItem>
      <ListItem>
        <p>
          - 매칭서비스 FE 담당 &nbsp;
        </p>
        <p>
          고객이 코디와 방문판매가 아닌 온라인으로 접근하여 보다 편리하게 렌탈서비스를 제공받을 수
          있는 서비스.
        </p>
      </ListItem>
      <ListItem>
        <p>
          - 기술스택 : React18 / jotai / Recoil / TanStack Query / Redux(RTK) / Redux-Thunk / Vue3 /
          pinia / AWS S3, CloudFront, EC2
        </p>
      </ListItem> */}
    </ListItems>

    <div style={{ marginTop: "16px" }}>
      <p>2020. 02 - 2021.09</p>
    </div>

    <ComponyItem>
      <Image
        alt="coway"
        src="/assets/images/about/ksnet_logo.png"
        width={26}
        height={26}
      />
      <h3>KSNET</h3>
      <p>(서울)</p>
    </ComponyItem>

    <ListItems>
      <ListItem>
        <p>
          국내 VAN/PG 서비스를 제공하는 KSNET에서 모바일 파트에서 WEB/APP 개발을
          수행했습니다. KSNET에서 제공하는 앱인 KSTA Mobile, KSNET VAN 가맹점
          매출 정보 확인 앱, 사내 기술 공유 사이트인 테크넷을 만들었습니다.
        </p>
      </ListItem>
      {/* <ListItem>
        <p>
          - KSTA Mobile 개발, KSNET VAN 가맹점 매출정보 확인 앱.
        </p>
      </ListItem>
      <ListItem>
        <p>
          - 테크넷 개발, KSNET 기술본부 개발 이슈관리 및 영업지원 웹 페이지 개발.
        </p>
      </ListItem>
      <ListItem>
        <p>
          - 기술스택 : React / Redux / jQuery
        </p>
      </ListItem> */}
    </ListItems>
  </>
);
