---
title: "CSR vs SSR vs SSG 완벽 비교: 실제 성능 테스트로 알아보는 렌더링 방식의 차이"
description: "React와 Vite를 활용한 CSR, SSR, SSG의 실제 성능 비교 분석. FCP, LCP 측정을 통해 각 렌더링 방식의 장단점과 적절한 사용 시나리오를 알아봅니다."
date: "2025-12-28"
modified_date: "2026-01-08"
tags: [React, SSR, CSR, SSG]
---

# 개요

SSR, CSR, SSG 와 같은 개념이 등장하고부터 프론트엔드 개발자로써 개념은 어느정도 알고 있었다. 하지만 개념일 뿐, 실제 동작하는 과정을 실제로 그려본적은 없었다. 우연히 현대 렌더링 개념에 대해 심층 분석한 아티클을 보게 되었다. 기술 스택을 선택하거나 CSR, SSR의 필요성을 논의할때 필요한 개념은 알고있었다. 그리고 Next.js를 사용할때, 어떻게 사용하는지 **방법**에 대해 이해는 하고 있었지만, 깊이 있진 않았던 것 같다. 그래서 이번 글을 통해 SSR, CSR, SSG 에 대해 깊이 있게 알아갈 수 있도록 하자.

## 사전지식

React와 vite를 사용하여 기본 예제를 만들었다. 그래서 React와 vite에서 제공하는 함수에 대해 알고 있으면 보다 깊이있게 내용을 이해할 수 있을 것이다.

### React-dom 라이브러리

react-dom/client에서는 두가지 함수를 제공한다.

#### createRoot()

```javascript
createRoot(container: Container, options?: RootOptions)
```

- 일반적인 CSR에서 사용한다.
- index.html에서 js를 불러올때, index.html을 한번에 대체한다.
- 구조가 단순하여 CSR의 고질적인 단점인 흰화면이 오랫동안 노출될 수 있다.
- SEO 제어가 불가능하고, FCP역시 제어하는데 한계가 있다.

#### hydrateRoot()

```javascript
hydrateRoot(container: Element | Document, initialChildren: React.ReactNode, options?: HydrationOptions)
```

- SSR에서 사용된다.
- 지정된 container 에서 로드할 수 있어 상황에 따라 특정 dom에 동적으로 js를 불러올 수 있다.
- createRoot를 사용할때 보다, DOM을 제어하기 때문에 FCP, SEO를 향상시킬 수 있어 초기 로딩에 유리하다.

#### renderToString()

ReactDOMServer에서 제공하는 SSR 함수이다. App.tsx 와 같은 react 가상 DOM 객체를 파라미터로 넘겨주어 string으로 매핑시키고, 이를 html 파일로 전환한다.

이렇게 개선하여 App.tsx에서 렌더링된 모든 html파일을 사전 렌더링하여 뿌려줄 수 있게된다.

#### renderToPipeableStream()

설명하기 전에 알고있어야하는 개념이 있다. 바로 Node.js의 스트림이다.

##### Node.js Stream

renderToPipeableStream 은 React 트리를 파이프 가능한 `Node.js` 스트림으로 렌더링한다.

Node.js 스트림이란 데이터를 처리하는 가장 핵심적이고 강력한 개념중 하나이다. 대용량 데이터를 다루거나 성능을 최적화해야 할 때 필수적인 요소이다.

Stream이란 데이터를 작은 조각(Chunk)으로 나누어 처리하는 방식을 말한다.

예를 들어, Youtube에서 영상을 제공할 경우를 들 수 있다.

- 버퍼링: 동영상을 부분적으로 나누어 일정 부분이 전부 다운로드 받은 후에야 재생을 시작한다.
- 스트리밍(Stream): 동영상의 앞부분만 도착해도 즉시 재생을 시작하고 보는 동안 뒷 부분을 계속 받아온다./

즉 데이터를 chunk단위로 나누어 받아 즉시 처리할 수 있게된다.

콜백을 사용하는 대신 객체를 stream/promises 반환하는 스트림용 비동기 유틸리티 함수의 대안 세트를 제공한다.

스트림에는 네 가지 유형이 있다

| **종류**      | **설명**                                | **예시**                                 |
| ------------- | --------------------------------------- | ---------------------------------------- |
| **Readable**  | 데이터를 읽어오는 스트림 (수도꼭지)     | `fs.createReadStream`, `process.stdin`   |
| **Writable**  | 데이터를 쓰는 스트림 (배수구)           | `fs.createWriteStream`, `process.stdout` |
| **Duplex**    | 읽기와 쓰기가 모두 가능한 스트림        | 네트워크 소켓 (`net.Socket`)             |
| **Transform** | 데이터를 읽고, **변형**하여 쓰는 스트림 | 데이터 압축(`zlib`), 암호화              |

### vite

#### transformIndexHtml()

- react의 기본 구조는 index.html에서 js 애셋을 불러와 javascript 파일을 로드한다. 여기에서 vite는 tsx, jsx 와 같은 브라우저가 읽을 수 없는 파일을 js로 변환해주는 trans-compile을 해준다. 또한, 매 빌드마다 청크파일로 만들어준다. 이는 빌드할 때마다 동일한 파일을 중복으로 불러오는 것이 아닌, 새로운 파일명을 만들어 이전 버전과의 중복을 방지한다. 즉, 버전관리가 가능하도록 만든다.
- vite가 제공하는 트랜스파일링을 해주고, 이를 html 구조로된 string파일로 반환한다.

#### ssrLoadModule()

- Node.js에서 사용할 수 있도록 ESM 소스 코드를 자동으로 변환.
- 추가적인 번들링이 필요하지 않으며, HMR과 유사한 동작을 수행.

# 프로젝트

아래 github 레포지토리에서 코드를 직접 확인할 수 있다.
https://github.com/MinByeongChan/ssr-deep-dive-via-vite

## 프로젝트 설명

vite를 이용하여 CSR, SSR, pre-rendering을 이용한 SSG를 테스트한다.
테스트는 chrome에서만 진행했고, 정밀한 확인 네트워크 설정은 slow 4G를 사용했다. 또한 성능 측정을 위해 performance 탭에서 테스트를 수행했다.

# 테스트 진행 과정

## CSR

전통적인 React 기반으로한 CSR을 구현했다.
렌더링을 확인하기 위해 index.html의 root에 엘리먼트에 background-color, width, height를 설정해놓았다.

<img src="https://mbc-dev-blog.vercel.app/assets/images/posts/image_20251227170553.png" alt="CSR지표" width="100%" />

먼저 초반에 흰화면은 index.html을 받아오는 과정이다. localhost:3000의 index.html을 받아오는데 약 600ms정도 소요되었다.

<img src="https://mbc-dev-blog.vercel.app/assets/images/posts/image_20251227171035.png" alt="CSR_렌더링_지표" width="100%" />

LCP 측정결과 1,200ms 가량 소요됐다. html을 받으면 바로 load되는 것을 기대했는데, 1150ms 시점에서 로드된걸로 보아 load되는데 생각보다 시간이 소요되는것을 알 수 있다. 총 렌더링 시간은 1,196ms만큼 소요되었다. 이후 js가 로드되고 react로부터 로드되는 컨텐츠가 보인다.

## SSR

SSR은 서버에서 미리 React 코드를 로드하여 document 에 string 형태로 내려주게된다. 이는 renderToString()를 이용하여 서버 사이드 렌더링을 구현할 수 있다.

사용자는 path에 접근하게 되면, 리소스를 받는다. 이때, 서버에서 미리 만들어준 리액트 document를 내려받는다.

<img src="https://mbc-dev-blog.vercel.app/assets/images/posts/image_20251227171824.png" alt="SSR지표" width="100%" />

서버에서 미리 만들어준 문서를 받기 때문에 첫 진입할 할때 보이는 화면(FCP)이 CSR보다 빠르게 보인다. 625ms로 리소스를 받자마자 곧바로 확인할 수 있는 것을 확인할 수 있다. 이후 js를 통해 컨텐츠가 로드되는 화면(LCP)는 1,283ms 으로 좀 더 느리다. 네트워크 상황으로 약간의 오차가 발생할 수 있지만, CSR과 비교하면 64ms 가량 조금 늦어졌다.

위 테스트를 통해 CSR과 SSR의 특징을 정확하게 확인할 수 있었다. 위 예제는 단순 텍스트와 카운터 기능만 존재하므로 실무에서 확연한 차이가 있을 수 있다. SSR을 사용할 때, LCP가 이보다 더 늦어질 수도 있을것이다. 프로젝트 규모와 유지보수성, 번들 사이즈 등 확인해보고 적절한 방법을 사용하는 것이 좋을 것 같다.

SSR을 사용하면 서버 유지비용이나 관리포인트가 많이 늘어나는 단점이 있다. 가벼운 프로젝트라면 CSR을 사용하여 웬만한 작업은 서버리스 방식을 채택하는 것이 좋다. 사용자가 많다면 AWS 람다 비용 등 감당할 수 없을 수 있으니, 거듭 말하지만 적절한 방법을 채택하는 것이 좋을 것 같다.

## SSG

SSG란 Static Site Generation 으로 서버에서 fetching할 데이터나 이미지 폰트 등과 같은 리소스가 있을 경우 미리 서버에서 로드하고 클라이언트 렌더링시, 데이터를 뿌려주는 기능이다.

서버에서 데이터를 사전에 미리 생성하고 클라이언트를 로드하기 때문에 사용자 입장에서 초기 진입시, 데이터가 로딩중이거나, 폰트깨짐(로드되는 과정중 변화하는 현상) 과 같이 전반적인 화면의 재구성 과정을 볼 필요가 없다. 단, 그만큼 페이지 로드가 늦어지는 단점이 있다. SSG 역시, 필요한 데이터만 사전 렌더를 하고 나머지는 클라이언트에서 진행하는 것이 좋다.

<img src="https://mbc-dev-blog.vercel.app/assets/images/posts/image_20251228144557.png" alt="SSG지표" width="100%" />

위 결과는 사전에 https://jsonplaceholder.typicode.com/posts 를 호출하였다. 호출 결과를 App.tsx에 데이터를 전달하여 페이지는 그리도록 예제를 작성했다.

FCP 결과는 620ms 정도로 위 CSR, SSR 지표 결과와 비슷하다. 하지만 LCP가 앞당겨진것을 확인할 수 있다. FCP와 LCP가 동시에 이뤄진다. 이는 useEffect에서 동작하는 fetch동작을 사전 렌더에서 작업하여 LCP를 단축시킬 수 있었다.

SSG는 이처럼 LCP를 앞당길 수 있는 큰 장점이 있다. 하지만, 비즈니스 로직이 복잡해지며, 팀원들과 많은 고민이 필요할 것 같다. 단순히 기능이 좋다고 도입하는 것이 아닌, 사전렌더링으로 옮길때 어떤 데이터를 옮겨야할지 컨센서스가 맞아야 도입할 수 있을 것이다. 또한, 비즈니스 로직을 정확히 판단하기 위해 디자인 패턴도 고려야할 필요가 있다고 생각한다.

# 끝마치며

여기까지 CSR, SSR, SSG 에 대한 테스트를 해보았다. 기존에 알고있던 개념이지만, 재정리 하게 되는 계기가 되었다.

아쉬운점은 SSG를 직접 구현해보았는데, 정작 중요한 react렌더시, js를 못잡는 이슈가 있다. 이 부분은 FCP, LCP 성능 측정을 알아보는데 있어 중요한 이슈는 아닌거같아 건너뛰긴 했지만, 미완성시킨 부분에서 아쉬움이 남는다.
