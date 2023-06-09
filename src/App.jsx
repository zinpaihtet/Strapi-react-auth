import React from "react";
import "./App.css";
import axios from "axios";

import Parent from "./Test";
function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    const fectchData = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setData(data);
      } catch (err) {
        setData("Error");
      }
    };
    fectchData();
  }, []);

  console.log(data);

  if (data === "Error") return <div>Error Occured While fetching data</div>;
  if (!data) return <div>Loading ... </div>;
  return (
    <div>
      {data &&
        data.map(({ id, title, image }) => {
          return (
            <div key={id}>
              <h1>{id}</h1>
              <p>{title}</p>
              <img src={image} alt="some image"/>
            </div>
          );
        })}
    </div>
  );
}

export default App;
