import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({ sushiList, setPlates, plates, setMoneyLeft, moneyLeft, setSushiList, API }) {
  const fourSushi = sushiList.slice(0,4).map(sushi => {
    return (
      <Sushi key={sushi.id} sushi={sushi} setPlates={setPlates} plates={plates} setMoneyLeft={setMoneyLeft} moneyLeft={moneyLeft} />
    )
  })
  return (
    <div className="belt">
      {fourSushi}
      <MoreButton setSushiList={setSushiList} sushiList={sushiList} API={API} />
    </div>
  );
}

export default SushiContainer;
