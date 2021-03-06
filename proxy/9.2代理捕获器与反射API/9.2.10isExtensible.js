// 在Object.isExtensible()中被调用

/**
 * 拦截操作
 * 1. Object.isExtensible(proxy)
 * 4. Reflect.isExtensible(proxy)
 */
let myTarget = { foo: 'bar' };

const proxy = new Proxy(myTarget, {
  /**
   * 
   * @param {*} target 
   * @returns 必须返回布尔值，表示target是否可扩展
   */
  isExtensible(target) {
    console.log('isExtensible');
    return Reflect.isExtensible(...arguments);
  }
})

console.log(Object.isExtensible(proxy));

/**
 * 捕获器不变式
 * 1. 如果target可扩展，则处理程序必须返回true
 * 2. 如果target不可扩展，则处理程序必须返回false
 */