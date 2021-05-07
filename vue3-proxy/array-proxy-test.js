const person = ['bob', 'paul'];

const wrappedPerson = new Proxy(person, {
  get(target, prop) {
    console.log('getter');
    return target[prop];
  },
  set(target, prop, value) {
    console.log('setter');
    return Reflect.set(target, prop, value);
  }
});

console.log(wrappedPerson[0]);


wrappedPerson[1] = 'cccc';

wrappedPerson.push('hhhhh');

// 对proxy对象进行操作会改变原对象的值
console.log('person');
console.log(person);

console.log('wrappedPerson');
console.log(wrappedPerson);
