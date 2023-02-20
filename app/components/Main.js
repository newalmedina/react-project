import React, { useEffect } from "react";
import axios from "axios";
import Navigation from "./navigation/Navigation";
import ApiManager from "./Api/ApiManager";
const Main = () => {

  const repository = async () => {
    //   var response = await fetch("http://react-project.test/api/v1/products/get-last-products")
    var response = await fetch("http://127.0.0.1/react-project/backend-laravel/public/api/v1/products/get-last-products")
    const json = await response.json()
    console.log(json)
  }

  useEffect(() => {
    const config = {
      headers:
      {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json'
      }
    }
    repository()

    /*  ApiManager.get('products/get-last-products', config)
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.info(error)
          console.log(error);
          throw error;
        });*/
  }, []);
  return (
    <>
      <Navigation />
    </>
  );
};
export default Main;
