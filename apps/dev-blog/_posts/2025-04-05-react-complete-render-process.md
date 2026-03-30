---
title: "React 렌더링 완벽 이해하기"
description: "React 렌더링 과정과 최적화 방법을 쉽게 설명합니다. 렌더링 단계, 커밋 단계, 가상 DOM 비교, 주요 최적화 기법(React.memo(), shouldComponentUpdate 등) 및 Context API 활용법을 다룹니다."
date: "2025-04-05"
modified_date: "2025-04-05"
tags: [WEB, React]
---

# "렌더링"이란 무엇인가?

렌더링은 React가 컴포넌트의 현재 props와 state의 조합을 기반으로 UI 섹션이 어떻게 표시되어야 하는지를 설명하도록 요청하는 과정입니다.

## 렌더링 프로세스 개요

렌더링 프로세스 동안 React는 컴포넌트 트리의 루트에서 시작하여 아래로 순회하며 업데이트가 필요하다고 표시된 컴포넌트를 찾습니다.

React는 전체 컴포넌트 트리에서 렌더 출력을 수집한 후, 새로운 객체 트리(가상 DOM)를 비교(diff)하고, 실제 DOM을 원하는 출력과 일치시키기 위해 적용해야 하는 모든 변경 사항의 목록을 수집합니다. 이 diff 및 계산 과정을 **재조정(reconciliation)** 이라고 합니다.

## 렌더링 및 커밋 단계

React 팀은 이 작업을 개념적으로 두 단계로 나눕니다.

- **렌더링 단계**: 컴포넌트를 렌더링하고 **변경 사항을 계산하는 모든 작업이 포함**됩니다.
- **커밋 단계**: **DOM에 변경 사항을 적용**하는 과정입니다.
    

React가 커밋 단계에서 DOM을 업데이트한 후, 모든 참조를 따라 업데이트하여 요청된 DOM 노드와 컴포넌트 인스턴스를 가리킵니다. 그런 다음 동기적으로 `componentDidMount` 및 `componentDidUpdate` 클래스 라이프사이클 메서드와 `useLayoutEffect` 훅을 실행합니다.

그 후, 만료된 모든 `useEffect` 훅을 실행합니다. 이 단계를 **수동 이펙트(Passive Effect)** 라고 합니다.

React 18에는 동시 렌더링(concurrent rendering) 기능이 추가되었습니다. 이를 통해 렌더링 단계에서 작업을 일시 중지하여 브라우저가 이벤트를 처리할 수 있습니다. 이후 필요에 따라 해당 작업을 재개하거나, 버리거나, 다시 계산할 수 있습니다.

중요한 핵심은 **"렌더링"이 "DOM 업데이트"와 동일하지 않으며**, 컴포넌트는 결과적으로 눈에 띄는 변경 없이 렌더링될 수 있다는 점입니다. React가 컴포넌트를 렌더링할 때:

- 컴포넌트는 이전과 동일한 렌더링 출력을 반환할 수 있으므로 변경이 필요하지 않을 수 있습니다.
    
- 동시 렌더링에서 React는 컴포넌트를 여러 번 렌더링할 수 있지만, 다른 업데이트가 현재 수행 중인 작업을 무효화하는 경우 매번 렌더링 출력을 폐기할 수 있습니다.
    

[React 렌더링 프로세스 이미지](https://blog.kakaocdn.net/dn/P9Mto/btsDsWZfDwW/5hg29eIFX9dkSNSQ9hjFYK/img.png)

# React는 렌더링을 어떻게 처리할까?

## 렌더링 대기

초기 렌더링이 완료된 후에는 React에 다시 렌더링을 대기열에 추가하도록 지시하는 몇 가지 방법이 있습니다. (즉, React 렌더링을 유발하는 동작)

- functional component
    - useState setter
    - useReducer dispatch
- class component
    - this.setState()
    - this.forceUpdate()
- other
    - ReactDOM 최상위 메서드 재호출(render())
    - 새로운 useSyncExternalStore hook에서 트리거된 업데이트

일반적인 렌더링에서는 "props가 변경되었는지" 신경 쓰지 않습니다. 부모가 렌더링되었다는 이유만으로 자식 컴포넌트를 무조건 렌더링합니다!

대부분의 컴포넌트가 이전 버전과 정확히 동일한 출력을 반환할 가능성이 매우 높으므로 React는 DOM을 변경할 필요가 없습니다. 하지만, React는 컴포넌트에 렌더링을 요청하고 출력을 비교하는 작업을 수행하게 되고 이는, 과도한 시간과 노력이 필요합니다.

렌더링은 나쁜 것이 아닙니다. 렌더링은 React가 DOM을 실제로 변경해야 하는지 여부를 판단하는 방법입니다.

## 표준 렌더링 동작

React의 기본 동작은 부모 컴포넌트가 렌더링되면 React 그 안에 있는 모든 자식 컴포넌트를 재귀적으로 렌더링하는 것입니다.

A > B > C > D 컴포넌트 트리가 존재하고 이미 페이지에 표시됐다고 가정했을 때, 사용자가 B 카운터를 증가시키는 버튼을 클릭합니다.

- setState()를 호출하면 컴포넌트 B가 리렌더링 됩니다.
    
- React는 트리의 맨 위에서 렌더 패스를 시작합니다.
    
- React는 A 컴포넌트가 업데이트가 필요하지 않다는 flag 값으로 설정되어 있는 것을 확인하고 넘어갑니다.
    
- 반면 React는 B 컴포넌트에서 업데이트가 필요하다는 flag 값으로 설정되어 있는 것을 보고 렌더링합니다.
    
- C는 원래 업데이트가 필요하다고 되어 있지 않습니다. 하지만 부모가 렌더링 되었기 때문에 react는 이제 아래로 이동하여 렌더링합니다.
    
- D 역시 렌더링으로 표시되지 않았지만, 부모 C 컴포넌트가 렌더링 되었으므로 React도 아래로 loop하며 렌더링됩니다.
    

또한, 일반적인 렌더링에서 React는 "props가 변경되었는지" 신경 쓰지 않습니다. 부모가 렌더링되었다는 이유만으로 자식 구성 요소를 무조건 렌더링합니다.

## React 렌더링 규칙

React 렌더링의 주요 규칙 중 하나는 렌더링이 "순수"해야 하며 부작용이 없어야 한다는 것입니다!

예를 들어 console.log() 명령문은 부작용이지만, 실제로 아무것도 깨지지 않습니다. props를 변경하는 것 역시 확실한 effect이며 아무것도 깨지지 않을 수도 있습니다. Ajax를 호출하는 것 역시 마찬가지입니다.

## 컴포넌트 메타데이터 및 Fiber

React는 애플리케이션에 존재하는 모든 현재 컴포넌트 인스턴스를 추적하는 내부 데이터 구조를 저장합니다. 데이터 구조의 핵심 부분은 "Fiber"라는 객체입니다.

- 이 시점에서 컴포넌트 트리에서 어떤 유형이 렌더링 되어야 할까?
    
- 컴포넌트와 관련된 current props 및 state
    
- 부모, 형제 및 자식 컴포넌트에 대한 포인터
    
- React가 렌더링 프로세스를 추적하는 데 사용하는 기타 내부 메타 데이터
    

Fiber는 React 16.0으로 출시되었고, 이후의 모든 React 버전은 이 접근 방식을 사용했습니다.

렌더링 패스 동안 React는 이 파이버 객체 트리를 loop하며 새로운 렌더링 결과를 계산하면서 업데이트된 트리를 재구성합니다.

Fiber 객체는 실제 컴포넌트의 props 및 state 값을 props에 저장합니다. 컴포넌트에서 state를 사용하면, react는 실제로 fiber 객체에 저장된 값에 대한 접근을 가능케 합니다.

렌더링 직전에 컴포넌트에 componentInstance.props = newProps로 명시적으로 복사합니다. React가 내부 데이터 구조에서 참조를 복사했기 때문에 this.props라는 것이 존재하게 됩니다. 따라서 컴포넌트는 React Fiber 객체에 대한 외관에 해당합니다.

마찬가지로 React hooks는 React가 컴포넌트의 모든 hook를 해당 컴포넌트의 fiber 객체에 연결된 연결 리스트로 저장하기 때문에 작동합니다. React가 함수 컴포넌트를 렌더링 할 때 fiber에서 hook 설명 항목의 연결 리스트를 가져오고 다른 hooks를 호출할 때마다 hook 설명 객체에 저장된 적절한 값 useReducer(state, dispatch 값)을 반환합니다.

## 컴포넌트 유형 및 조정

React는 기존 컴포넌트 트리와 DOM 구조를 가능한 한 많이 재사용하여 리렌더링하는 동안 효율성을 높이려 합니다. React 컴포넌트 트리의 같은 위치, 같은 유형의 컴포넌트, HTML 노드를 렌더링하도록 요청하면, React는 처음부터 다시 만드는 대신, 관련된 항목을 재사용하고 필요한 경우 업데이트를 적용합니다. 즉, 같은 위치에 해당 컴포넌트를 렌더링하도록 요청하는 한 React는 컴포넌트 인스턴스를 계속 살아있는 상태로 유지합니다. 클래스 컴포넌트는 실제로 동일한 인스턴스를 사용합니다.

React는 실제로 출력이 언제, 어떻게 변경되었는지 알 수 있을까요?

React의 "type"은 참조 비교를 사용하여 먼저 필드를 기준으로 요소를 비교합니다. 주어진 요소가 다른 type으로 변경된 경우(div에서 span 또는 ComponentA에서 ComponentB로 변경) React는 전체 트리가 변경되었다고 가정하여 비교 프로세스를 가속화합니다. 결과적으로 모든 DOM 드를 포함하여 기존 컴포넌트 트리 섹션 전체를 파괴하고 새 컴포넌트 인스턴스로 처음부터 다시 만듭니다.

렌더링하는 동안 새 컴포넌트 유형을 절대 생성해서는 안 됩니다! 새 컴포넌트 유형을 생성할 때마다 다른 참조가 되고 이로 인해 React가 자식 컴포넌트 트리를 반복적으로 파괴하고 다시 생성합니다.

다시 말해, 이런 짓은 하지 마세요.

```jsx
// ❌ BAD!
// This creates a new `ChildComponent` reference every time!
function ParentComponent() {
  function ChildComponent() {
    return <div>Hi</div>;
  }

  return <ChildComponent />;
}

// 대신, 항상 구성 요소를 별도로 정의하세요.
// ✅ GOOD
// This only creates one component type reference
function ChildComponent() {
  return <div>Hi</div>;
}

function ParentComponent() {
  return <ChildComponent />;
}
```

### key와 화해

React가 컴포넌트 "인스턴스"를 식별하는 또 다른 방법은 "key" pseudo-prop을 활용하는 것입니다. 특정 인스턴스를 구별하는 데 사용될 수 있는 고유 식별자입니다.

key는 prop이 아닙니다. React에 대한 지침 사항입니다.

주로 목록을 렌더링하는 데 사용됩니다. 여기서 키는 목록 항목을 재정렬, 추가, 삭제하는 것과 같이 어떤 식으로 변경될 수 있는 데이터를 렌더링 하는 경우 중요해집니다. key는 한 데이터의 고유 ID가 되어야 한다는 것이 특히 중요합니다. key를 배열의 인덱스로 설정하는 것은 마지막 수단으로 해야 합니다.

`<TodoListItem>`이 배열 인덱스를 키로 사용하여 10개의 컴포넌트 목록을 렌더링한다고 가정해 봅시다. 0..9의 목록이 생성됩니다. 여기서 6과 7 인덱스의 데이터를 삭제하고 새 항목 3개를 추가하면 키가 있는 항목 0..10을 다시 렌더링하게 됩니다.

하지만, `<TodoListItem key={6}>`은 이전에 key로 전달된 항목이기 때문에 컴포넌트 인스턴스는 여전히 살아 있지만 이제 이전과 다른 데이터 개체를 prop으로 받습니다. 이는 예상치 못한 사이드 이펙트가 발생할 수 있습니다.

대신 각 목록 항목에 key를 `todo.id`를 사용했다면 새로 추가한 항목에 대해 올바르게 표현할 것입니다. 삭제된 두 개의 컴포넌트 인스턴스와 관련 DOM을 파괴하고 새 컴포넌트 세 개와 해당 DOM을 만들게 됩니다.

해당 키를 변경하거나 제거하면 컴포넌트 인스턴스와 DOM을 파괴하고 새 컴포넌트와 DOM을 만듭니다.

## 렌더 배칭 및 타이밍

React가 새 렌더 패스를 시작하고 동기적으로 실행하며 반환합니다. 그러나 렌더 배칭의 `setState()` 형태는 최적화를 자동으로 적용합니다. **렌더 배칭은 여러 호출이 단일 렌더 패스를 큐에 넣고 실행하는 경우가 되며 약간의 지연이 발생합니다.**

React 커뮤니티에서는 상태 업데이트는 비동기적일 수 있다고 종종 설명합니다. 새로운 React 문서에서는 이를 **상태는 스냅샷**이라고 설명합니다.

React 18은 모든 단일 이벤트 루프 틱에서 대기 중인 모든 업데이트를 **"자동 배치"** 하여 수행합니다. 이는 필요한 전체 렌더링 수를 줄이는 데 도움이 됩니다.

```jsx
const [counter, setCounter] = useState(0);

const onClick = async () => {
  setCounter(0);
  setCounter(1);

  const data = await fetchSomeData();

  setCounter(2);
  setCounter(3);
};
```

React 17에서는 위 예제를 3개의 렌더 패스로 실행하게 됩니다.

1. setCounter(0)와 setCounter(2)를 함께 일괄 처리합니다. 둘 다 이벤트 핸들러 호출 스택 중에 발생하고 따라서 둘 다 unstable_batchedUpdates() 내부에서 호출이 발생합니다.
    
2. setCounter(2)는 await 이후에 발생합니다. 원래 sync 호출 스택이 완료되고 함수의 후반부는 별도의 이벤트 루프 호출 스택에서 훨씬 나중에 실행됩니다. setCounter(2) 호출 마지막 단계로 전체 렌더 패스를 동기적으로 실행하고 완료된 후 setCounter(2)에서 반환합니다.
    
3. setCounter(3)에서 동일한 현상이 발생합니다. 원래 이벤트 핸들러 외부에서 실행되고, 따라서 배칭 외부에 있기 때문입니다.
    

하지만, React 18에서는 두 개의 렌더 패스를 실행합니다.

1. 처음 2개(setCounter(0), setCounter(1))는 하나의 이벤트 루프 틱에 있기 때문에 함께 배치됩니다.
    
2. 나중에 setCounter(2)와 setCounter(3)는 함께 배치됩니다. 동일한 이벤트 루프에 대기 중인 두 개의 상태 업데이트이므로 두 번째 렌더로 배치됩니다.
    

## 비동기 렌더링, 클로저 및 상태 스냅샷

매우 흔한 실수 중 하나는 사용자가 state를 업데이트하고 곧바로 업데이트 사항을 확인하는 것입니다. 그러나, 업데이트 된 값이 아니라 원래의 값이 기록됩니다.

```jsx
function MyComponent() {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter(counter + 1);
    // ❌ THIS WON'T WORK!
    console.log(counter);
    // Original value was logged - why is this not updated yet??????
  };
}
```

숙련된 사용자들은 "React의 상태 업데이트는 비동기입니다"라고 말하는게 일반적입니다. 사실 그보다 약간 더 미묘한 차이가 있고 실제로는 몇 가지 다른 문제점까지 있습니다.

React 렌더링은 문자 그대로 **동기적**입니다. 이벤트 루트 틱의 맨 끝에서 마이크로 태스크로 실행됩니다. handleClick 함수의 관점에서 볼 때, 결과를 즉시 볼 수 없고 실제 업데이트가 호출보다 훨씬 늦게 발생한다는 점에서 비동기입니다.

하지만, 이러한 동작이 안되는 이유가 있습니다. handleClick 함수는 **클로저**입니다. 함수가 정의될 때 존재했던 변수의 값만 볼 수 있습니다. **이러한 상태 변수는 시간 속의 스냅샷입니다**.

handleClick 함수 컴포넌트의 가장 최근 렌더링 도중 정의되었으므로 렌더링 패스 중 존재했던 값만 볼 수 있습니다. setCounter를 호출하면 렌더링 패스 대기열에 추가하고 미래 렌더링에는 새 값과 새 함수가 있는 새 변수가 있고 이 복사본은 해당 새 값을 볼 수 없습니다.

## 렌더링 동작 엣지 케이스

#### 커밋 단계 라이프 사이클

커밋 단계 사이프사이클 메서드 내부에는 몇 가지 추가적인 엣지 케이스가 있습니다. :componentDidMount, componentDidUpdate, useLayoutEffect

이는 주로 렌더링 후 브라우저가 페인트하기 전 로직을 수행할 수 있도록 존재합니다.

사용 사례

- 일부 부분적이지만 불완전한 데이터로 컴포넌트를 처음 렌더링합니다.
    
- 커밋 단계 라이프 사이클에서 refs를 사용하여 페이지의 실제 DOM 노드의 실제 크기를 측정합니다.
    
- 측정을 기반으로 컴포넌트의 일부 상태를 설정합니다.
    
- 업데이트된 데이터로 다시 렌더링합니다.
    

우리는 사용자에게 초기 "부분적으로 렌더링 된 UI"를 보여주고 싶어하지 않습니다. 최종 UI만 표시하기를 원합니다. 브라우저는 수정되는 동안 DOM 구조를 다시 계산하지만 JS 스크립트가 여전히 실행 중이고 이벤트 루프를 차단하는 동안에는 실제로 화면에 아무것도 그리지 않습니다.

그렇기 때문에 React는 항상 커밋 단계 라이프사이클에서 동기적으로 렌더링을 실행합니다.

"partial -> final"와 같은 업데이트를 수행하려고 하면 final 콘텐츠만 화면에 표시됩니다.

콜백 상태의 업데이트는 큐에 저장되어 모든 useEffect 콜백이 완료되면 Passive Effect 단계가 끝날 때까지 flush 됩니다.

#### 조정자 배치 방법

React 조정자(ReactDOM, React Native)에는 렌더 배칭을 변경하는 메서드가 있습니다.

React 18은 기본적으로 자동 배치를 실행하므로 React 18에는 `flushSync()`가 있는데 이는 즉시 렌더링을 강제 실행하고 자동 배치를 해제할 수 있습니다.

<StrictMode>

React는 개발 중에 태그 내부의 구성 요소를 두 번 렌더링합니다. 즉 렌더링 로직이 실행되는 횟수가 커밋된 렌더링 패스의 횟수와 같지 않으며, 렌더링하는 동안 발생한 렌더링 수를 계산하기 위해 의존할 수 없습니다. REactDevTools Profiler를 사용하여 추적을 캡처하고 커밋된 렌더링의 전체 수를 계산하거나, hook 또는 라이프 사이클 내부에 console.log 로깅을 추가합니다. 이렇게 하면 React가 실제로 렌더링 패스를 완료하고 커밋했을 때만 로그가 출력됩니다.

#### 렌더링 중 상태 설정

일반적인 상황에서는 실제 렌더링 로직에 있는 동안 상태 업데이트를 큐에 넣어서는 안 됩니다. setState()이 호출되면 콜백을 만드는 것은 괜찮지만 실제 렌더링 동작의 일부로 호출해서는 안 됩니다.

그러나 하나의 예외가 있는데, 함수 컴포넌트는 조건부로 수행되고 컴포넌트가 렌더링될 때마다 setState()가 호출되지 않는 한 렌더링하는 동안 직접 호출할 수 있습니다. 함수 컴포넌트가 렌더링하는 동안 상태 업데이트를 대기열에 넣으면 React는 상태 업데이트를 즉시 적용하고 진행하기 전에 해당 컴포넌트를 동기적으로 리렌더링합니다. 컴포넌트가 상태 업데이트를 무한히 대기열에 넣고 React가 리렌더링을 강제하는 경우 React는 현재 설정된 횟수(현재 50회) 후에 루프를 중단하고 오류를 throw합니다.

# 렌더링 성능 향상시키기

렌더는 리액트 작업 중 평범한 작업으로 여겨질지라도 렌더 작업은 시간이 소요되는 작업입니다. 컴포넌트의 출력이 변경되지 않고, DOM의 일부가 업데이트할 필요가 없다 해도 컴포넌트 렌더 작업은 낭비되는 시간이 됩니다.

React 컴포넌트 렌더링 출력은 전반적으로 current props와 current component state에 기반합니다. 그러므로 컴포넌트 props, state가 변경되지 않은 그 시점을 알고 있다면, 렌더 출력 결과는 같을 것입니다.

소프트웨어 성능 향상을 하기 위한 기본적인 두 가지 접근 방법

1. 같은 작업을 빠르게 하라
    
2. 작업을 적게 하라. React rendering을 최적화 하는 것은 덜 작업하게 하도록 하는 측면에서 매우 중요합니다.
    

## 컴포넌트 렌더링 최적화 기법

React는 렌더링을 스킵하는 세 가지 주요 기법을 제공합니다.

React.memo()

렌더링에서 중요한 methods React.memo()는 high order component(HOC) 타입으로 구성되어 있습니다. 컴포넌트 타입을 argument로써 받아드리고, 새로운 래퍼 컴포넌트를 리턴합니다. 래퍼 컴포넌트의 기본 동작은 props가 변경되었는지 확인하는 것입니다. 변경되지 않았으면 react 렌더링을 막습니다.

다른 옵션

- React.Component.shouldComponentUpdate
    
- optional class component lifecycle 입니다.
    
- false를 리턴하면 React는 렌더링을 스킵합니다.
    
- 가장 흔한 접근 방법은 컴포넌트 props, state가 마지막 시점으로 부터 변경되었는지 확인하는 것입니다. 변경되지 않으면 false를 리턴합니다.
    

이러한 비교 접근 방법을 shallow equality 라고 합니다. 이것은 두 개의 object 안에 있는 모든 개별 필드가 변경사항이 있는지 확인합니다.

이러한 접근 방식은 const shouldRender = !shallowEqual(newProps, prevProps)

React 컴포넌트가 렌더링 출력에서 이전과 정확히 동일한 참조요소를 반환하는 경우 React는 해당 자식을 다시 렌더링하지 않습니다. 관련 기술은 두 가지 정도 있습니다.

- props.children이 출력에 포함하는 경우 컴포넌트가 상태 업데이트를 수행하는 경우 해당 요소는 동일합니다.
    
- 일부 요소를 useMemo()로 래핑하면 종속성이 변경될 때까지 해당 요소는 동일하게 유지됩니다.
    

이 두 접근 방식의 차이점은 다음과 같습니다.

- React.memo(): 자식 구성 요소에 의해 제어됩니다.
    
- 동일 참조 요소: 부모 구성 요소에 의해 제어됩니다.
    

```jsx
// The `props.children` content won't re-render if we update state
function SomeProvider({ children }) {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>Count: {counter}</button>
      <OtherChildComponent />
      {children}
    </div>
  );
}

function OptimizedParent() {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);

  const memoizedElement = useMemo(() => {
    // This element stays the same reference if counter 2 is updated,
    // so it won't re-render unless counter 1 changes
    return <ExpensiveChildComponent />;
  }, [counter1]);

  return (
    <div>
      <button onClick={() => setCounter1(counter1 + 1)}>
        Counter 1: {counter1}
      </button>
      <button onClick={() => setCounter1(counter2 + 1)}>
        Counter 2: {counter2}
      </button>
      {memoizedElement}
    </div>
  );
}
```

컴포넌트 렌더링을 건너뛰면 React가 해당 하위 트리 전체의 렌더링도 건너뜁니다. 기본적으로 자식 객체를 재귀적으로 렌더링 하는 동작을 중단하기 위한 정지 신호를 보내는 것과 마찬가지입니다.

## 새로운 Props 참조가 렌더링 최적화에 미치는 영향

이미 기본적으로 React가 props가 변경되지 않았더라도 모든 중첩된 구성 요소를 다시 렌더링한다는 것을 보았습니다. 자식 구성 요소에 props로 새 참조를 전달하는 것이 중요하지 않다는 것을 의미하는데, 동일한 props를 전달하든 전달하지 않든 렌더링되기 때문입니다.

매번 렌더링할 때마다 새로운 함수 참조와 새로운 객체 참조를 생성한 다음 props로 전달합니다.

하지만 자식 컴포넌트가 props가 변경되었는지 확인하여 렌더링을 최적화하려고 하는 경우, props로 새 참조를 전달하면 자식이 렌더링됩니다.

```jsx
const MemoizedChildComponent = React.memo(ChildComponent);

function ParentComponent() {
  const onClick = () => {
    console.log('Button clicked');
  };

  const data = { a: 1, b: 2 };

  return <MemoizedChildComponent onClick={onClick} data={data} />;
}
```

렌더링 할 때마다 onClick과 data가 매번 동일한 값을 전달하는 데도 다시 렌더링될 것입니다.

- MemoizedChildComponent는 우리가 대부분의 시간 동안 렌더링을 건너뛰고 싶어도 다시 렌더링됩니다.
    
- 오래된 것과 새로운 것을 비교하는 낭비되는 작업이 발생합니다(비교되는 데이터가 같음).
    

## Props 참조 최적화

클래스 구성 요소는 항상 동일한 참조인 인스턴스 메서드를 가질 수 있기 때문에 실수로 새 콜백 함수 참조를 만드는 것에 대해 크게 걱정할 필요가 없습니다. 그러나 별도의 자식 목록 항목에 대해 고유한 콜백을 생성하거나 익명 함수에서 값을 캡처해서 자식에 전달해야 할 수도 있습니다. 새 참조가 생성되고 렌더링하는 동안 자식 props로 새 객체가 생성됩니다.

React는 동일한 참조를 재사용하는 데 도움이 되는 hook을 제공합니다. useMemo는 객체를 생성하거나 복잡한 계산을 수행하고, useCallback은 특히 콜백 함수를 만드는 데 유용한 hook입니다.

## 모든 것을 메모하는가?

props로 전달하는 모든 함수나 객체에 대해 useMemo를 사용할 필요는 없습니다. 자식의 행동에 차이를 만들 경우에만 사용하면 됩니다.

- 종속성 배열 비교에 props를 참조에 넣는 경우가 있는데, 이는 상황을 더 복잡하게 만듭니다.
    

Dan Abramov는 메모이제이션은 여전히 props를 비교하는 비용을 초래하고, 메모이제이션 검사가 구성 요소가 항상 새로운 props를 수신하기 때문에 다시 렌더링을 하는 것을 결코 막을 수 없는 경우가 많다고 지적합니다.

## 불변성과 리렌더링

React의 상태 업데이트는 항상 불변적으로 이루어져야 합니다.

- 무엇을 어디에서 변형하느냐에 따라 컴포넌트가 렌더링되지 않을 수 있습니다.
    
- 데이터가 실제로 언제, 왜 업데이트 되었는지에 대한 혼란이 발생할 수 있습니다.
    

React.memo, PureComponent, shouldComponentUpdate 모두 현재 props와 이전 props의 얕은 비교 검사에 의존합니다.

props가 변경되지 않았다면 렌더링은 "불필요"하거나 "낭비"됩니다. 변형하면 구성 요소가 아무것도 변경되지 않았다고 잘못 생각할 수 있으며, 구성 요소가 왜 리렌더링 되지 않는지 의아해할 수 있습니다.

다음 문제는 hook입니다.

useState 또는 useReducer를 호출할 때마다 React는 다시 렌더링 대기열에 추가합니다. 그러나 React는 모든 hook 상태 업데이트가 새 객체, 배열 참조이든 새 기본(문자열, 숫자)이든 새 상태 값으로 새 참조를 전달, 반환해야 하는 것을 요구합니다.

React는 렌더링 단계에서 모든 상태 업데이트를 적용합니다. React는 항상 업데이트를 대기열에 넣은 컴포넌트의 렌더링을 완료합니다. 이전과 동일한 참조이고 렌더링을 계속할 다른 이유가 없는 경우 (예: 부모가 렌더링된 경우) React는 컴포넌트의 렌더링 결과를 버리고 렌더링 패스를 완전히 빠져나갑니다.

- React는 실제로 "빠른 경로" 메커니즘이 있어 어떤 경우에는 상태 업데이트를 큐에 넣기 전에 새 값을 확인하려고 시도합니다.
    
- setState는 불변성 데이터를 넣어야합니다. property에 접근하여 값을 변경하면 얕은 참조에 대한 변경이 이루어지므로 상태 업데이트가 적용되지 않습니다.
    

# 컨텍스트 및 렌더링 동작

React의 Context API

사용자가 제공한 단일 값을 컴포넌트의 하위 트리에서 사용할 수 있도록 하는 메커니즘.

컨텍스트는 "상태 관리" 도구가 아닙니다. 컨텍스트에 전달되는 값을 직접 관리해야합니다.

## 컨텍스트 기본 사항

Context.provider는 단일 props value를 수신합니다.

```jsx
<MyContext.Provider value={42}>{...}</MyContext.Provider>
```

자식 구성 요소의 Consumer는 구성 요소를 렌더링하고 Provider에서 제공하는 데이터를 수신받고 소비할 수 있습니다.

ParentComponent를 렌더링할 때마다 React는 새 값이 주어졌다는 것을 알아차리고, 아래로 루핑하며 Provider를 소비하는 구성 요소를 찾습니다. Provider가 새 값을 가지면 해당 컨텍스트를 소비하는 모든 중첩된 구성 요소는 다시 렌더링하도록 강제됩니다.

React 관점에서 보면 context provider는 단일 값(value props)만 갖고 있습니다. 객체, 배열과 같은 참조형 데이터 또는 기본형 데이터인지는 중요하지 않습니다. 값은 하나뿐입니다. context를 사용하는 구성 요소가 새 value로 인해 발생하는 업데이트를 건너뛸 수 있는 방법은 없습니다.

```jsx
function GrandChildComponent() {
  const value = useContext(MyContext);
  return <div>{value.a}</div>;
}

function ChildComponent() {
  return <GrandChildComponent />;
}

function ParentComponent() {
  const [a, setA] = useState(0);
  const [b, setB] = useState('text');
  const contextValue = { a, b };

  return (
    <MyContext.Provider value={contextValue}>
      <ChildComponent />
    </MyContext.Provider>
  );
}
```

## 상태 업데이트, 컨텍스트 및 리렌더링

우리는 다음과 같은 것을 알고 있습니다.

- setState()는 해당 컴포넌트의 렌더링을 대기열에 호출합니다.
    
- React는 기본적으로 중첩된 컴포넌트를 재귀적으로 렌더링합니다.
    
- Context Provider는 이를 렌더링하는 컴포넌트로부터 값을 받습니다.
    
- 해당 값은 일반적으로 부모 컴포넌트의 상태에서 나옵니다.
    

기본적으로 Provider를 갖는 하위 부모 컴포넌트에 대해 상태 업데이트가 이루어질 경우 context의 값을 읽었는지 여부에 관계없이 모든 하위 컴포넌트도 리렌더링됩니다.

Parent/Child/GrandChild 예시에서, 컨텍스트 업데이트 때문이 아니라, 렌더링 되기 때문에 리렌더링 한다는 것을 알 수 있습니다. ChildComponent는 단순 contextValue를 갖고 있는 GrandChildComponent를 렌더링합니다. context를 업데이트 하게 되면, GrandChildComponent의 context value를 업데이트가 반영되므로 value를 업데이트 하기 위해 관련된 컴포넌트를 모두 업데이트합니다. 그러므로 ChildComponent는 렌더링됩니다.

## 컨텍스트 업데이트 및 렌더링 최적화

예제를 수정하면 다음과 같습니다.

```jsx
function GreactGrandChildComponent() {
  return <div>Hi</div>;
}

function GrandChildComponent() {
  const value = useContext(MyContext);

  return (
    <div>
      {value.a}
      <GreactGrandChildComponent />
    </div>
  );
}

function ChildComponent() {
  return <GrandChildComponent />;
}

const MemoizedChildComponent = React.memo(ChildComponent);

function ParentComponent() {
  const [a, setA] = useState(0);
  const [b, setB] = useState('text');
  const contextValue = { a, b };

  return (
    <MyContext.Provider value={contextValue}>
      <MemoizedChildComponent />
    </MyContext.Provider>
  );
}
```

예시 흐름

- ParentComponent 렌더링
    
- 새로운 contextValue 참조 생성
    
- React Provider에 새로운 값이 있음을 확인하고 이를 사용하는 모든 consumer는 context를 업데이트 해야함
    
- React는 렌더링 시, MemoizedChildCompoent에 래핑되어 있음을 확인. React.memo()의 props가 전달되지 않았으므로 변경되지 않았음. ChildComponent는 건너뜀
    
- React는 루핑하며 내려가다 GranchChildComponent에 도달하게 되고 컨텍스트에 값이 있기 때문에 리렌더링 해야함.
    
- GrandChildComponent를 렌더링 했기 때문에 React는 그 안(GrandChildComponent)에 있는 모든 것을 렌더링합니다.
    

부모 컴포넌트의 상태 업데이트에 대해 모든 하위 컴포넌트를 리렌더링하도록 강제하지 않고 컨텍스트를 읽는 섹션만 리렌더링하도록 구성할 수 있습니다. (자식 컴포넌트의 리렌더링 방지를 위해 "동일 요소 참조" 기술을 활용하여 기본적으로 동일한 결과를 얻을 수 있습니다.)