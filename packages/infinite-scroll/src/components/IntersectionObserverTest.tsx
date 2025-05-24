import { useEffect, useMemo, useRef, useState } from "react";
import axios from "axios";

export const IntersectionObserverTest = () => {
  const endRef = useRef<HTMLLIElement | null>(null);

  const [recipeList, setRecipeList] = useState<any[]>([]);
  const [page, setPage] = useState<number>(1);

  const SIZE = 10;
  const currentData = useMemo(() => {
    if (!recipeList || recipeList.length === 0) return [];
    return recipeList.filter((_, i) => {
      return i < SIZE * page;
    });
  }, [recipeList, page]);

  const fetchPhotos = async () => {
    const response = await axios("https://dummyjson.com/recipes", {
      method: "get",
    });
    return response;
  };

  useEffect(() => {
    (async () => {
      const response = await fetchPhotos();
      setRecipeList(response.data.recipes);
    })();
  }, []);

  useEffect(() => {
    if (!endRef.current) return;

    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].intersectionRatio <= 0) return;
        setPage((prev) => prev + 1);
      },
      {
        root: null,
        threshold: 1,
      }
    );

    // 주시 시작
    intersectionObserver.observe(endRef.current);
  }, [endRef.current]);

  return (
    <div style={{ maxWidth: 600, margin: "0 auto" }}>
      <h1>Lazy Load Test</h1>
      <ul>
        {currentData?.map((data, id) => (
          <li
            key={id}
            style={{
              textAlign: "start",
              marginBottom: "8px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <img src={data.image} width="50px" height="50px" />
              <p>{data.name}</p>
            </div>
            <div>
              <ul>
                {data.instructions.map((instruction: any) => (
                  <li key={instruction} style={{ textAlign: "start" }}>
                    {instruction}
                  </li>
                ))}
              </ul>

              <p></p>
            </div>

            <span>{data?.name ?? ""}</span>
          </li>
        ))}
        {currentData.length !== 0 && (
          <li ref={endRef} className="endList">
            Loading...
          </li>
        )}
      </ul>
    </div>
  );
};
