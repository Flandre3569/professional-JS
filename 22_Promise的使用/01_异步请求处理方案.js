
// 用异步函数模仿网络请求
function returnData(url, successCallback, failureCallback) {
  setTimeout(() => {
    if (url === 'mingxuan3569.xyz') {
      successCallback('请求成功');
    } else {
      failureCallback('请求失败');
    }
  }, 3000)
}

const returnDa = returnData('mingxuan3569.xyz', (res) => {
  console.log(res);
}, (err) => {
  console.log(err);
});
