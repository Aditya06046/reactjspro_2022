import axios from "axios";
import { useEffect, useState } from "react";
function Axios() {
  const [con, setCon] = useState([]);

  // useEffect(() => {
  //   axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
  //     setCon(res.data);
  //   });
  // }, []);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((respond) => respond.json())
      .then((res) => {
        setCon(res);
      });
  }, []);
  return (
    <div>
      <p>this is new:</p>
      <ul>
        {con.map((item) => {
          return <li key={item.id}>{item.name}</li>;
        })}
      </ul>
    </div>
  );
}
export default Axios;
