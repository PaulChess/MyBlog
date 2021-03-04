// 捕获处理程序的行为必须遵循捕获器不变式
// 不可定义一些反常的行为

const target = {};

// 目标对象有一个不可配置且不可写的属性
Object.defineProperty(target, 'foo', {
  configurable: false,
  writable: false,
  value: 'bar'
})

const handler = {
  get() {
    return 'qux';
  }
}

const proxy = new Proxy(target, handler);

// 此时会报错
// TypeError: 'get' on proxy: property 'foo' is a read-only and non-configurable data property on the proxy target but the proxy did not return its actual value 
console.log(proxy.foo);