const isPrime = (n) => {
  let isprime = null;
  if (n <= 2) {
    console.log("nor prime neither composite");
  } else {
    for (let i = 2; i < n; i++) {
      n % 2 === 0 ? (isprime = false) : (isprime = true);
      if (isprime === false) {
        break;
      }
    }
  }
  if (isprime) {
    return "Prime";
  } else {
    return "Not prime";
  }
};
console.log(isPrime(29));
console.log("fsdbfjhasdbfjhs");
console.log(isPrime(12));
