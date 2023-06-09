import React, { useState } from "react";

function Sushi({ sushi, setPlates, plates, moneyLeft, setMoneyLeft }) {
  const [isEaten, setIsEaten] = useState(false);
  function handelClick() {
    if (isEaten === true) {
      alert("You can't eat the plate!")
    } else if (moneyLeft < sushi.price) {
      alert("You don't have enough money!")
    }else {
      setMoneyLeft(moneyLeft - sushi.price);
      setIsEaten(true);
      setPlates([...plates, 1]);
    }
  }
  return (
    <div className="sushi" id={sushi.id}>
      <div className="plate" onClick={handelClick}>
        {isEaten ? null : (
          <img
            src={sushi.img_url}
            alt={sushi.name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
  );
}

export default Sushi;
