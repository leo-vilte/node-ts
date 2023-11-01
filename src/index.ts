
import axios from 'axios';


var xml2js = require('xml2js');

console.log(process.env.PORT);
console.log("fsds2222");

  export const getDecrypto = (): any => {
    const url = 'https://api.decrypto.la/1.0/derivatives/prices';
    return  axios.get(url).then( data =>
        console.log(data.data)
    );
  };




  getDecrypto();

  console.log("nd");