function camelToUnderline (str) {
    return str.replace(/([A-Z])/g, '_$1').toLowerCase()
}

let camelStr = 'aaBbbCcc'

console.log(camelToUnderline(camelStr));


