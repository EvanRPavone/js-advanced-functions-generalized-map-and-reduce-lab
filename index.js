// Add your functions here
function map(srcArray, fn) {
    let newArr = [];
    for (let i = 0; i < srcArray.length; i++) {
        const element = fn(srcArray[i])
        newArr.push(element)
    }
    return newArr
}

function reduce(srcArray, fn, start = 0){
    let t = (!!start ? start : srcArray[0])
    let i = (!!start ? 0 : 1)

    for (;i < srcArray.length; i++) {
        t = fn(srcArray[i], t)
    }
    return t
}