const bankAccount = {
  name: 'BlackCodingCat',
  balance: 2021,
}

const handler = {
  /**
   * @param {*} target 目标对象
   * @param {*} prop 访问的目标对象属性
   * @param {*} receiver 接收者可以是代理，也可以是继承自代理的对象
   */
  get: function(target, prop, receiver) {
    if (prop === 'balance') {
      console.log(`Current Blance Of: ${target.name} Is: ${target.balance}`);
    }
    // 返回访问的属性值
    return target[prop];
  },

  set: function(obj, prop, value) {
    console.log(`Current Balance: ${obj.balance}, NewBalance: ${value}`);
    if (value < 0) {
      console.log("We don't allow Negative Balance!");
      // 更新值失败
      return false;
    }
    obj[prop] = value;
    return true;
  }
}

const wrappedBankAccount = new Proxy(bankAccount, handler);

wrappedBankAccount.balance-=2000; // 这个操作同时触发了get和set trap
wrappedBankAccount.balance-=50;