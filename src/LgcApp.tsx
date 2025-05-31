import useAppStore from "./store/useAppStore";

function App() {

  const { count, increment, decrement } = useAppStore();

  return (
    <div>
      <h1>Hello zustand</h1>
      <p>{count}</p>
      <button type="button" onClick={increment}>
        increment
      </button>
      <button type="button" onClick={decrement}>
        decrement
      </button>
    </div>
  );
}

export default App;
