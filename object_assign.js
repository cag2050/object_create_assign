// Object.assign(target, ...sources) ���ںϲ�������ǳ������

let target = {
    a: '1',
    b: '2'
}

let source1 = {
    a: {},
    c: [1, 2, 3]
}

console.log(Object.assign(target, source1));