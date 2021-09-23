import axios from "axios";

const lagestTop10ContryInArea = async () => {
  let api = `https://restcountries.com/v2/all`;

  try {
    const res = await axios.get(api);

    let data = res.data;
    let arr = []; // object

    console.log(typeof data); // object

    for (let i of data) {
      let tempObj = {};
      tempObj["country"] = i.name; // like { country: 'Afghanistan', area: 652230 }
      tempObj["area"] = i.area;
      arr.push(tempObj);
    }

    let sorted_array = arr.sort(function (x, y) {
      return y.area - x.area;
    });

    let top_10 = [];
    for (let i = 0; i < 10; i++) {
      top_10.push(sorted_array[i]);
    }
    console.log(top_10);
  } catch (error) {
    console.error(error);
  }
};

lagestTop10ContryInArea();
