import { useState, useEffect, useRef } from "react";

function App() {
  const [numberFibo, setNumberFibo] = useState(0);
  const [fibSync, setFibSync] = useState([]);
  const [fibAsync, setFibAsync] = useState([]);
  const [timeSync, setTimeSync] = useState([]);
  const [timeAsync, setTimeAsync] = useState([]);
  const [showMessage, setShowMessage] = useState(false); // New state
  const [syncLoadings, setSyncLoadings] = useState([]); // Changed state
  const [asyncLoadings, setAsyncLoadings] = useState([]); // Changed state
  const workerRef = useRef(null);

  useEffect(() => {
    workerRef.current = new Worker(new URL("./fibWorker.js", import.meta.url));
    workerRef.current.onmessage = (e) => {
      const { result, time } = e.data;
      setFibAsync((prev) => [...prev, result]);
      setTimeAsync((prev) => [...prev, time]);
      setAsyncLoadings((prev) => prev.slice(1)); // Remove loading
    };
    return () => {
      workerRef.current.terminate();
    };
  }, []);

  const calculateSync = () => {
    setSyncLoadings((prev) => [...prev, true]); // Add loading
    const start = performance.now();
    const result = fibonacci(numberFibo);
    const end = performance.now();
    setFibSync((prev) => [...prev, result]);
    setTimeSync((prev) => [...prev, end - start]);
    setSyncLoadings((prev) => prev.slice(1)); // Remove loading
  };

  const calculateAsync = () => {
    setAsyncLoadings((prev) => [...prev, true]); // Add loading
    workerRef.current.postMessage(numberFibo);
  };

  const fibonacci = (n) => {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
  };

  const handleNewButtonClick = () => {
    // alert('Button clicked!');
    setShowMessage(true);
  };

  return (
    <div style={{ padding: "50px" }}>
      <label htmlFor="fiboField">Number Fibonaci:</label>
      <input
        type="number"
        id="fiboField"
        name="fiboField"
        min="0"
        max="44"
        value={numberFibo}
        onChange={(e) => {
          if (e.target.value > 45) {
            return;
          }
          setNumberFibo(e.target.value);
        }}
      />
      <br />
      <button onClick={handleNewButtonClick}>Show Message</button>
      {showMessage && <p style={{ color: "green" }}>Button clicked!</p>}
      <div style={{ display: "flex", gap: "20px" }}>
        <div>
          <button onClick={calculateSync}>Calculate Fibonacci Sync</button>
          {syncLoadings.map((_, index) => (
            <p key={index} style={{ color: "orange" }}>
              Calculating synchronously...
            </p>
          ))}
          {fibSync.length > 0 && (
            <ul>
              {fibSync.map((result, index) => (
                <li key={index}>
                  Result: {result} (Time: {timeSync[index].toFixed(2)} ms)
                </li>
              ))}
            </ul>
          )}
        </div>
        <div>
          <button onClick={calculateAsync}>
            Calculate Fibonacci Async with Web Worker
          </button>
          {asyncLoadings.map((_, index) => (
            <p key={index} style={{ color: "purple" }}>
              Calculating asynchronously...
            </p>
          ))}
          {fibAsync.length > 0 && (
            <ul>
              {fibAsync.map((result, index) => (
                <li key={index}>
                  Result: {result} (Time: {timeAsync[index].toFixed(2)} ms)
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
