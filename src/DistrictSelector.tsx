import { useUserStore } from "./store/useUserStore";

export default function DistrictSelector() {
  const { users, updateDistrict } = useUserStore();
  const user = users["1"];

  const handleDistrictChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newDistrict = e.target.value;
    console.log(`구 변경: ${user.profile.address.district} -> ${newDistrict}`);
    updateDistrict("1", newDistrict);
  };

  return (
    <div
      style={{
        padding: "1rem",
        border: "1px solid #ccc",
        borderRadius: "8px",
        backgroundColor: "#f5f5f5",
      }}
    >
      <h2 style={{ marginBottom: "1rem" }}>
        {user.name}님의 현재 구:{" "}
        <span style={{ color: "#0066cc" }}>
          {user.profile.address.district}
        </span>
      </h2>
      <div style={{ marginBottom: "1rem" }}>
        <label htmlFor="district-select" style={{ marginRight: "0.5rem" }}>
          구 선택:{" "}
        </label>
        <select
          id="district-select"
          value={user.profile.address.district}
          onChange={handleDistrictChange}
          style={{
            padding: "0.5rem",
            borderRadius: "4px",
            border: "1px solid #999",
          }}
        >
          <option value="강남구">강남구</option>
          <option value="서초구">서초구</option>
          <option value="송파구">송파구</option>
        </select>
      </div>
      <div
        style={{
          padding: "0.5rem",
          backgroundColor: "#e8f4ff",
          borderRadius: "4px",
          fontSize: "0.9rem",
        }}
      ></div>
    </div>
  );
}
