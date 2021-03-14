// 初始化Map实例，可以给Map构造函数传一个可迭代对象
// 需要包含键值对数组, 可迭代对象中的每个键值对都会按照迭代顺序插入到新映射实例中

// 1. 使用嵌套数组初始化实例
const m1 = new Map([
  ['key1', 'val1'],
  ['key2', 'val2'],
  ['key3', 'val3']
]);
console.log(m1.size);
console.log(m1);

// 2. 使用自定义迭代器初始化映射
const m2 = new Map({
  [Symbol.iterator]: function*() {
    yield ['key1', 'val1'];
    yield ['key2', 'val2'];
    yield ['key3', 'val3'];
  }
})
console.log(m2.size);
console.log(m2);

// 3. 映射期待的键值对，无论是否提供
const m3 = new Map([[]]);
console.log(m3.has(undefined)); // true
console.log(m3.get(undefined)); // undefined


/**
 * apis
 * set()
 * get()
 * has()
 * delete()
 * clear()
 * size
 */
const m = new Map();
console.log(m.has('firstName')); // false
console.log(m.get('firstName')); // undefined

m.set('firstName', 'Nickolas').set('firstName', 'zhaosi');
console.log(m.has('firstName')); // true
console.log(m.get('firstName')); // zhaosi  第二个set的键值对会把第一个直接覆盖掉
console.log(m.size); // 1

m.delete('firstName');
console.log(m.has('firstName'));
console.log(m.size);

m.clear(); // 全部清除


/**
 * 与Object只能使用`数值`、`字符串`、`符号`作为键不同，
 * Map可以使用任何js数据类型作为键，
 * Map内部使用了`SameValueZero`比较操作，基本上相当于使用严格对象相等的标准来检查键的匹配性。
 * 与Object类似，映射的值是没有限制的。
 */

const map = new Map();
const functionKey = function() {};
const symbolKey = Symbol();
const objectKey = new Object();

m.set(functionKey, 'functionValue');
m.set(symbolKey, 'SymbolValue');
m.set(objectKey, 'objectKey')

console.log(m.get(functionKey)); // functionValue
console.log(m.get(symbolKey)); // SymbolValue
console.log(m.get(objectKey)); // objectKey

// SameValueZero比较以为着独立实例不冲突
console.log(m.get(function() {})); // undefined




const map2 = new Map();
const objKey = {},
      objVal = {},
      arrKey = [],
      arrVal = [];

m.set(objKey, objVal);
m.set(arrKey, arrVal);

objKey.foo = 'foo';
objVal.bar = 'bar';
arrKey.push('foo');
arrVal.push('bar');

console.log(map2.get(objKey)); // {bar: 'bar'}
console.log(map2.get(arrKey)); // ['bar']
