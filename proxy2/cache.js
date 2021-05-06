const bankAccount = {
  balance: 10,
  name: 'sjq',
  get dollars() {
    console.log('calculating dollars');
    return this.balance * 3.43008459;
  }
}

let cache = {
  currentBalance: null,
  currentDollars: null
}

const handler = {
  get: function(target, prop) {
    // 用cache可以尽可能地省去重复沉重的计算
    if (prop === 'dollars') {
      let value = cache.currentBalance !== target.balance ? target[prop] : cache.currentDollars;
      cache["currentDollars"] = value;
      cache["currentBalance"] = target.balance;
      return value;
    }
    return target[prop];
  }
}

const wrappedBankAccount = new Proxy(bankAccount, handler);


console.log(wrappedBankAccount.dollars);
console.log(wrappedBankAccount.dollars);
console.log(wrappedBankAccount.dollars);
console.log(wrappedBankAccount.dollars);

// OUTPUT
// calculating dollars
// 34.3008459
// 34.3008459
// 34.3008459
// 34.3008459

// Analysis: 实际获取dollars的get函数只走了一次
// 只有当balance的值变化的时候才会重新做计算，其余情况都取的缓存

console.log("=========================")
wrappedBankAccount.balance = 20;
console.log(wrappedBankAccount.dollars);
console.log(wrappedBankAccount.dollars);
console.log(wrappedBankAccount.dollars);
console.log(wrappedBankAccount.dollars);