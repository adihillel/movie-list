import { createContext, useContext, useEffect, useState } from "react";
;
const MyContext = createContext(null);
export const useMyContext = () => useContext(MyContext);

export const MyProvider = ({ children }) => {
  const [data, setData] = useState([]);


  // const fetchDataFromApi = () => {
  //   fetch("https://api.androidhive.info/json/movies.json", {
  //     mode: "no-cors",
  //   })
  //     .then((response) => response.json())
  //     .then((data) => setData(data));
  // };

  // useEffect(() => {
  //   fetchDataFromApi();
  // }, []);

  return <MyContext.Provider value={{ data }}>{children}</MyContext.Provider>;
};
