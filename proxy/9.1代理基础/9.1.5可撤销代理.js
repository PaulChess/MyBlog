// 中断代理对象与目标对象的联系
// revocable()方法支持撤销关联， 此操作不可逆

// que: 如果有需要定义多个proxy怎么办呢？

const target = {
  foo: 'bar'
}

const handler = {
  get() {
    return 'intercepted';
  }
}

const { proxy, revoke } = 
Proxy.revocable(target, handler);

console.log(proxy.foo); // intercepted
console.log(target.foo); // bar

revoke();

console.log(proxy.foo);