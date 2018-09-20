function deepClone(initalObj, finalObj) {
    var obj = finalObj || {};
    for (var i in initalObj) {
        var prop = initalObj[i];        // �����໥���ö�������ѭ������initalObj.a = initalObj�����
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