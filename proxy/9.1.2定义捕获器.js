const target = {
	foo: "bar"
};

const handler = {
	// 捕获器
	get() {
		return "handler override";
	}
};

const proxy = new Proxy(target, handler);

console.log(target.foo);
console.log(proxy.foo);

console.log(target["foo"]);
console.log(proxy["foo"]);

console.log(target.foo);
console.log(Object.create(proxy)["foo"]);