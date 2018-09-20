// Object.create()方法创建一个新对象，使用现有的对象作为新创建的对象的__proto__。
let oldObj = {
    a: 'aaa',
    b: [1, 2, 3]
}

let newObj = Object.create(oldObj)

console.log(newObj.__proto__);