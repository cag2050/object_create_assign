// Object.assign(target, ...sources) 用于合并对象；是浅拷贝。

let target = {
    a: '1',
    b: '2'
}

let source1 = {
    a: {},
    c: [1, 2, 3]
}

console.log(Object.assign(target, source1));