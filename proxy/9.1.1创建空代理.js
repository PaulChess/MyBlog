// 创建空代理
const target = {
	id: "target"
};

const handler = {};

const proxy = new Proxy(target, handler);

// id属性访问的是同一个值
console.log(proxy.id);
console.log(proxy.id === target.id);

// 给目标属性赋值会反映在两个对象上
target.id = "foo";
console.log(target.id);
console.log(proxy.id);

// 给代理属性赋值也会反映在两个对象上
proxy.id = "bar";
console.log(target.id);
console.log(proxy.id);

// hasOwnProperty()方法在两个地方都会应用到目标对象
console.log(target.hasOwnProperty("id"));
console.log(proxy.hasOwnProperty("id"));

// Proxy.prototype是undefined, 所以也不能使用instanceof操作符
// Function has non-object prototype 'undefined' in instanceof check
// console.log(target instanceof Proxy);
// Function has non-object prototype 'undefined' in instanceof check
// console.log(proxy instanceof Proxy);

// 严格相等可以用来区分代理和目标
// false
console.log(target === proxy);