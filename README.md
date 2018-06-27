# TS 和 js
1. js 弱类型语言 而 TS强类型语言, 三大框架都做了ts的兼容

2. 当项目大起来的时候
    (1) Angular2: 直接用TS
    (2) React: 在使用context的时候 必须使用PropType 进行类型检查
    (3) Vue: props 也推荐声明数据的type
    (4) TS直接从开始就声明了数据类型, 可追溯, 严谨, 想java等强类型语言看齐, 未来的趋势

3. 开发环境(compiler), 线上, 线下
    (1) 线上: 直接去typeScript 官网编译转码(low)
    (2) 线下: 
        (1) 安装 TypeScript 全局包
        (2) tsc 文件名.ts   ==>  文件名.js

4. 优势
    (1) 语法检查, 语法提示
    (2) Angular2 的开发语言