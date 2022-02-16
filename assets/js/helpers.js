export const getCookie = cName => {
  const name = cName + "=";
  const cDecoded = decodeURIComponent(document.cookie); //to be careful
  const cArr = cDecoded.split('; ');
  let res;
  cArr.forEach(val => {
    if (val.indexOf(name) === 0) res = val.substring(name.length);
  })
  return res
}

export const createCookie = (cookieName, cookieValue, daysToExpire) => {
  var date = new Date();
  date.setTime(date.getTime() + (daysToExpire * 24 * 60 * 60 * 1000));
  document.cookie = cookieName + "=" + cookieValue + "; expires=" + date.toGMTString();
}

export const eraseCookie = (name) => {
  document.cookie = name + '=; Max-Age=-99999999;';
}