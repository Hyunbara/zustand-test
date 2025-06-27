import { useUserStore } from "./store/useUsersStore";

// 🎯 Zustand Store 사용 예시: 유저 리스트 컴포넌트
// 이 컴포넌트는 useUsersStore를 사용해서 유저 데이터를 관리합니다
export default function UserList() {
  // 1. 선택적 구독: 필요한 상태와 액션만 가져오기
  // 이렇게 하면 해당 상태가 변경될 때만 컴포넌트가 리렌더링됨

  // 계산된 값 가져오기 (함수 호출)
  const adultCount = useUserStore((state) => state.adultUsersCount());

  // 상태 가져오기
  const users = useUserStore((state) => state.users);

  // 액션 가져오기
  const addUser = useUserStore((state) => state.addUser);
  const updateUser = useUserStore((state) => state.updateUser);

  return (
    <div>
      {/* 계산된 값 표시 */}
      <h3>성인 유저 수: {adultCount}</h3>

      {/* 상태 데이터 렌더링 */}
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age}세)
            {/* 액션 호출: 버튼 클릭 시 store의 액션 실행 */}
            <button
              onClick={() => updateUser(user.id, { age: user.age + 1 })}
              className="bg-blue-500 text-white p-2 rounded-md mr-2"
            >
              나이 +1
            </button>
            <button
              onClick={() => updateUser(user.id, { age: user.age - 1 })}
              className="bg-red-500 text-white p-2 rounded-md mr-2"
            >
              나이 -1
            </button>
          </li>
        ))}
      </ul>

      {/* 새로운 유저 추가 액션 */}
      <button
        onClick={() => addUser({ name: "Kim", age: 33 })}
        className="bg-green-500 text-white p-2 rounded-md mr-2"
      >
        유저 추가
      </button>
    </div>
  );
}
