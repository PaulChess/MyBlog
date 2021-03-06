// has捕获器会在 in 操作符中被调用  Reflect.has()

const myTarget = {};
const proxy = new Proxy(myTarget, {
  /**
   * @param {*} target 目标对象
   * @param {*} property 属性
   * @param {*} value
   * @param {*} receiver 接收最初赋值的对象
   * 返回值: true表示成功; false表示失败， 严格模式下抛出TypeError
   */
  set(target, property) {
    console.log('has()');
    return Reflect.has(...arguments);
  }
})