import React, { useState } from "react";

function Table({ plates, moneyLeft, setMoneyLeft }) {
  const [funds, setFunds] = useState('');
  const emptyPlates = plates.map((_, index) => (
    <div key={index} className="empty-plate" style={{ top: -7 * index }} />
  ));
  function handleSubmit(e) {
    e.preventDefault();
    setMoneyLeft(Number(moneyLeft) + Number(funds));
    setFunds('');
  }
  function handleChange(e) {
    setFunds(Number(e.target.value));
  }
  return (
    <>
      <h1 className="remaining">
        You have: ${moneyLeft} remaining!
      </h1>
      <form onSubmit={handleSubmit}>
        <label>Add funds: $</label>
        <input type="number" onChange={handleChange} value={funds}></input>
        <button>Add</button>
      </form>
      <div className="table">
        <div className="stack">{emptyPlates}</div>
      </div>
    </>
  );
}

export default Table;
