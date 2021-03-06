// 通过代理可以把运行时原本不相关的部分联系到一起。这样就可以实现各种模式，从而让不同的代码互操作。
// 1. 比如，可以将被代理的类绑定到一个全局实例集合，让所有创建的实例都被添加到这个集合中

const userList = [];

class User {
  constructor(name) {
    this._name = name;
  }
}

const proxy = new Proxy(User, {
  construct() {
    const newUser = Reflect.construct(...arguments);
    userList.push(newUser);
    return newUser;
  }
})

console.log(new proxy('july'));
console.log(new proxy('keven'));
console.log(new proxy('liLi'));
console.log('userList');
console.log(userList);


// 2. 还可以把集合绑定到一个事件分派程序，每次插入新实例时都会发送消息

const otherList = [];

function emit(newValue) {
  console.log(newValue);
}

const otherProxy = new Proxy(otherList, {
  set(target, property, value, receiver) {
    const result = Reflect.set(...arguments);
    if (result) {
      emit(Reflect.get(target, property, receiver));
    }
    return result;
  }
});

otherProxy.push('Join')
otherProxy.push('bob');