
import axios from 'axios';
import { error } from 'console';


var xml2js = require('xml2js');

console.log(process.env.PORT);
console.log("fsds2222");


  const axiosConfig = {
    Cookie: "",
    xsrfCookieName: '', // default
    xsrfHeaderName: '', // default
    headers: {
      Accept: 'application/json',
      'Accept-Encoding': 'gzip, deflate, br',
      'Content-Type': undefined,
      'Connection': 'close'
    },
  };
  export const getDecrypto = (): any => {
    const url = 'https://api.decrypto.la/1.0/derivatives/prices';
    return  axios.get(url).then(async (response) => {
      
      console.log(response);
      console.log("---------------------")
      console.log(response.status);
      console.log("---------------------")
      console.log(response.data);
    }).catch(error => {
      console.error("Error", error);
    })
  };




  getDecrypto().then(
    async data => {
        console.log(data);
      }
  )

  console.log("await getDecrypto()");