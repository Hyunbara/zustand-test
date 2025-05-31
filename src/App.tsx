import { useEffect } from "react";
import { usePositionStore } from "./store/usePositionStore";
import UserList from "./UserList";
import useAppStore from "./store/useAppStore";

function App() {
  const { position, setPosition } = usePositionStore();

  // selector로 값을 가져올 때 "불필요한 리렌더링"을 막고, "필요한 값만 효율적으로 구독"할 수 있음.
  //const position = usePositionStore((state) => state.position);
  //const setPosition = usePositionStore((state) => state.setPosition);

  const { count, increment, decrement } = useAppStore();

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setPosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [setPosition]);

  return (
    <div style={{ padding: "2rem" }}>
      {/* 예제 1 숫자 더하기 뺴기 */}
      <h1>Hello zustand</h1>
      <p>{count}</p>
      <button type="button" onClick={increment}>
        + 더하기 +
      </button>

      <button type="button" onClick={decrement}>
        - 빼기 -
      </button>

      {/* 마우스 위치 추적 */}
      <h1>Zustand 테스트</h1>

      <div style={{ marginBottom: "2rem" }}>
        <h2>1. 마우스 위치 추적</h2>
        <div style={{ fontSize: "1.2rem" }}>
          <p>X 좌표: {position.x}</p>
          <p>Y 좌표: {position.y}</p>
        </div>
      </div>

      <div>
        {/* 유저 게임 */}
        <UserList />
      </div>
    </div>
  );
}

export default App;
