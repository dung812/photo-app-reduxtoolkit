// api/productApi.js
import axiosClient from "./axiosClient";

const productApi = {
  getAll: (params) => {
    const url = "/products";
    return axiosClient.get(url, { params });
  },
//   getAll: (params) => {
//     const url = "/products";
//     return axiosClient.get(url, { 
//         params,
//         baseURL: 'https://abc.com',
//         headers: {
//             'testing': 'test1'
//         }
//      });
//   },
  getProduct: (id) => {
    const url = `/products/${id}`;
    return axiosClient.get(url);
  },
  // edit, remove, ...
}
export default productApi;
