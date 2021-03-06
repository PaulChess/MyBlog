// 在Object.setPrototypeOf()方法中调用

/**
 * 拦截操作
 * 1. Object.setPrototypeOf(proxy)
 * 2. Reflect.setPrototypeOf(proxy)
 */
let myTarget = { foo: 'bar' };

const proxy = new Proxy(myTarget, {
  /**
   * 
   * @param {*} target 
   * @param {*} prototype: target的替代原型，如果是顶级原型则为null
   * @returns 必须返回布尔值，表示原型赋值是否成功
   */
  setPrototypeOf(target, prototype) {
    console.log('setPrototypeOf');
    return Reflect.setPrototypeOf(...arguments);
  }
})

Object.setPrototypeOf(proxy, Object);

/**
 * 捕获器不变式
 * 如果target不可扩展，则唯一有效的prototype参数就是Object.getPrototypeOf(target)的返回值
 */