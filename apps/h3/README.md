# 개요

브이월드(vworld) WMTS/TMS 배경지도 위에 h3-js 데이터를 Deck.gl로 WebGL 렌더링하는 예제입니다.

# 사용 방법

1. 브이월드 API 키 발급 후 `.env`에 설정합니다.

```
VITE_VWORLD_KEY=발급받은키
```

2. 실행

```
pnpm install
pnpm dev
```

# 기술 검토

Deck.gl 등 외부 WebGL 엔진과 연동할 때 (추천)
추천 API: [WMTS/TMS API] (목록의 두 번째 줄 두 번째 항목)

이유: H3 시각화의 업계 표준은 Deck.gl이라는 WebGL 전용 라이브러리입니다. Deck.gl을 사용하면 수만 개의 H3 셀을 끊김 없이 렌더링할 수 있는데, 이때 브이월드를 '배경 지도(Base Map)'로만 사용하게 됩니다.

활용 방법: Deck.gl이나 MapLibre GL JS 같은 엔진을 메인으로 사용하면서, 브이월드의 WMTS/TMS API를 호출해 배경 지도를 불러옵니다. 그 위에 h3-js 데이터를 H3Layer로 덮어씌우는 방식입니다. 대용량 데이터를 다루신다면 이 방식이 가장 강력합니다.
