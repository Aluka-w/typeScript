// 声明了参数是字符串的集合, 参数个数未知
function myReset (...args: Array<string>) {
  args.forEach(item => {
    console.log(item)
  })
}
myReset('he', 'jj', 'jay')
