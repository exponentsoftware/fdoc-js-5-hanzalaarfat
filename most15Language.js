import axios from "axios";

async function mostSpoken_15Lang() {
  let api = `https://restcountries.com/v2/all`;

  const res = await axios.get(api);

  const data = res.data;
  let arr = [];
  for (let i of data) {
    for (let language of i.languages) {
      if (arr.includes(language.name) == false) {
        arr.push(language.name);
      }
    }
  }

  // console.log( arr)///all languages
  let arr2 = [];
  for (let l of arr) {
    let newObj = {};
    newObj["language"] = l;

    let counter = 0;
    for (let i of data) {
      for (let language of i.languages) {
        if (l == language.name) {
          counter++;
        }
      }
    }
    newObj["countries"] = counter;
    arr2.push(newObj);
  }
  let sorted_array = arr2.sort(function (x, y) {
    return y.countries - x.countries;
  });
  //top 15 array
  let top_15_countries = [];
  // let rev = sorted_array.reverse()
  for (let i = 0; i < 15; i++) {
    top_15_countries.push(sorted_array[i]);
  }
  console.log(top_15_countries);
}
mostSpoken_15Lang();
