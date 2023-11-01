
import axios from 'axios';


var xml2js = require('xml2js');

console.log(process.env.PORT);
console.log("fsds2222");


  const axiosConfig = {
    Cookie: "",
    xsrfCookieName: '', // default
    xsrfHeaderName: '', // default
    headers: {
      Accept: 'application/xml',
      'Content-Type': undefined,
    },
  };
  export const getDecrypto = (): any => {
    const url = 'https://api.decrypto.la/1.0/derivatives/prices';
    return  axios.get(url, axiosConfig).then(async (response) => {
        console.log(response);
      return await new Promise((resolve, reject) => {
        const parser = new xml2js.Parser();
        parser.parseString(response.data, (err, result) => {
          if (err) {
            reject(err);
          } else {
            const prices = result.GetPriceBalanceResponseDto;
            resolve({
              compra: prices.highestLongPrice[0],
              venta: prices.lowestShortPrice[0],
            });
          }
        });
      });
    });
  };




  getDecrypto().then(
    async data => {
        console.log(data);
      }
  )

  console.log("await getDecrypto()");