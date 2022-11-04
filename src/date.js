import { useState } from "react";

function Date() {
  const [date, setDated] = useState(0);
  return (
    <div>
      <p>date:{date}</p>
      <button
        onClick={() => {
          let val = setDated(new Date().getHours());
        }}
      >
        clicl
      </button>
    </div>
  );
}
export default Date;
