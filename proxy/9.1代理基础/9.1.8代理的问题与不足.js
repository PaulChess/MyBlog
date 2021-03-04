// 问题1,代理中的this
const target = {
  thisValEqualsProxy() {
    return this === proxy;
  }
}

const proxy = new Proxy(target, {});

console.log(target.thisValEqualsProxy()); // false

console.log(proxy.thisValEqualsProxy()); // true


// =========================
const vm = new WeakMap();

class User {
  constructor(userId) {
    vm.set(this, userId);
  }

  set id(userId) {
    vm.set(this, userId);
  }

  get id() {
    return vm.get(this);
  }
}

const user = new User(123);
console.log(user.id); // 123

const userInstanceProxy = new Proxy(user, {});
console.log(userInstanceProxy.id); // undefined

// 这是因为User实例一开始实用目标对象作为weakMap的键，代理对象却尝试从自身去获取，所以没获取到
// 修改, 把代理User实例改为代理User类本身，之后创建代理的实例就会以代理实例作为weakMap的键了
const UserClassProxy = new Proxy(User, {});
const proxyUser = new UserClassProxy(345);
console.log(proxyUser.id);

// ===================================================
// 问题2：代理与内部槽位
// 有些ES内置类型可能会依赖代理无法控制的机制，结果导致在代理商调用某些方法出错
// 比如: Date类型
// Date类型方法的执行依赖this值上的内部槽位[[NumberDate]]。代理对象上没有这个槽位，且这个槽位的值不能通过简单的get()和set()操作
// \n访问到，于是代理拦截后本应转发给目标对象的方法会抛出TypeError

const dateTarget = new Date();
const dateProxy = new Proxy(dateTarget, {});

console.log(dateProxy instanceof Date); // true
console.log(dateProxy.getDate()); // TypeError: 'this' is not a Date object