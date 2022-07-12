const WordDictionary = function () {
  this.words = {}
}

// 添加字符串
WordDictionary.prototype.addWord = function (word) {
  if (this.words[word.length]) {
    this.words[word.length].push(word);
  } else {
    this.words[word.length] = [word];
  }
}

WordDictionary.prototype.search = function (word) {
  if (!this.words[word.length]) {
    return false;
  }
  const len = word.length;

  // 如果不含有'.' 那么就是普通搜素
  if (!word.includes('.')) {
    return this.words[len].includes(word);
  }

  // 否则就是正则表达式
  // 创建正则
  const reg = new RegExp(word);

  // 通过正则查找并返回查找结果
  return this.words[len].some((item) => {
    return reg.test(item);
  })
}


const wordDictionary = new WordDictionary();

wordDictionary.addWord("bad");
wordDictionary.addWord("dad");
wordDictionary.addWord("mad");
console.log(wordDictionary.search("pad"));
console.log(wordDictionary.search("bad"));
console.log(wordDictionary.search(".ad"));
console.log(wordDictionary.search("b.."));