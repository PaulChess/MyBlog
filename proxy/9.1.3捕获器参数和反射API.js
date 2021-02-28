// const target = {
// 	foo: "bar"
// };

// const handler = {
// 	// get(trapTarget, property, receiver) {
// 	// 	console.log(trapTarget === target);
// 	// 	console.log(property);
// 	// 	console.log(receiver);
// 	// 	// console.log(receiver === proxy);
// 	// }

// 	get() {
// 		// eslint-disable-next-line prefer-rest-params
// 		return Reflect.get(...arguments);
// 	}
// };

// const proxy = new Proxy(target, handler);

// // proxy.foo;

// console.log(proxy.foo);
// console.log(target.foo);

const target = {
	baz: "qux",
	foo: "bar",
};

const handler = {
	get(trapTarget, property) {
		let decorator = "";
		if (property === "foo") {
			decorator = "!!!";
		}
		// eslint-disable-next-line prefer-rest-params
		return Reflect.get(...arguments) + decorator;
	}
};

const proxy = new Proxy(target, handler);

console.log(proxy.baz);
console.log(proxy.foo);