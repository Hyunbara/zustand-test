import React, { useState, useEffect } from "react";
import useAppStore from "./store/useAppStore";
import { usePositionStore } from "./store/usePositionStore";
import UserList from "./UserList";

// 🎯 Zustand 사용법 데모 1: 간단한 카운터
// 가장 기본적인 zustand 사용법을 보여줍니다
function SimpleCounter() {
  // store에서 필요한 상태와 액션만 가져오기
  // 구조분해할당으로 깔끔하게 사용
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

// 🎯 Zustand 사용법 데모 2: 고급 기능들
// 여러 store 조합, useEffect와 함께 사용하는 방법을 보여줍니다
function AdvancedDemo() {
  // 1. 선택적 구독: 필요한 상태만 선택해서 가져오기
  // 이렇게 하면 해당 상태가 변경될 때만 컴포넌트가 리렌더링됨
  const position = usePositionStore((state) => state.position);
  const setPosition = usePositionStore((state) => state.setPosition);

  // 2. 구조분해할당으로 여러 상태와 액션 가져오기
  const { count, increment, decrement } = useAppStore();

  // 3. useEffect와 함께 사용: 마우스 위치 추적
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      // store의 액션을 호출해서 상태 업데이트
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

// 🎯 메인 App 컴포넌트
// 여러 데모를 전환할 수 있는 네비게이션 기능
function App() {
  // 로컬 상태로 현재 보여줄 데모 선택
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
