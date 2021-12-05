const message = 'http://www.nowcoder.com?key=1&key=2&key=3&key=4&test1=4#hehe';
const sKey = 'key';

function getUrlParam(sUrl, sKey) {
  if (sKey !== undefined) {
    var reg = new RegExp(sKey + "=[0-9]", "g")
    let temp = sUrl.split('?')[1].split('#')[0].match(reg);
    if (temp !== null&temp !== '') {
      let str = temp.join('');
      let strResult = str.match(/(=\d+)/g);
      let newStr = strResult.join('');
      let result = newStr.match(/\d+/g);
      if (result.length === 1) {
        const [num] = result;
        return num;
      } else if (result.length === 0) {
        return ''
      } else
      return result;
    } else {
      return '';
    }
  }
    let temp = sUrl.split('?')[1].split('#')[0];
    if (temp !== null&&temp !== '') {
      let strResult = temp.match(/(=\d+)/g);
      let newStr = strResult.join('');
      let result = newStr.match(/\d+/g);
      return result;
    } else {
      return {};
    }
}

console.log(getUrlParam(message).join(''));

const newKey = 1;
console.log([1, 2, 3, 4].newKey);