import orginJSONP from 'jsonp'

export default function jsonp(url, data, option) {
  url += (url.indexOf('?') < 0 ? '?' : '&') + param(data);
  return new Promise((resolve, reject) => {
    orginJSONP(url, option, (err, data) => {
      if (!err) {
        resolve(data)
      } else {
        reject(err)
      }
    })
  })
}

export function param(data) {
  let url = '';
  for (var k in data) {
    let val = data[k] !== undefined ? data[k] : '';
    url += '&' + k + '=' + encodeURIComponent(val);
  }
  return url ? url.substr(1) : '';
}