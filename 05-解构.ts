// 对象 解构
const getObj = () => {
  return {
    brand: 'IBM',
    price: {
      price1: 100,
      price2: 400
    }
  }
}
// 解构必须 key 一一相同的名称
// 解构 brand: brand1 意味着 brand 即别名为 brand1
// 需要解构嵌套的key时
let {brand: brand1, price: {price2}} = getObj()
console.log(brand1, price2) // IBM, 400

// 数组解构
// 不解构的就 ',' 隔开即可
let arr1 = [1, 2, 3, 4]
let [num1, , ,num4] = arr1
console.log(num1) // 1
console.log(num4) // 4

// 解构表达式和 Rest 操作符一起使用
let tempArr = [1, 2, 3, 4]
const tempFn = ([num1, ...args]) => {
  console.log(num1) // 1
  console.log(args) // [2. 3. 4]
}
tempFn(tempArr)