function setCookie(key, value) {
  const jsonValue = value;
  const jsonKey = key;

  localStorage.setItem(jsonKey, JSON.stringify(jsonValue));
}

/*function getCookie(cookie_name) {
  let matches = document.cookie.match(
    new RegExp(
      "(?:^|; )" +
        cookie_name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
        "=([^;]*)"
    )
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
}*/

function getCookie(cookie_name) {
  const cookie = cookie_name;

  return JSON.parse(localStorage.getItem(cookie));
}

function deleteCookie(key) {
  const jsonKey = key;

  localStorage.removeItem(jsonKey);
}

function getUserID(key) {
    return JSON.parse(localStorage.getItem("User").korisnik_id)
  }

exports.getCookie = getCookie;
exports.setCookie = setCookie;
exports.deleteCookie = deleteCookie;
