import { useEffect, useState } from "react";
export default function App() {
  const [advice, setadvice] = useState("");
  const [counts, setcounts] = useState(0);
  async function getadvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setadvice(data.slip.advice);
    setcounts((c) => c + 1);
  }

  useEffect(function () {
    getadvice();
  }, []);

  return (
    <div className="App">
      <h1>{advice}</h1>
      <button onClick={getadvice}>Get advice</button>
      <Massage count={counts} />
    </div>
  );
}

function Massage(props) {
  return (
    <p>
      you have read <strong>{props.count}</strong> peices of advice
    </p>
  );
}
