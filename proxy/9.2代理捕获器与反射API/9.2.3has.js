// has捕获器会在 in 操作符中被调用  Reflect.has()

/**
 * 拦截的操作
 * 1. property in proxy
 * 2. property in Object.create(proxy)
 * 3. with(proxy) {(property);}
 * 4. Reflect.has(proxy, property)
 */
const myTarget = {};
const proxy = new Proxy(myTarget, {
  /**
   * @param {*} target 目标对象
   * @param {*} property 属性
   * @returns 必须返回布尔值，表示属性是否存在。非布尔值类型会被隐式转换为布尔值
   */
  has(target, property) {
    console.log('has()');
    return Reflect.has(...arguments);
  }
})

'foo' in proxy;

/**
 * 捕获器不变式
 * 1. 如果target.property存在且不可配置，则处理程序必须返回true
 * 2. 如果target.property存在且目标对象不可扩展，则处理程序必须返回true
 */