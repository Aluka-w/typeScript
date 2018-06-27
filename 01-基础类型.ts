// 布尔类型
let isTrue: boolean = false
console.log('boolean', isTrue)

// 数字, 兼容二进制 和 八进制
let count: number = 13
console.log('number', count)

// 字符串, 可以使用模板字符串
let myName: string = 'testString'
console.log(`string${myName}`)

// 数组 两种声明方式
// 一: 元素类型[]
let dataList: number[] = [1, 2, 3]
// 二: Array<元素类型>     泛型: 类比java
let arrList: Array<string> = ['bin.wang', 'chunxiao', 'jinyue'] 
console.log(`array: ${dataList}, 泛型: ${arrList}`)

// 元组 Tuple
let x: [string, number]
x = ['hello', 10]  // 必须一一对应
x[3] = 10
x[4] = 'world'  // 越界的元素, 只需要符合string 和 number 就可以了

// 枚举, 默认下标是0开始, 可以指定
enum Color {Red = 1, Green, Blue}
let c: Color = Color.Green
let ColorName: string = Color[1]
console.log('enum', ColorName)

// Any, 不预设类型, 未知类型
let anyNum: any = 6
let anyArr: any[] = [1, 'true', false]
let anyArry: Array<any> = [3, 'true', true]
console.log(anyNum)


// Void  当一个函数没有返回值时，你通常会见到其返回值类型是 void
// 一般搭配函数, 代表没有返回值, 变量只能赋值 undefined 和 null
function test (): void {
  console.log('void')
}
let voidNum: void = null
test()

// Never 类型 返回never的函数必须存在无法达到的终点
function infinite(): never {
  while (true) {
    
  }
}

// 类型断言
// 1️⃣  <>
let word: string = 'this is a'
let wordLength: number = (<string>word).length
// 2️⃣  as (在jsx语法中, as是常用的)
let wordL: number = (word as string).length
let wordTest: number = word.length
console.log('类型断言', wordL, wordLength, wordTest)