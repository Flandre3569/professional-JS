// 第一种导入：普通导入，文件导出的名字是什么，导入的时候名字必须相同
// import { fName, fAge, fFoo, FPerson } from './foo.js';

// 第二种导入：导入时起别名
// import { fName as name, fAge as age, fFoo as foo } from './foo.js';

// 第三种导入：将导出的内容放到一个标识符中
import * as foo from './foo.js';


foo.fFoo();
console.log(foo.fName);
console.log(foo.fAge);
console.log(foo.fFoo);