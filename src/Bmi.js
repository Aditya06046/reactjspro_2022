import { useState } from "react";

function Bmical() {
  const [h, setH] = useState("");
  const [w, setW] = useState("");
  const [bmi, setBmi] = useState("");
  return (
    <div>
      Height:
      <input
        type="text"
        value={h}
        onChange={(e) => {
          setH(e.target.value);
        }}
      />
      <br />
      Weight:
      <input
        type="text"
        value={w}
        onChange={(e) => {
          setW(e.target.value);
        }}
      />
      <br />
      <br />
      <button
        onClick={() => {
          let val = w / (h * h);
          setBmi(val);
          if (bmi === 19) {
            alert("ewwwwww");
          } else if (bmi === 10) {
            alert("sdhflkash;g");
          }
        }}
      >
        click
      </button>
      <p>Bmi:{bmi}</p>
    </div>
  );
}
export default Bmical;
