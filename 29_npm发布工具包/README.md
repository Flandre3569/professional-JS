# 数据存储和json格式转化工具

## 基本理念
当我们从后端获取数据时，一般以json的格式进行接受，转化为对象格式，对象格式如果直接存储在localStorage中会以[Object Object]的字符串形式存储，所以我们在对象存储到localStorage中时，需要先转化为json格式，然后存储到localStorage中才会是正确形式的字符串，然后从localStorage中获取数据时，也需要将字符串形式重新转化为对象格式。

## 使用方法
``` javaScript
import localCache from 'ltjson'
```
然后调用localCache的方法即可。
> 共有四个方法:
- setCache
- getCache
- deleteCache
- clearCache


## 1.1.2版本新增session支持
```javaScript
import sessionCache from 'ltjson'
```

## 添加key(index)和length()方法支持。
> 新增后方法
- setCache(key, value) ---> 设置
- getCache(key) ---> 获取
- deleteCache(key) ---> 删除
- clearCache() ---> 清空
- key(index) ---> 通过索引值获取
- length() ---> 获取长度

**sessionCache方法的调用和localCache相同**