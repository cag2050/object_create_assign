// Object.create()��������һ���¶���ʹ�����еĶ�����Ϊ�´����Ķ����__proto__��
let oldObj = {
    a: 'aaa',
    b: [1, 2, 3]
}

let newObj = Object.create(oldObj)

console.log(newObj.__proto__);