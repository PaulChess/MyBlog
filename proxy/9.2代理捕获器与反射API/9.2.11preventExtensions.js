// 在Object.preventExtensions()中被调用

/**
 * 拦截操作
 * 1. Object.preventExtensions(proxy)
 * 2. Reflect.preventExtensions(proxy)
 */
let myTarget = { foo: 'bar' };

const proxy = new Proxy(myTarget, {
  /**
   * 
   * @param {*} target 
   * @returns 必须返回布尔值，表示target是否已经不可扩展
   */
  preventExtensions(target) {
    console.log('preventExtensions');
    return Reflect.preventExtensions(...arguments);
  }
})

console.log(Object.preventExtensions(proxy));

/**
 * 捕获器不变式
 * 1. 如果Object.isExtensions(proxy)是false, 则处理程序必须返回true
 */