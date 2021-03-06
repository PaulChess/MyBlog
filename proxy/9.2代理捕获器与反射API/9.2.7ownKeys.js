// 在Object.keys()及类似方法中被调用

/**
 * 拦截操作
 * 1. Object.getOwnPropertyNames(proxy)
 * 2. Object.getOwnPropertySymbols(proxy)
 * 3. Object.keys(proxy)
 * 4. Reflect.ownKeys(proxy)
 */
const myTarget = { foo: 'bar' };

const proxy = new Proxy(myTarget, {
  /**
   * 
   * @param {*} target 
   * @returns 必须返回包含字符串或符号的可枚举对象
   */
  ownKeys(target) {
    console.log('ownKeys');
    return Reflect.ownKeys(...arguments);
  }
})

/**
 * 捕获器不变式
 * 1. 返回的可枚举对象必须包含target所有不可配置的自有属性
 * 2. 如果target不可扩展，则返回的可枚举对象必须准确地包含自有属性键
 */