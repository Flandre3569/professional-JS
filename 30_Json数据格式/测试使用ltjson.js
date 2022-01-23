import { localCache, sessionCache } from "./node_modules/ltjson/index.js";

const obj = {
  name: "mx",
  age: 18,
  friend: {
    name: "zhangsan",
    age: 19
  }
}

localCache.setCache("obj", obj);
const name = localCache.getCache("obj").name;
console.log(name);
sessionCache.setCache("obj", obj)
