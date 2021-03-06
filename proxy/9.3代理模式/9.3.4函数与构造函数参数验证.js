// 跟保护和验证对象属性类似，也可以对函数和构造函数进行审查。
// 比如，可以让函数只接收某种类型的值

// 函数
function median(...nums) {
  return nums.sort()[Math.floor(nums.length / 2)];
}

const proxy = new Proxy(median, {
  apply(target, thisArg, argumentList) {
    for (const arg of argumentList) {
      if (typeof arg !== 'number') {
        throw 'Non-number argument provided';
      }
    }
    return Reflect.apply(...arguments);
  }
})

// test
console.log(proxy(4, 7, 1)); // 4
// console.log(proxy(4, '7', 1)); //Error: 'Non-number argument provided'


// 构造函数
class User {
  constructor(id) {
    this._id = id;
    console.log(this._id);
  }
}

const classProxy = new Proxy(User, {
  construct(target, constructorList, newTarget) {
    if (arguments[0] === undefined) {
      throw 'User cannot be instantiated without id';
    } else {
      return Reflect.construct(...arguments);
    }
  }
});

new classProxy(1);
new classProxy(); // 能进入construct构造函数，但是不会赋值