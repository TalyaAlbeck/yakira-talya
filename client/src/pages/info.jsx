import React, { useState, useEffect } from "react";
import { getRequest } from "../functions/getRequest";

export default function Info() {
  const [error, setError] = useState(null);
  const [info, setInfo] = useState([]);
  const [infoKey, setInfoKey] = useState([]);
  const username = localStorage.getItem("currentUser");

  useEffect(() => {
    (async () => {
      const infoObj = await getRequest(`info/${username}`);
      setInfo(infoObj.text);
      setInfoKey(Object.keys(infoObj.text[0]));
      //   const keyArr = await Object.keys(info);
    })();
  }, []);

  return (
    <>
      {error !== null && <p>{error}</p>}
      {info ? (
        <div className="info-div">
          {infoKey.map((item, index) => {
            console.log(info[0].item);

            return (
              <h4 key={infoKey[index]}>
                {item}: {info[0][item]}
              </h4>
            );
          })}
        </div>
      ) : (
        <h2>404 not found</h2>
      )}
    </>
  );
}
