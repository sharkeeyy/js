function controlledInvoke(n) {
  let number = n;
  return function() {
    if (number > 0) {
      number -= 1;
      console.log(n - number);
      return 'Invoke';
    } else {
      return null;
    }
  }
}


const invoker5 = controlledInvoke(5);

invoker5();
invoker5();
invoker5();
invoker5();
invoker5();
invoker5();
invoker5();
invoker5();
invoker5();
invoker5();