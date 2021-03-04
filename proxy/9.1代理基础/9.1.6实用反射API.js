// 某些场景下优先实用反射API
/**
 * (1) 反射API并不限于捕获处理程序
 * (2) 大多数反射API方法在Object类型上有对应的方法
 */

 // Object上的方法适用于通用程序， 而反射方法适用于细粒度的对象控制与操作

 // 状态标记: 很多反射方法返回的布尔值，表示意图执行的操作是否成功

 // 初始代码
 const o = {};
 try {
   Object.defineProperty(o, 'foo', 'bar');
   console.log('success');
 } catch(e) {
   console.log('fail');
 }

 // 改造代码
 const o = {};
 if (Reflect.defineProperty(o, 'foo', {value: 'bar'})) {
   console.log('success');
 } else {
   console.log('fail');
 }

 // 提供状态标记的方法
 /**
  * 1. Reflect.defineProperty()
  * 2. Reflect.preventExtensions()
  * 3. Reflect.setPropertyOf()
  * 4. Reflect.set()
  * 5. Reflect.deleteProperty()
  */