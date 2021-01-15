import messageComp from "components/message";
const randomString = (length=32, chars='0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ') => {
  let result = '';
  for (let i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
  return result; 
}

const shorterString = strings => {
  if(strings){
    let newStr = strings.length > 15 ? strings.substring(0,5)+ '...' + strings.substring(strings.length-9,strings.length) : strings;
    return newStr;
  }
}

const nFormatter = (num, digits = 2) => {
  if(!Number.isInteger(num)) {
    messageComp({text : 'Must integer/float value for number formatter'});
    return false;
  }
  const si = [
    { value: 1, symbol: "" },
    { value: 1E3, symbol: "k" },
    { value: 1E6, symbol: "M" },
    { value: 1E9, symbol: "G" },
    { value: 1E12, symbol: "T" },
    { value: 1E15, symbol: "P" },
    { value: 1E18, symbol: "E" }
  ];
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  let i;
  for (i = si.length - 1; i > 0; i--) {
    if (num >= si[i].value) {
      break;
    }
  }
  return (num / si[i].value).toFixed(digits).replace(rx, "$1") + si[i].symbol;
}

export { shorterString,randomString,nFormatter };