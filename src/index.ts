
import axios from 'axios';


var xml2js = require('xml2js');

console.log(process.env.PORT);
console.log("fsds2222");


  const axiosConfig = {
    headers: {
      Accept: 'application/xml',
      'Content-Type': undefined,
    },
  };
  export const getDecrypto = (): any => {
    const url = 'https://api.decrypto.la/1.0/derivatives/prices';
    return  axios(url, {
        method: 'GET',
        withCredentials: false
      }).then(async (response) => {
        console.log(response);
    });
  };




  getDecrypto().then(
    async data => {
        console.log(data);
      }
  )

  console.log("await getDecrypto()");