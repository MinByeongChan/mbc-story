---
title: "React hook에 대한 이해하기"
description: "React hook에서 몰랐던 상세한 내용들에 대해 공부하고 정리한 내용을 공유한다."
date: "2025-03-08"
modified_date: "2025-03-08"
tags: [WEB, React]
---

## useActionState

uesActionState는 폼 액션의 결과를 기반으로 State를 업데이트 할 수 있도록 제공하는 Hook이다.

```jsx
const [state, formAction, isPending] = useActionState(fn, initialState, permalink?);

```

컴포넌트의 최상위 레벨에서 호출하여 폼 액션이 실행될 때, 업데이트 되는 컴포넌트 State르ㅡㄹ 생성해야한다. 기존의 폼 액션함수와 초기 State를 전달받고, 폼에서 사용할 새로운 액션을 반환한다.

폼 state는 폼을 마지막으로 submit 했을 때, 액션에서 반환되는 값이다. 폼을 제출하지 않았다면 initialState로 설정된다.

action을 어떻게 처리하느냐에 따라 state 처리하는 로직이 달라진다. 첫번째 인자 fn의 비즈니스 로직 처리 방법이 관건이 될 것 같다.

또한, 비즈니스 로직을 어디에 어떻한 방식으로 구성해야하는 것도 논점이 될 수 있다. react-hook-form을 사용하고 있는 애플리케이션이라면 비즈니스 로직 처리에 대한 고려를 깊게 해야할 것 같다.


## useCallback

`useCallback`은 리렌더링 간에 함수 정의를 캐싱해 주는 React Hook 이다.

```js
const cachedFn = useCallback(fn, dependencies)
```


### 레퍼런스

#### 매개변수
- `fn` : 캐싱할 함수 값이다. 어떤 인자나 반환값도 가질 수 있다. React는 첫 렌더링에서 이 함수를 반환한다. 다음 렌더링에서 dependencies와 값이 이전과 같다면 react는 같은 함수를 다시 반환한다. 반대로 dependencies 값이 변경되었다면 렌더링에서 전달한 함수를 반환하고 나중에 재 사용할 수 있도록 이를 저장한다. React는 함수를 호출하지않는다. 단순 재사용할지 아닐지 여부를 판단하고 반환한다.
- `dependencies` : fn 내에서 참조되는 모든 반응형 값의 목록이다. 반응형 값은 props, state 그리고 컴포너트 안에서 직접 선언된 모든 변수와 함수를 포함한다. React는 Object.is 비교 알고리즘을 이용해 각 의존성을 이전 값과 비교한다.

#### 반환값

최초 렌더링에서는 `useCallback` 은 전달한 fn 함수를 그대로 반환한다.

#### 주의 사항
- React는 특별한 이유가 없는 한 캐시 딘 함수를 삭제하지 않는다. 개발환경에서 컴포넌트 파일을 편집할 때 React가 캐시를 삭제한다. 개발환경과 프로덕션 환경 모두에서 초기 마운트 중에 컴포넌트가 일시중지 된다면 React는 캐시를 삭제한다.

최초 렌더링에서 useCallback으로부터 반환되는 함수는 호출시에 전달할 함수이다.

이어지는 렌더링에서 React는 의존성을 이전 렌더링에서 전달한 의존성과 비교한다. 의존성 중 하나라도 변한 값이 없다면(Object.is 로 비교), useCallback 은 전과 똑같은 함수를 반환한다.

자바스크립트에서 function() {} 이나 () => {} 은 항상 다른 함수를 생성한다. 이것은 {} 객체 리터럴이 항상 새로운 객체를 생성하는 방식과 유사하다. 이러한 경우 useCallback이 유용하게 사용된다.

```jsx
function ProductPage({ productId, referrer, theme }) {
	const handleSubmit = useCallback(() => {
		post('/product' + productId + '/buy', {
			referrer,
			orderDetails,
		}
	}, [productId, referrer])

	return (
		<div> className={theme}>
			{/** ShippingForm은 memo되어이는 컴포넌트 */}
			<ShippingForm onSubmit={handleSubmit} />
		</div>
	)
}
```

handleSubmit을 useCallback으로 감쌈으로 리렌더링 간에 이것이 같은 함수라는 것을 보장한다. 위와같이 memo로 감싼 컴포넌트에 props에 대해 useCallback으로 감싸게 되면 props로 전달되는 함수를 caching하여 리렌더링을 건너 띌 수 있다.

useCallback은 단순 함수를 캐싱하고 리턴하는 역할을 한다. useMemo와 엮어보면 다음과 같이 나타낼 수 있다.

```jsx
function useCallback(fn, dependencies) {
	return useMemo(() => fn, dependencies);
}
```


## useDebugValue

useDebugValue는 React Dev Tools에서 커스텀 훅에 라벨을 추가할 수 있게 해주는 hook 이다.

```js
useDebugValue(value, format?)
```


읽을 수 있는 디버그 값을 표시하기 위해 커스텀 hook의 최상위 레벨에서 useDebugValue를 호출해야한다.

## useDeferredValue

`useDeferredValue`는 일부 UI업데이트를 지연시킬 수 있는 React Hook 이다.

```js
const deferredValue = useDeferredValue(value)
```

`currentValue` : 초기 렌더링 중 반환된 ‘지연된 값’은 사용자가 제공한 값과 같다. 업데이트가 발생하면 React는 먼저 이전 값으로 리렌더링을 시도하고 그다음 백그라운드에서 다시 새 값으로 리렌더링을 시도한다.

함수파라미터에 전ㄷ날하는 값은 문자열 및 숫자와 같은 원시데이터이거나, 컴포넌ㅌ 외부에서 생성된 객체여야한다. 새로운 값을 넣게되면 리렌더링할 때 마다 값이 달라져 불필요한 백그라운드 리렌더링이 발생할 수 있다.

성능 최적화 용도로 적용할 수도 있다. UI 일부의 리렌더링 속도가 늘고 이를 최적화할 쉬운 방법이 없으며, 나머지 UI를 차단하지 않도록 하려는 경우에 유용하다.

```jsx
function App() {
	const [text, setText] = useState('');
	return (
		<>
			<input value={text} onChange={e => setText(e.target.value)} />
			<SlowList text={text} />
		</>
	)
}

const SlowList = memo(function SlowList({ text }) { })
```

memo로 감싼다고 해서 props가 이전 렌더링 때와 동일한 경우에만 도움이 된다. 지금 직면하는 문제는 props가 다르고 실제로 다른 시각적 출력을 보여줘야할 때 계속 리렌더링이 발생하여 속도가 느리다는 이슈이다.

이러한 경우 useDeferredValue를 사용하면 입력 업데이트를 결과 목록 업데이트보다 높은 우선순위에 둘 수 있다.

```jsx
// ...
const [text, setText] = useState('');
const deferredValue = useDeferredValue(text);
return //...
```



## useId

접근성 어트리뷰트에 전달할 수 있는 고유 ID를 생성하기 위한 React Hook이다.
```jsx
const id = useId();
```

`useId` 를 컴포넌트 최상위에서 호출하여 고유 ID를 생성한다

```jsx
import { useId } from 'react';

function PasswrodField() {
	const passwordHintId = useId();
	// ...
}
```

#### 주의사항
- useId 는 훅이므로 컴포넌트의 최상위 또는 커스텀 훅에서만 호출할 수 있다. 반복문이나 조건문에서는 사용할 수 없다(map을 하여 리스트를 만들 때 사용 불가능)
- useId를 리스트의 key를 생성하기 위해 사용하면 안된다. **key는 데이터로부터 생성해야한다.**

React에서 ID를 직접 코드에 입력하는 것은 좋은 사례가 아니다. 페이지에서 컴포넌트는 몇 번이고 렌더링 될 수 있지만 ID는 고유해야 한다. ID를 직접 입력하는 대신 `useId`를 활용해서 고유한 ID를 생성해야한다.

useId를 사용하는 input 컴포넌트가 화면에 여러 번 나타나도 생성된 ID는 출돌하지 않는다.


## useImperativeHandle

`useImperativeHandle` 은 ref로 노출되는 핸들을 사용자가 직접 정의할 수 있게 해주는 React 훅이다.

```jsx
function MyInput({ ref }) {
	useImperativeHandle(ref, () => {
		return {
		// ... 메서드 입력
		}
	}, [])
	// ...
}
```

createHandle은 인수가 없고 노출하려는 ref핸들을 반환하는 함수이다. 해당 ref 핸들은 어떠한 유형이든 될 수 있다.

> React 19 부터 ref를 props로 받을 수 있다. React 18 또는 그 이전 버전에는 ref를 받기위해서는 forwardRef를 사용해야 한다.

### 사용법

#### 부모 컴포넌트에 커스텀 ref 핸들 노출

기본적으로 컴포넌트는 자식 컴포넌트의 DOM 노드를 부모 컴포넌트에 노출하지않는다. 예를들어 MyInput의 부모 컴포넌트가 <input /> DOM 노드에 접근하려면 forwardRef 를 사용하여 선택적으로 참조에 포함해야한다.

```jsx
function MyInput({ ref }) {
	return <Input ref={ref} />;
}
```

```jsx
import { useImperativeHandle } from 'react';  
function MyInput({ ref }) {
	const inputRef = useRef(null)
	
	useImperativeHandle(ref, () => {
		return {  
			focus() {
				inputRef.current.focus();
			},
			scrollIntoView() {
				inputRef.current.scrollIntoView();
			},
		};
	}, []);  
	return <input input={inputRef} />;  
};
```

위 useImperativeHandle 예시에서 input에 대한 ref는 더이상 전달되지않는다. 부모의 ref를 자식 컴포넌트에서 커스텀 메서드를 주입할 수 있다. 그리고 주입된 메서드는 부모 컴포넌트에서 호출될 수 있다.

위와같이 focus, scrollIntoView 메서드를 생성했다. 이제 MyInput을 호출하는 부모 컴포넌트에서 넘겨주는 ref를 갖고 focus, scrollIntoView 메서드를 호출할 수 있게됐다.




## useInsertionEffect

> `useInsertionEffect` 는 CSS-in-JS 라이브러리 작성을 위한 것이다. 라이브러리 작업 중에 스타일을 주입할 위치가 필요한 것이 아니라면, useEffect, useLayoutEffect를 사용하자

useInsertionEffect는 layout Effect가 실행되기 전에 전체 요소를 DOM에 주입할 수 있다.

```js
useInsertionEffect(setup, dependencies?)
```

`setup` : Effect의 로직이 포함된 함수이다. setup함수는 선택적으로 cleanup 함수를 반환할 수 있다.  컴포넌트가 DOM에 추가되기 전에 layout effects 가 실행되기 전에, React는 setup함수를 실행한다. dependencies가 변경되어 다시 렌더링될 때 마다, React는 먼저 이전 값으로 cleanup 함수를 실행한 다음 새 값으로 setup 함수를 실행한다. 컴포넌트가 DOM에서 제거되기 전에 React는 cleanup 함수를 한번 더 실행한다.

#### 주의사항
- 이펙트는 클라이언트에서만 실행된다. 서버 렌더링 중에는 실행되지 않는다.
- useInsertionEffect 내부에서는 상태를 업데이트할 수 없다
- useInsertionEffect 가 실행되는 시점에 ref는 아직 연결되지 않는다.
- useInsertionEffect 는 DOM 의 업데이트 전 또는 후에 실행된다. DOM이 업데이트 되는 특정 시점에 의존해서는 안된다.
- 매번 모든 cleanup 을 실행하고 setup 하는 다른 Effects와 달리, useInsertionEffect 는 하나의 컴포넌트에 대해 cleanup 과 setup 을 모두 실행한다. 그 결과 cleanup과 setup 이**interleaving** 된다

**컴퓨터 과학**
- **메모리 인터리빙:**
    - 메모리 접근 속도를 향상시키기 위한 기술입니다. 메모리를 여러 개의 뱅크로 나누고, 연속된 메모리 주소를 번갈아 다른 뱅크에 할당하여 동시에 여러 메모리 뱅크에 접근할 수 있도록 합니다. 이렇게 하면 메모리 접근 속도를 높일 수 있습니다.
- **프로세스 인터리빙:**
    - 운영 체제에서 여러 프로세스를 번갈아 실행하는 것을 의미합니다. 단일 CPU에서 여러 프로세스를 동시에 실행하는 것처럼 보이게 하는 멀티태스킹의 핵심 기술입니다.
- **명령어 인터리빙:**
    - CPU에서 여러 명령어를 동시에 처리하기 위해 명령어 실행 순서를 재배치하는 기술입니다. 파이프라이닝과 같은 기법에서 사용됩니다.

#### CSS-in-JS  라이브러리에서 동적 스타일 주입하기 (중요)

CSS-in-JS에는 세 가지 일반적인 접근 방식이 있다.
1. 컴파일러를 사용하여 CSS 파일로 정적 추출
2. 인라인 스타일, 예: `<div style={{ opacity: 1}}>`
3. 런타임에 `<style>` 태그 주입

런타임 `<style>` 태그 주입은 다음 두 가지 이유로 권장하지 않는다.
1. 런타임 주입은 브라우저에서 스타일을 훨씬 더 자주 다시 계산하도록 한다.
2. 런타임 주입이 React 생명주기 중에 잘못된 시점에 발생하면 속도가 매우 느려질 수 있다.

두번째의 경우 useInsertionEffect 를 사용하면 두 번째 문제를 해결할 수 있다.

```jsx
function Button() {
	const className = () => {
		let rule = "...";
		if(!isInserted.has(rule)) {
			isInserted.add(rule);
			document.head.appendChild(getStyleForRule(rule))
		}
	}
	
	return <div className={className} />
}
```

서버에서 어떤 CSS 규칙이 사용되었는지 수집해야하는 경우 렌더링 중에 수집할 수 있다.


## useLayoutEffect

>useLayoutEffect 를 사용하면 성능이 저하될 수 있다. 가능하다면 useEffect를 사용하는 것을 권장한다.

useLayoutEffect 는 브라우저가 화면을 다시 그리기 전에 실행되는 useEffect 이다.

```js
useLayoutEffect(setup, dependencies?)
```

useLayoutEffect 를 호출하여 브라우저가 화면을 다시 긔기 전에 레이아웃을 계산한다.

```jsx
function Tooltip() {
	const ref = useRef(null)
	const [tooltipHeight, setTooltipHeight] = useState(0)
	
	useLayoutEffect(() => {
		const { height } = ref.current.getBoundingClientRect();
		setTooltipHeight(height)
	}, [])
}
```

- `setup` : Effect의 로직이 포함된 함수이다. 선택적으로 cleanup 함수를 반환할 수 있다. 컴포넌트가 DOM에 추가되기 전에 React는 setup 함수를 실행한다. dependencies 가 변경되어 다시 렌더링 될 때 마다, React 는(cleanup 함수를 제공했다면) 먼저 이전 값으로 cleanup 함수를 실행한 다음, 새로운 값으로 setup 함수를 실행한다. 컴포넌트가 DOM 에서 제거되기 전에 React 는 cleanup 함수를 한 번 더 실행한다.

#### 주의사항
- Strict Mode 가 켜져 있으면, React는 실제 첫 번째 setup 함수가 실행되기 이전에 개발 모드에만 한정하여 한 번의 추가적인 setup + cleanup 사이클을 실행한다. 이는 cleanup 로직이 setup 로직을 완벽히 반영하고, setup 로직이 수행하는 작업을 중단하거나 되돌리는 지를 확인하는 스트레스 테스트이다. 이로인해 문제가 발생할 경우 cleanup 함수를 구현해야 한다.
- useLayoutEffect 내부의 코드와 이로 인한 모든 state 업데이트는 브라우저가 화면을 다시 그리는 것을 막는다. 과도하게 사용하면 앱이 느려진다. 가능하면 useEffect를 사용해야한다.
- 만약 useLayoutEffect안에서 state 를 업데이트 한다면, React는 useEffect에 남아있는 모든Effects 를 실행할 것이다.


## useMemo

useMemo 는 리렌더링 사이에 계산 결과를 캐싱할 수 있게 해주는 React Hook 이다.

```jsx
const cachedValue = useMemo(calculateValue, dependencies)
```

`calculateValue` : 캐싱하려는 값을 계산하는 함수이다. React 는 초기 렌더링 중에 함수를 호출한다. 다음 렌더링에서, React 는 마지막 렌더링 이후 `dependencies` 가 변경되지 않았을 때 동일한 값을 다시 반환한다. 변경되었다면 calculateValue 를 호출하고 결과를 반환하며, 재사용할 수 있도록 저장한다.

`dependencies` : calculateValue 코드 내에서 참조된 모든 반영형 값들의 목록이다. 값에는 props, state와 컴포넌트 바디에 직접 선언된 모든 변수와 함수가 포함된다. React 는 `Object.is` 비교를 통해 각 의존성들을 이전 값과 비교한ㄷ.

### 주의사항

- Strict Mode 에서는, React는 실수로 발생한 오류를 찾기 위해 **계산 함수를 두 번 호출한다.** 이는 개발환경에서만 동작하는 방식이며, 실제 프로덕션 환경에는 영향을 미치지 않는다. 연산 함수가 순수하다면, 로직에는 영향을 미치지 않는다.
- React 는 **캐싱된 값을 버려야할 특별한 이유가 없는 한 버리지 않는다.** 예를 들어, 개발 단계에서 컴포넌트 파일을 편집할 때, React 는 캐시를 버린다. 개발과 프로덕션 환경 모두에서 컴포넌트가 초기 마운트 중에 일시 중단되면 React 는 캐시를 버린다.


### 사용법

#### 비용이 높은 로직의 재계산 생략하기

리렌더링 사이에 계산을 캐싱하려면 컴포넌트 최상위 레벨에서 useMemo 를 호출하여 계산을 감싸면 된다.

```jsx
function TodoList({ todo, tab, theme }) {
	const visibleTodos = useMemo(() => filterTodos(todos, tab), [todos, tab]);
}
```

기본적으로 React는 컴포넌트를 다시 렌더링할 때마다 컴포넌트의 전체 본문을 다시 실행한다. 예를 들어 TodoList가 상태를 업데이트하거나 부모로부터 새로운 props를 받으면 filterTodos 함수가 다시 실행힌다.

일반적인 경우가 아닌 큰 배열을 필터링 혹은 변환하거나 비용이 많이 드는 계산을 수행하는 경우, 데이터가 변경되지않았다면 계산을 생략하는 것이 좋다.

#### 컴포넌트 리렌더링 건너뛰기

```jsx
export default function TodoList({ todo, tab, theme }) {
	// ...
	return (
		<div>
			<List items={visibleTodos} />
		</div>
	)
}
```

theme prop을 토글하면 앱이 잠시 멈춘다. 그러나 JSX에서List 컴포넌트를 제거하면 빠르게 느껴지는데, 이는 List 컴포넌트를 최적화할 필요가 있다는 것이다.

**기본적으로 React는 컴포넌트가 리렌더링될 때, 모든 자식 컴포넌트를 재귀적으로 다시 렌더링한다.** 다시 렌더링 하는데 많은 시간이 필요하지 않는 컴포넌트는 괜찮지만 다시 렌더링하는 것이 느리다는 것을 확이냈다면, List를 memo를 통해 감싸 props가 마지막 렌더링 시점과 동일할 때 다시 렌더링하는 것을 생략할 수 있다.

모든 props 가 마지막 렌더링 때와 동일한 경우 다시 렌더링하지 않는다. useMemo 없이 todoList를 계산한다고 가정해보자

```jsx
export default function TodoList({ todo, tab, theme }) {
	// 테마가 변경될 때 마다 다른 배열이 표시
	const visibleTodos = filterTodos(todos, tab);
	
	return (
		<div>
			{/** List의 props는 동일하지 않으며 매번 다시 렌더링 된다. */}
			<List items={visibleTodos} />
		</div>
	)
}
```

`{}` 객체 리터럴(인라인 표기법)이 항상 새 객체를 생성하는 것과 유사하다. 일반적인 경우라면 문제가 되지 않지만, List의 props는 동일하지 않고, memo로 감싸진 List 컴포넌트는 최적화 동작하지 않는다는 것을 의미한다. 이러한 경우 filterTodos 함수대신 useMemo를 사용해야한다.


## useOptimistic

useOptimistic 는 UI를 낙관적으로 업데이트할 수 있게 해주는 React Hook 이다.
useOptimistic은 비동기 작업이 진행중일 때 다른 상태를 보여줄 수 있게 한다. 인자로 주어진 일부 상태를 받아, 네트워크 요청과 같은 비동기 작업기간 동안 달라질 수 있는 상태의 복사본을 반환한다. 현재 상태와 작업의 입력을 취하는 함수를 제공하고, 작업이 대기 중일 때, 낙관적인 상태를 반환한다.

낙관적 상태란, 실제로 작업을 완료하는 데 시간이 걸리더라도 사용자에게 즉지 작업의 결과를 표시하기 위해 일반적으로 사용된다.

```jsx
const [optimisticState, addOptimistic] = useOptimistic(
	state,
	// updateFn
	(currentState, optimisticValue) => {
		// merge and return new state
	}
) 
```

`state` : 작업이 대기 중이지 않을 때 초기에 반환될 값이다.
`updateFn(curr, optValue)` : 현재 상태와 addOptimistic에 전달된 낙관적인 값을 취하는 함수. 결과적으로 낙관적인 상태를 반환한다. 순수 함수여야한다. 

### 사용법

#### 폼을 낙관적으로 업데이트하기

폼의 맥락에서 이 기술은 앱이 더 반응적으로 느껴지도록 도와준다. 사용자가 폼을 제출할 때, 서버의 응답을 기다리는 대신 인터페이스는 기대하는 결과로 즉시 업데이트 된다.

사용자가 폼에 메세지를 입력하고 “전송” 버튼을 누르면 useOptimistic 은 메세지가 실제로 서버로 전송되기 전에 전송중 이라는 라벨이 있는 목록에 메세지가 즉시 나타나도록 한다. 이러한 접근법은 사용자 친화적인 속도와 반응성을 보여주려한다.

## useSyncExternalStore

useSyncExternalStore 는 외부 store 를 구독할 수 있는 React Hook 이다.

```jsx
const snapshot = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot?)
```

컴포넌트 최상위 레벨에서 useSyncExternalStore 를 호출하여 외부 데이터 저장소에서 값을 읽는다.

```jsx
function TodoApp() {
	const todos = useSyncExternalStore(todoStore.subscribe, todoStore.getSnapshot);
}
```

store에 있는 데이터의 스냅샷을 반환한다.
1. subscribe 함수는 store를 구독하고 구독을 취소하는 함수를소반환 해야한다.
2. getSnapshot 함수는 store 에서 데이터의 스냅샷을 읽어야한다.

- `subscribe`: 하나의 callback 인수를 받아 store 에 구독하는 함수이다. store 가 변경될 때, 제공된 callback 이 호출되어 React 가 getSnapshot 을 다시 호출하고 (필요한 경우) 컴포넌트를 다시 렌더링 하도록 해야 한다. subscribe 함수는 구독을 정리하는 함수를 반환해야한다.
- `getSnapshot` :  store 가 변경되지 않은 상태에서 getSnapshot 을 반복적으로 호출하면 동일한 값을 반환해야한다. 저장소가 변경되어 반환된 값이 다르면 (Object.is 를 사용해서 비교하여) React 는 컴포넌트를 리렌더링한다

### 주의사항
- store의 스냅샷은 불변이어야한다. 만약 가변 데이터가 존재하고 데이터가 변경되었을 경우 변경 불가능한 새 스냅샷을 반환한다.
- 리렌더링하는 동안 다른 subscibe 함수가 전달되면 React 는 새로 전달된 subscribe 함수를 사용하여 저장소를 다시 구독한다.
- useSyncExternalStore 가 반환한 스토어 값을 기반으로 렌더링을 일시 중단하는 것은 권장하지 않는다. 이유는 외부 스토어에 대한 변형을 non-blocking transition 업데이트로 표시할 수 없기 때문에 가장 가까운 Suspense fallback 을 트리거하여 화면에서 스피너로 대체하게 되고 일반적으로 UX가 좋지 않게 되게 떄문이다.

### 브라우저 API 구독

useSyncExternalStore 를 추가하는 또 다른 이유는 시간이 지남에 따라 변겨되는 브라우저에 노출되는 일부 값을 구독하려는 경우이다. 예를 들어 컴포넌트에 네트워크 연결이 활성화 되어있는지 표시하는 예제

이 값은 시간이 지남에 따라 React가 알지 못하는 사이에 변경될 수 있으므로 useSyncExternalStore 로 값을 읽어야한다.

```jsx
function ChatIndicator() {
	const isOnline = useSyncExternalStore(subscribe, getSnapshot);
}
```


getSnapshot  함수를 구현하려면 브라우저 API 에서 현재 값을 읽는다.


```jsx
function getSnapshot() {
	return navigator.onLine;
}
```

subscribe 함수 구현체이다. 

```jsx
function subscribe(callback) {
	window.addEventListner('online', callback);
	window.addEventListner('offline', callback);

	return () => {
		window.removeEventListner('online', callback);
		window.removeEventListner('offline', callback);
	}
}

```

이제 React 는 외부 navigator.onLine API 에서 값을 읽는 방법과 그 변경 사항을 구독하는 방법을 알고 있다.


#### SSR 지원 추가

server rendering을 사용하는 경우 React 컴포넌트는 브라우저 환경 외부에서도 실행되어 초기 HTML을 생성한다. 이로인해 외부 store에 연결할 때 몇가지 문제가 발생한다.

- 브라우저 전용 API 에 연결하는 경우 API 가 존재하지 않으므로 작동하지 않는다
- 서드 파티 데이터 저장소에 연결하는 경우 서버와 클라이언트 간에 일치하는 데이터가 필요하다.

useSyncExternalStore react hook 의 세번째 파라미터로 snapshot을 설정할 수 있다.

```jsx

function useOnlineStatus() {
	const isOnline = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
	return isOnline;
}

// ...

function getServerSnapshot() {
	return true;
}
```

getServerSnapshot 함수는 두 가지 상황에서만 실행된다.

- HTML을 생성할 때 서버에서 실행된다.
- hydration 중 즉, React 가 서버 HTML 을 가져와 인터랙티브하게 만들 때,져클라이언트에서 실행된다.

#### 오류가 발생했습니다: ”getSnapshot 의 결과를 캐시해야 합니다.“

이 오류가 발생하면 getSnapshot 함수가 호출될 때 마다 새 객체를 반환한다는 의미이다.

```jsx
function getSnapshot() {
	return {
		todo: myStore.todos
	}
}
```

React는 getSnapshot 반환 값이 지난번과 다르면 컴포넌트를 리렌더링한다. 그렇기 때문에 항상 다른 값을 반환하면 무한 루프에 들어가서 오류를 발생하게 된다.

실제로 변경사항이 있는 경우에만 getSnapshot 객체가 다른 객체를 반환해야한다. 그렇기 때문에 얕은 복사를 사용하여 객체를 넘겨준다.

```jsx
function getSnapshot() {
	return myStore.todos;
}
```

store 데이터가 변경 가능한 경우 getSnapshot 함수는 해당 데이터의 변경 불가능한 스냅샷을 반환해야한다.

## useTransition

useTransition 은 UI 의 일부를 백그라운드에서 렌더링할 수 있도록 해주는 React Hook 이다.
마찬가지로 컴포넌트 최상위 레벨에서 useTransition 을 호출하여 일부 state 업데이트를 Transition으로 표시한다.

```jsx
const [isPending, startTransition] = useTransition();
```

useTransition 은 두 개의 항목이 있는 배열을 반환한다.

1. isPending 플래그는 대기 중인 Transition 이 있는지 알려준다.
2. startTransition 함수는 상태 업데이트를 Transition 으로 표시할 수 있게 해주는 함수이다.

#### startTransition(action)

useTransition 이 반환하는 startTransition 함수를 사용하면 업데이트를 Transition으로 표시할 수 있다.

```jsx
function TabContainer() {
	const [isPneding, startTransition] = useTransition();
	const [tab, setTab] = useState('about');
	
	function selectTab(next) {
		startTransition(() => {
			setTab(next)
		})
	}
	// ...
}
```

#### startTransition 내에서 호출되는 함수를 **"Action"** 이라고 한다.

> 따라서 시작 트랜지션 내에서 호출되는 모든 콜백의 이름은 `action` 이거나 "Action" 접미사를 포함해야한다.

```jsx
function SubmitButton({ submitAction }) {
	const [isPneding, startTransition] = useTransition();

	return (
		<button
			disabled={isPending}
			onClick={() => {
				startTransition(() => {
					submitAction(); // action 함수
				})
			}}
		>
			Submit
		</button>
	)

}
```

- `action` : 하나 이상의 set 함수를 호출하여 일부 상태를 업데이트하는 함수이다. React 는 매개변수 없이 즉시 action 을 호출하고 action 함수 호출 중에 동기적으로 예약된 모든 상태 업데이트를 Transitions 로 표시한다. 


### 주의 사항

- 해당 state 의 set 함수에 액세스 할 수 있는 경우에만 업데이트를 Transition 으로 래핑할 수 있다. 일부 prop이나 커스텀 Hook 값에 대한 응답으로 Transition 을 시작하려면 useDeferredValue를 사용해야한다.
- startTransition 에 전달하는 함수는 동기식이어야한다. React는 이 함수를 즉시 실행하여 실행하는 동안 발생하는 모든 state 업데이트를 Transition으로 표시한다.
- startTransition 함수는 안정된 식별성을 갖고 있으므로 useEffect 의존성에서 생략되는 경우가 많다.
- Transition 으로 표시된 state 업데이트는 다른 state 업데이트에 의해 중단된다.
- Transition 업데이트는 텍스트 입력을 제어하는 데 사용할 수 없다.

---

## reference

[https://ko.react.dev/reference/react/hooks](https://ko.react.dev/reference/react/hooks)


