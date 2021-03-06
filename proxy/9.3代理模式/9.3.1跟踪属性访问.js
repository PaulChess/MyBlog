// 通过捕获get, set, has等操作，可以知道对象属性什么时候被访问、被查询。把实现响应捕获器的某个对象代理放到应用中，可以监控这个对象何时在何处被访问过

const user = {
  name: 'sjq'
};

const proxy = new Proxy(user, {
  get(target, property, receiver) {
    console.log(`Getting ${property}`);
    return Reflect.get(...arguments);
  },

  set(target, property, value, receiver) {
    console.log(`Setting ${property}=${value}`);
    return Reflect.set(...arguments);
  }
})

proxy.name;
proxy.age = 32;