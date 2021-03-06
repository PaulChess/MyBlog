// getOwnPropertyDescriptor捕获器会在Object.getOwnPropertyDescriptor()中被调用

const myTarget = { foo: 'bar' };

/**
 * 拦截操作
 * 1. Object.getOwnPropertyDescriptor(proxy, property)
 * 2. Reflect.getOwnPropertyDescriptor(proxy, property)
 */
const proxy = new Proxy(myTarget, {
  /**
   * 
   * @param {*} target 
   * @param {*} property 
   * @returns 必须返回对象，或者属性不存在时返回undefined
   */
  getOwnPropertyDescriptor(target, property) {
    console.log('getOwnPropertyDescriptor');
    return Reflect.getOwnPropertyDescriptor(...arguments);
  }
})


// { value: 'bar', writable: true, enumerable: true, configurable: true }
console.log(Object.getOwnPropertyDescriptor(proxy, 'foo'));

/**
 * 捕获器不变式
 * 1. 如果自有的target.property存在且不可配置，则处理程序必须返回一个表示该属性存在的对象
 * 2. 如果自有的target.property存在且target不可扩展，则处理程序必须返回一个表示该属性存在的对象
 * 3. 如果自有的target.property不存在且target不可扩展，则处理程序必须返回undefined表示该属性不存在
 * 4. 如果target.property不存在，则处理程序不能返回表示该属性可配置的对象
 */