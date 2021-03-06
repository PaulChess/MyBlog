// 在delete操作符中被调用

/**
 * 拦截操作
 * 1. delete target.property
 * 2. delete target[property]
 * 3. Reflect.deleteProperty(proxy, property)
 */
const myTarget = { foo: 'bar' };

const proxy = new Proxy(myTarget, {
  /**
   * 
   * @param {*} target 
   * @param {*} property 
   * @returns 必须返回布尔值，表示删除属性是否成功
   */
  deleteProperty(target, property) {
    console.log('deleteProperty');
    return Reflect.deleteProperty(...arguments);
  }
})

delete proxy.foo;


/**
 * 捕获器不变式
 * 1. 如果自有的target.property存在且不可配置，则处理程序不能删除这个属性
 */