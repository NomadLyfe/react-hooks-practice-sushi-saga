import React, { useEffect, useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushiList, setSushiList] = useState(null);
  const [plates, setPlates] = useState([]);
  const [moneyLeft, setMoneyLeft] = useState(100)
  useEffect(() => {
    fetch(API)
    .then(r => r.json())
    .then(data => setSushiList(data));
  }, [])
  if (!sushiList) return <p>Loading...</p>
  return (
    <div className="app">
      <SushiContainer API={API} sushiList={sushiList} setSushiList={setSushiList} setPlates={setPlates} plates={plates} moneyLeft={moneyLeft} setMoneyLeft={setMoneyLeft} />
      <Table plates={plates} moneyLeft={moneyLeft} setMoneyLeft={setMoneyLeft} />
    </div>
  );
}

export default App;
