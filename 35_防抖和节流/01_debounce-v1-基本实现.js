// 最基本的防抖函数
function debounce(fn, delay) {

  let timer = null;

  const _debounce = function () {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn()
    }, delay)
  }

  return _debounce;
}

