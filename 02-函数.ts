// 参数类型 a: string
// 参数默认值 b: number = 4
// 可选参数 c?: boolean
// 返回值类型: 无返回值 void  
function test (a: string, b: number=4, c?: boolean): void {
  console.log(a)
  console.log(b)
  console.log(c)
}
test('hello')

// Rest 和 Spread 操作符
// 用来声明任意数量的方法参数
function fn (...args) {
  args.forEach(item => {
    console.log(item)
  })
}
fn(1, 2, 3, 4)

// generator函数: 
// 控制函数的执行过程, 手动暂停和恢复代码进行
// * 声明generator 方法
// yield 代表暂停 
function* doSomething () {
  console.log('start')
  yield
  console.log('finish')
}