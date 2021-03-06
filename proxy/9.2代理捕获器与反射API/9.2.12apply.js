// 在调用函数时被调用

/**
 * 拦截操作
 * 1. proxy(...argumentsList)
 * 2. Function.prototype.apply(thisArg, argumentList)
 * 3. Function.prototype.call(thisArg, ...argumentList)
 * 4. Reflect.apply(target, thisArgument, argumentList)
 */
let myTarget = () => {};

const proxy = new Proxy(myTarget, {
  /**
   * 
   * @param {*} target 
   * @param {*} thisArg 调用函数时的this参数
   * @param  {...any} argumentsList 调用函数时的参数列表
   * @returns 无限制
   */
  apply(target, thisArg, ...argumentsList) {
    console.log('apply()');
    return Reflect.apply(...arguments);
  }
})

proxy();

/**
 * 捕获器不变式
 * 1. target必须是一个函数对象
 */