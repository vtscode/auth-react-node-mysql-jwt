import moment from 'moment';

const initURL = process.env.REACT_APP_BASE_URL;
const initialEndpoint = '/admin';
const defaultPathDomain = initURL+initialEndpoint;
const noImagePath = 'assets/logo.svg';
// convert tgl
const formatDateInput = (format = 'YYYY-MM-DD') => format;
const formDateInputValue = (tgl = new Date(), format ='') => moment(tgl, format ? format : formatDateInput()); // output : Object { _isAMomentObject: true, ...}
const formDateDisplayValue = (tgl = new Date(), format ='') => moment(tgl).format(format ? format : formatDateInput()); // output : 2020-11-30
// convert number
const numberFormat = (params,type ='') => type === 'uang' ? `Rp${new Intl.NumberFormat('id-ID', {}).format(params)},00` : new Intl.NumberFormat('id-ID', {}).format(params);
const roundedNumber = (number, decimalPlaces = 2) => Number(Math.round(number + "e" + decimalPlaces) + "e-" + decimalPlaces);
const colorGenerator = (num = 5) => {
  let colors = [];
  for (let index = 0; index < num; index++) {
    colors.push("#"+(Math.random()*0xFFFFFF<<0).toString(16)); 
  }
  return colors;
};
const titleNameByPathUrl = (path) => {
  if(path){
    return path.substring(1,path.length).split('-').map(x => (x.charAt(0).toUpperCase() + x.substring(1,x.length) )).join(' ');
  }
}
const appendScript = (scriptToAppend) => {
	const script = document.createElement("script");
	script.src = scriptToAppend;
	script.async = true;
	document.head.appendChild(script);
};
const removeScript = (scriptToremove) => {
  let allsuspects=document.getElementsByTagName("script");
  for (let i=allsuspects.length; i>=0; i--){
    if (allsuspects[i] && allsuspects[i].getAttribute("src")!==null
    && allsuspects[i].getAttribute("src").indexOf(`${scriptToremove}`) !== -1 ){
      allsuspects[i].parentNode.removeChild(allsuspects[i]);
    }
  }
}
export { 
  initURL, initialEndpoint, 
  formDateInputValue,removeScript,
  formatDateInput, defaultPathDomain,
  formDateDisplayValue, appendScript,
  colorGenerator, titleNameByPathUrl,
  numberFormat,noImagePath,roundedNumber,
};