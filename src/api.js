import axios from "axios";


const handleCors = "https://cors-anywhere.herokuapp.com";


export const fetchProducts = (price) => {
    console.log(price);
  return axios
    .get(`${handleCors}/https://utility-be.herokuapp.com/api/products`, {
        params: {
            "price": price
        }
    })
    .then(({ data }) => {
      return data;
    });
};
