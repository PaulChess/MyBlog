// 在Object.getPrototypeOf()方法中被调用

/**
 * 拦截操作
 * 1. Object.getPrototypeOf(proxy)
 * 2. proxy.__proto__
 * 3. Object.prototype.isPropertyOf(proxy)
 * 4. Reflect.getPrototypeOf(proxy)
 */
let myTarget = { foo: 'bar' };

const proxy = new Proxy(myTarget, {
  /**
   * 
   * @param {*} target 
   * @returns 必须返回对象或者null
   */
  getPrototypeOf(target) {
    console.log('getPrototypeOf');
    return Reflect.getPrototypeOf(...arguments);
  }
})

console.log(Object.getPrototypeOf(proxy));

/**
 * 捕获器不变式
 * 如果target不可扩展，则Object.getPrototypeOf(proxy)唯一有效的返回值就是Object.getPrototypeOf(target)的返回值
 */