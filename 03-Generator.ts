/**
 *  Generator 函数
 *  控制函数的执行过程, 手动暂停和恢复代码进行
 *  * 声明generator 方法
 *  yield 代表暂停
 */ 

function* generatorFn (brand) {
  // 这里的代码块就是,无限次的去监听股票的价格
  while (true) {
    yield Math.random() * 100
  }
}
let getGenerator = generatorFn('IBM') // 必须有个赋值变量的过程, 否则无效
let price = 100
while (price > 15) {
  price = getGenerator.next().value // 遇到yield暂停, next() 执行下一步
  console.log('每次generator获得的值',price)
}
console.log('每次股票小于15时, 购买的价格', price)