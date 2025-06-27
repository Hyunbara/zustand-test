import React, { useState, useEffect } from "react";
import useAppStore from "./store/useAppStore";
import { usePositionStore } from "./store/usePositionStore";
import UserList from "./UserList";

// 기존 App 컴포넌트 (간단한 카운터)
function SimpleCounter() {
  const { count, increment, decrement } = useAppStore();

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Hello zustand - 간단한 카운터</h1>
      <p>{count}</p>
      <button
        type="button"
        onClick={increment}
        className="bg-blue-500 text-white p-2 rounded-md mr-2"
      >
        increment
      </button>
      <button
        type="button"
        onClick={decrement}
        className="bg-red-500 text-white p-2 rounded-md"
      >
        decrement
      </button>
    </div>
  );
}

// Lgy2App 컴포넌트 (고급 기능들)
function AdvancedDemo() {
  const position = usePositionStore((state) => state.position);
  const setPosition = usePositionStore((state) => state.setPosition);
  const { count, increment, decrement } = useAppStore();

  // 마우스 위치 추적 효과
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
      <h1>Zustand 고급 데모</h1>

      {/* 카운터 섹션 */}
      <div style={{ marginBottom: "2rem" }}>
        <h2>1. 카운터 기능</h2>
        <p>{count}</p>
        <button
          type="button"
          onClick={increment}
          className="bg-blue-500 text-white p-2 rounded-md mr-2"
        >
          + 더하기 +
        </button>
        <button
          type="button"
          onClick={decrement}
          className="bg-red-500 text-white p-2 rounded-md"
        >
          - 빼기 -
        </button>
      </div>

      {/* 마우스 위치 추적 섹션 */}
      <div style={{ marginBottom: "2rem" }}>
        <h2>2. 마우스 위치 추적</h2>
        <div style={{ fontSize: "1.2rem" }}>
          <p>X 좌표: {position.x}</p>
          <p>Y 좌표: {position.y}</p>
        </div>
      </div>

      {/* 유저 리스트 섹션 */}
      <div>
        <h2>3. 유저 게임</h2>
        <UserList />
      </div>
    </div>
  );
}

// 메인 App 컴포넌트
function App() {
  const [currentView, setCurrentView] = useState<"simple" | "advanced">(
    "simple"
  );

  return (
    <div>
      {/* 네비게이션 버튼들 */}
      <div
        style={{
          padding: "1rem",
          borderBottom: "1px solid #ccc",
          backgroundColor: "#f5f5f5",
        }}
      >
        <h1 style={{ marginBottom: "1rem" }}>Zustand 데모 앱</h1>
        <button
          onClick={() => setCurrentView("simple")}
          className={`p-2 rounded-md mr-2 ${
            currentView === "simple"
              ? "bg-blue-500 text-white"
              : "bg-gray-300 text-gray-700"
          }`}
        >
          간단한 카운터
        </button>
        <button
          onClick={() => setCurrentView("advanced")}
          className={`p-2 rounded-md ${
            currentView === "advanced"
              ? "bg-blue-500 text-white"
              : "bg-gray-300 text-gray-700"
          }`}
        >
          고급 데모 (마우스 추적 + 유저 게임)
        </button>
      </div>

      {/* 선택된 뷰 렌더링 */}
      {currentView === "simple" ? <SimpleCounter /> : <AdvancedDemo />}
    </div>
  );
}

export default App;
