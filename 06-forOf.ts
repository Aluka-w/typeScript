// forEach  数组遍历不能被 break 打断
// for in   循环对象的key
// for of   循环对象(数组)key 对应的值, 可以被打断 

let tempArray = [1, 2, 3, 4]
for (const val of tempArray) {
  if(val > 2){
    break
  }
  console.log(val)
}

// for of 可以用在字符串上
let str = 'hello world'
for (const n of str) {
  console.log(n)
}