
import axios from 'axios';
import { error } from 'console';
import fetch from 'node-fetch';


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

  async function getUsers() {
    try {
      // 👇️ const response: Response
      const response = await fetch('https://api.decrypto.la/1.0/derivatives/prices', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Authorization': 'Basic '+btoa('username:password'), 
        },
      });
  
      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }
  
      // 👇️ const result: GetUsersResponse
      const result = (await response.json());
  
      console.log('result is: ', JSON.stringify(result, null, 4));
  
      return result;
    } catch (error) {
      if (error instanceof Error) {
        console.log('error message: ', error.message);
        return error.message;
      } else {
        console.log('unexpected error: ', error);
        return 'An unexpected error occurred';
      }
    }
  }
  
  getUsers();


  export const getDecrypto = (): any => {
    const url = encodeURI('https://api.decrypto.la/1.0/derivatives/prices');
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



  console.log("await getDecrypto()");