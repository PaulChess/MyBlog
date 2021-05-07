Vue2.x中，实现响应式使用的API是Object.defineProperty来做数据劫持。
Object.defineProperty的缺陷:
* 无法原生监听数组的变化，需要做特殊处理
* 必须遍历对象的每一个属性
* 无法监听属性的增加和删除操作（因此vue2提供了Vue.set和Vue.delete API）

1. proxy 数组监听:
```javascript
const person = ['bob', 'paul'];

const wrappedPerson = new Proxy(person, {
  get(target, prop) {
    console.log('getter');
    return target[prop];
  },
  set(target, prop, value) {
    console.log('setter');
    return Reflect.set(target, prop, value);
  }
});

console.log(wrappedPerson[0]);
wrappedPerson[1] = 'cccc';
wrappedPerson.push('hhhhh');
```

2. proxy 监听对象属性的增加和删除
代码和上面类似

3. proxy 深层遍历嵌套的对象


参考文章:
[Vue3.0 Proxy浅谈](https://www.cnblogs.com/tommymarc/p/14445347.html?content_source_url=https://github.com/vue3/vue3-News)