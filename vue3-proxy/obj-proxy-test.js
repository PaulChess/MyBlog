// 监听对象属性的增删操作

let person = {
  name: 'bob'
}

let personProxy = new Proxy(person, {
  get(target, prop) {
    console.log('getter');
    return target[prop];
  },
  set(target, prop, value) {
    console.log('setter');
    return Reflect.set(target, prop, value);
  }
})

// 删除对象属性
delete personProxy.name;

// 增加对象属性
personProxy.age = 20;

console.log(personProxy);
console.log(person)

