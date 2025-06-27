import { useUserStore } from "./store/useUsersStore";

export default function UserList() {
  // 필요한 상태만 선택 (성인 유저 수, 유저 리스트)
  const adultCount = useUserStore((state) => state.adultUsersCount());
  const users = useUserStore((state) => state.users);

  // 액션 사용
  const addUser = useUserStore((state) => state.addUser);
  const updateUser = useUserStore((state) => state.updateUser);

  return (
    <div>
      <h3>성인 유저 수: {adultCount}</h3>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age}세)
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
      <button
        onClick={() => addUser({ name: "Kim", age: 33 })}
        className="bg-green-500 text-white p-2 rounded-md mr-2"
      >
        유저 추가
      </button>
    </div>
  );
}
