// 接口
/**
 * 建立某个代码约定, 使得其他开发者在调用某个方法 或 创建新的类的时候必须遵循接口所定义的代码约定
 * interface
 * 
 */
// interface 关键字声明接口, 只做声明, 不做赋值
interface IPerson {
  name: string
  age: number
}
// 类
class Person {
  // public 关键字, 类内部外部都可用
  // 声明config 的类型, 必须符合 IPerson 的接口, 即必须拥有声明的属性
  constructor (public config: IPerson) {

  }
}

let p = new Person({
  name: 'bin.wang',
  age: 19
})


// interface 声明方法
interface Animal {
  eat ()
}
// implements 实现这个接口的类, 必须要实现这个方法
class sheep implements Animal {
  eat () {
    console.log('实现接口的类, 必须实现接口的方法')
  }
}