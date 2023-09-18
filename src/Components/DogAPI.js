import React, { useState, useEffect } from "react";

import axios from "axios";

function DogAPI() {
  const url = "https://dog.ceo/api/breeds/list/all";
  const [useDogAPI, setUseDogAPI] = useState([]);

  useEffect(() => {
    axios.get(url).then((res) => {
      const formattedData = [];

      for (var a in res.data.message) {
        if (res.data.message[a].length !== 0) {
          for (var b of res.data.message[a]) {
            formattedData.push(a + "/" + b);
          }
        } else {
          formattedData.push(a);
        }
      }

      setUseDogAPI(formattedData);
    });
  }, []);

  return (
    <>
      {useDogAPI.map((b) => {
        return <option key={b}>{b}</option>;
      })}
    </>
  );
}

export default DogAPI;
