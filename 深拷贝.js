function deepClone(initalObj, finalObj) {
    var obj = finalObj || {};
    for (var i in initalObj) {
        var prop = initalObj[i]; // 避免相互引用对象导致死循环，如initalObj.a = initalObj的情况
        if (prop === obj) {
            continue;
        }
        if (typeof prop === 'object') {
            obj[i] = (prop.constructor === Array) ? prop : Object.create(prop);
        } else {
            obj[i] = prop;
        }
    }
    return obj;
}

var initalObj = {a: ['1', {b: 'bbb'}]}

console.log(deepClone(initalObj));
