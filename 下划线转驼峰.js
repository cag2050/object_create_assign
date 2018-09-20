function underlineTocamel(str) {
    return str.replace(/_(\w)/g, function (all, $1) {
        return $1.toUpperCase()
    })
}

let underlineStr = 'a_bbb_ccc'

console.log(underlineTocamel(underlineStr));


