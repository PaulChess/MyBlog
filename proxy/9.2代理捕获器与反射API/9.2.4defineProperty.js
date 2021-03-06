// defineProperty捕获器会在Object.defineProperty()中被调用。

const myTarget = {};

const proxy = new Proxy(myTarget, {
  /**
   * @param {*} target 
   * @param {*} property 
   * @param {*} descriptor 包含可选的enumerable、configurable、writable、value、get、set定义的对象
   * @returns 必须返回布尔值。表示是否被成功定义
   */
  defineProperty(target, property, descriptor) {
    console.log('defineProperty');
    return Reflect.defineProperty(...arguments);
  }
})

Object.defineProperty(proxy, 'foo', {value: 'bar'});

console.log(proxy.foo);
console.log(myTarget.foo); // todo question: why the result is also bar?

/**
 * 捕获器不变式
 * 1. 如果目标对象不可扩展，则无法定义属性
 * 2. 如果目标对象有一个可配置的属性，则不能添加同名的不可配置属性
 * 3. 如果目标对象有一个不可配置的属性，则不能添加同名的可配置属性
 */