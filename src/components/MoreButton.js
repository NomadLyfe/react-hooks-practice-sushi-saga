import React from "react";

function MoreButton({ sushiList, setSushiList, API }) {
  function shiftSushi() {
    if (sushiList[0].id === 97) {
      fetch(API)
      .then(r => r.json())
      .then(data => setSushiList(data));
    } else {
      setSushiList(sushiList.slice(4));
    }
  }
  return <button onClick={shiftSushi}>More sushi!</button>;
}

export default MoreButton;
