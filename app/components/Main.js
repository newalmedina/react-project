import React, { useEffect } from "react";
import axios from "axios";
import Navigation from "./navigation/Navigation";
import ApiManager from "./Api/ApiManager";
const Main = () => {
  const apiUrl = "react-project.test/api/v1";

  useEffect(() => {

    ApiManager.get(apiUrl + '/products/get-last-products')
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.info(error)
        console.log(error);
        throw error;
      });
  }, []);
  return (
    <>
      <Navigation />
    </>
  );
};
export default Main;
