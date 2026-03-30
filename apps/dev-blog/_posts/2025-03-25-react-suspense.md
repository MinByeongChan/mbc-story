---
title: "React Suspense 이해하기"
description: ""
date: "2025-03-25"
modified_date: "2025-03-25"
tags: [WEB, React]
---

## Suspense`

`<Suspense>` 는 자식 요소를 로드하기 전까지 화면에 대체 UI(Fallback)를 보여준다.

```jsx
<Suspense fallback={<Loading />}>
	<Component />
</Suspense>
```

- children : 궁극적으로 렌더링하려는 UI이다. children의 렌더링이 지연되면, Suspense 는 fallback을 대신 렌더링한다.
- fallback : UI가 로딩되기 전까지 대신 렌더링되는 대체 UI이다. 어떤 React.Node 형식이든 대체 UI로 활용할 수 있다. 보통 로딩 스피너나 스켈레톤처럼 간단한 Placeholder를 활용한다. fallback의 렌더링이 지연되면, 가장 가까운 부모 Suspense 가 활성화된다

#### 주의사항
- React 는 컴포넌트가 처음으로 마운트 되기 전에 지연된 렌더링을 하는 동안의 어떤 state도 유지하지않는다. 컴포넌트가 로딩되면 React 는 일시 중지된 트리를 처음부터 다시 렌더링한다.
- Suspense 가 트리의 컨텐츠를 보여주고 있을 때 또 다시 지연되면 startTransition 이나 useDeferredValue 로 인한 업데이트가 아닌한 fallback 이 다시 보인다.
- React 가 다시 일시 중지되어 보이는 컨텐츠를 숨겨야하는 경우 컨텐츠 트리에서 Layout Effect 들을 정리한다. 컨텐츠가 다시 보일 준비가 되면 React는 LayoutEffect 들을 정리한다. 따라서 DOM 레이아웃을 측정하는 Effect 가 컨텐츠가 숨겨져 있는동안 동작하지 않음을 보장한다.
- React 는 Suspense 와 통합된 스트리밍 서버 렌더링과 선택적 Hydration 같은 내부 최적화를 포함하고 있다.

#### 중요 사항

Suspense가 가능한 데이터만이 Suspense 컴포넌트를 활성화한다. 대상은 아래와 같다.

- `Relay` 와 `Next.js` 같이 Suspense 가 가능한 프레임워크를 사용한 데이터 가져오기.
- `lazy` 를 활용한 지연 로딩 컴포넌트.
- `use` 를 사용해서 캐시된 Promise 값 읽기

Suspense 는 Effect 또는 이벤트 핸들러 내부에서 가져오는 데이터를 감지하지 않는다.

데이터를 로딩하는 정확한 방법은 프레임워크마다 다르다. Suspense가 가능한 프레임워크를 사용하는 경우, 데이터 불러오기 관련 문서를 참조해야한다.

데이터를 로딩하는 컴포넌트가 Suspense의 직접적인 자식일 필요는 없다. 예를 들어 Biography 와 Albums 를 새로운 Details 컴포넌트로 이동할 수 있다.

```jsx
<Suspense fallback={<Loading />}>
	<Details id={id} />
</Suspense>

function Details({ id }) {
	return (
		<>
			<Biography id={id} />
			<Panel>
				<Albums id={id} />
			</Panel>
		</>
	)
}
```

#### 중첩된 컨텐츠가 로딩될 때 보여주기

컴포넌트가 일시 중단되면 가장 가까운 상위 Suspense 컴포넌트가 Fallback 을 보여준다 이를 통해 여러 Suspense 컴포넌트를 중첩하여 로딩 순서를 만들 수 있다.


```jsx
<Suspense fallback={<BigSpinner />}>
	<Biography />
	<Suspense fallback={<AlbumsGlimer />}
		<Panel>
			<Albums />
		</Panel>
	</Suspense>
</Suspense>
```


순서는 다음과 같다.

1. Biography 가 아직 로딩되지 않았으므로 최상위 Suspense 컴포넌트인 BigSpinner 가 동작한다.
2. Biography 가 로딩이 완료되면 Biography가 렌더링되고 하위 Suspense까지 렌더링된다.
3. Panel 하위 컴포넌트가 아직 로딩되지않았으므로 상위 Suspense 컴포넌트인 AlbumnsGlimer가 동작한다.
4. 마지막으로 Albums 컴포넌트 로딩이 완료되면 AlbumnsGlimer 를 제거하고 Albums 컴포넌트로 대체한다.


### 예제

간단하게 list를 불러오는 예제이다. 
`open` 버튼을 클릭시, `useEffect` 에 의해 컴포넌트의 호출이 일어나고, 렌더 동작이 일어난다. isCalled ref값은 strict mode에서 useEffect 동작시, 두번 호출이 일어나기 때문에 방어 로직으로 넣었다.

useEffect에서 컴포넌트 렌더링 시, 첫 동작이 일어나게 되고, 이때 컴포넌트 외부에서 정의된 fetchData 함수가 실행된다. fetchData는 리스트를 불러오는 비동기 결과를 promise 타입으로 반환하는 함수이다.
fetchData의 promise 결과를 then 키워드를 사용하여 resolve 된 데이터를 받는다. 그리고 setList함수를 이용하여 state를 업데이트 한다.

이때 App 컴포넌트에서는 lazy를 활용해서 Suspense 컴포넌트의 children인 List 지연시켜 가져오고, 컴포넌트 렌더링을 중단하고 fallback ui로 대체한다. api응답을 받으면 중단된 시점으로부터 동작으로 수행하고 업데이트된 list를 렌더링하여 동작을 마친다.


```tsx
const fetchData = async () => {
	const response = await fetch('https://jsonplaceholder.typicode.com/posts');
	return await response.json();
};
	
const List = () => {
	const [list, setList] = useState([]);
	const isCalled = useRef(false);
	
	useEffect(() => {
		if(isCalled.current) return;
		
		fetchData().then((data) => {
			setList(data.map((item: any) => item.title));
			isCalled.current = true;
		});
	
		return () => {
			isCalled.current = true;
		}
	}, []);
	
	return (
		<ul>
			{list.map((item, index) => (
				<li key={index}>{item}</li>
			))}
		</ul>
	);
};

function App() {
	const [isOpen, setOpen] = useState(false)
	
	return (
		<div>
			<div style={{ display: 'flex' }}>
				<button type='button' onClick={() => setOpen(true)}>open list</button>
				<button type='button' onClick={() => setOpen(false)}>close list</button>
			</div>
			<Suspense fallback={<div>Loading...</div>}>
				{isOpen && <List />}
			</Suspense>
		</div>
	)
}
```