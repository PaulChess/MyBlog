// 所有赋值操作都会触发set捕获器，所以可以根据赋值决定是允许还是拒绝赋值

const target = {
  onlyNumbersGoHere: 0
};

const proxy = new Proxy(target, {
  set(target, property, value) {
    if (typeof value !== 'number') {
      return false;
    } else {
      return Reflect.set(...arguments);
    }
  }
})

// test
proxy.onlyNumbersGoHere = 1;
console.log(proxy.onlyNumbersGoHere);
proxy.onlyNumbersGoHere = '2'; // 不会被赋值
console.log(proxy.onlyNumbersGoHere);
