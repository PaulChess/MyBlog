// proxy 深层遍历

let person = {
  name: {
    a: '111111111'
  }
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

console.log(personProxy.name.a);

personProxy.name.a = 'sjq';

// { name: { a: 'sjq' } }
console.log(personProxy);
console.log(person)