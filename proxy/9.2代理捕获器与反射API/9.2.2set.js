// set捕获器在设置值时会调用，对应反射API为Reflect.set()

/**
 * 拦截操作:
 * 1. proxy.property = value
 * 2. proxy[property] = value
 * 3. Object.create(proxy)[property] = value
 * 4. Reflect.set(proxy, property, value, receiver)
 */
const myTarget = {};

const proxy = new Proxy(myTarget, {
  /**
   * @param {*} target 目标对象
   * @param {*} property 属性
   * @param {*} value
   * @param {*} receiver 接收最初赋值的对象
   * 返回值: true表示成功; false表示失败， 严格模式下抛出TypeError
   */
  set(target, property, value, receiver) {
    console.log('set()');
    return Reflect.set(...arguments);
  }
})

proxy.foo = 'bar';

/**
 * 捕获器不变式
 * 1. 如果target.property是不可写且不可配置，则不能修改目标属性的值
 * 2. 如果target.property不可配置且[[Set]]特性为undefined, 则不能修改目标属性的值。在严格模式下，处理程序中返回false会抛出TypeError
 */