const obj = {}
Object.defineProperty(obj, 'key', {
    value: 'value',
    writable: false
})

obj.key = 'newKey'

console.log(obj.key);


const arr = [2,4,6,8]

const res = arr.every((el) => el % 2)
console.log(res)

console.log(foo)

foo()

var foo = function() {return 3}