// const fetch = require("axios");
import axios from "axios";

const GetAllTypeLanguage = async () => {
  try {
    // let api = `https://restcountries.eu/rest/v2/all`;
    let api = `https://restcountries.com/v2/all`;
    const res = await axios.get(api);

    // for (let single in data.data) {} it return key

    const data = res.data;
    // console.log(data[0].languages);

    let arr = [];
    for (let ob of data) {
      for (let language of ob.languages) {
        // console.log(language)
        if (arr.includes(language.name) == false) {
          arr.push(language.name);
        }
      }
    }
    console.log("Total language: ", arr.length);
  } catch (error) {
    console.error(error);
    // console.log("somthing Error");
  }
};

GetAllTypeLanguage();
