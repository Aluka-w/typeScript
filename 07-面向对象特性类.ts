// class 关键字, 替代构造函数

// 访问控制符(属性和方法)
// public 默认就有, 类的内部和外部都能被访问
// private 私有的, 只允许内部访问
// protected 受保护的 类的内部 和 子类 能访问

// 类的构造器(构造函数), 只有类被实例化的时候执行一次, 且外部不能直接访问
// 构造器中必须设置 访问控制符需要设置清楚
class Person {
  constructor (public hobby: string) {
    console.log('构造器', hobby)
  }
  public name
  protected sex
  private age
  work () {
    console.log('父类在干活')
  }
}
// let p1 = new Person('basketball')
// p1.name = 'bin.wang'


// 类的继承: 继承父类的所有的属性和方法
// 关键词: extends 继承类
// super 
class Me extends Person {
  constructor(hobby: string, public code: string) {
    super(hobby)                // 先继承父类的属性
    console.log('子类构造器')     // 实例化就会执行
  }
  private myWork () {           // private 关键字, 只能内部使用
    console.log('子类工作')
  }
  doSomething () {               // 非构造器的, 默认public
    super.work()                 // 继承父类的方法
    this.myWork()                // 调用子类内部的私有方法
  }
}
let m = new Me('football', '9527')
m.doSomething()

// 泛型
let workers: Array<Person> = []             // workers是一个数组, 数组内容应该符合 Person 类
workers[0] = new Person('zhangsan')
workers[1] = new Me('bin.wang', '110')      // 数组第二项, 是一个Person的子类