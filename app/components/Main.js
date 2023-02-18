import React, { useEffect } from "react";
import axios from "axios";
import Navigation from "./navigation/Navigation";
const Main = () => {
  const apiUrl = "http://react-project.test/api/";

  useEffect(() => {
    const config = {
      headers: {
        //Authorization: `${token}`,
        Accept: "application/json",
      },
    };
    axios
      .get(apiUrl + "/app/products/get-last-products", config)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
        return false;
      });
  }, []);
  return (
    <>
      <Navigation />
    </>
  );
};
export default Main;
