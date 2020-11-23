import axios from "axios";


const handleCors = "https://cors-anywhere.herokuapp.com";


export const fetchProducts = (price, sortby) => {
  console.log(price, sortby)


  return axios
    .get(`${handleCors}/https://utility-be.herokuapp.com/api/products`, {
        params: {
            price,
            sortby
        }
    })
    .then(({ data }) => {
      return data;
    });
};
