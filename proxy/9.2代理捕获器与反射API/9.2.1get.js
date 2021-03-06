// get()捕获器在获取属性值的操作中被调用
// 对应的反射APi方法为Reflect.get()


/**
 * get方法拦截的操作
 * 1. proxy.property
 * 2. proxy[property]
 * 3. Object.create(proxy)[property]
 * 4. Reflect.get(proxy, property, receiver)
 */

const myTarget = {};

const proxy = new Proxy(myTarget, {
  /**
   * @param {*} target 目标对象
   * @param {*} property 属性
   * @param {*} receiver 代理对象或继承代理对象的对象
   * @returns 返回值无限制
   */
  get(target, property, receiver) {
    console.log('get()');
    return Reflect.get(...arguments);
  }
})

proxy.foo;

/**
 * 注: 捕获器不变式
 * 1. 如果target.property不可写且不可配置，则处理程序返回的值必须与target.property匹配
 * 2. 如果target.property不可配置且[[Get]]特性为undefined, 则处理程序返回的值也必须是undefined
 */