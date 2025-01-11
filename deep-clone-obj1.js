// iteration 1
// function deepClone(obj, result = {}) {
//     if(typeof obj !== 'object' || typeof obj === null) return obj;


//     for(const [key, value] of Object.entries(obj)) {
//         const valueTypeOf = typeof value;
//         if(valueTypeOf === 'object' && Array.isArray(value)) {
//             result[key] = value.map(deepClone);
//         }
//         if(valueTypeOf === 'object' && !Array.isArray(value)) {
//             result[key] = deepClone(value);
//         }else {
//             result[key] = value;
//         }
//     }
//     return result;
// }

// const obj1 = {name: 'ankit', details: {srname :undefined, temp:[1,2,3, {temp1: null}]}};
// const deepCloneObj1 = deepClone(obj1);
// deepCloneObj1.srname = 'tiwarii';
// console.log(obj1, deepCloneObj1);

// handling circular reference is tough
function deepClone(obj) {
    if(typeof obj !== 'object' || obj === null) return obj;

    if(Array.isArray(obj)) {
        return obj.map(deepClone);
    }

    const result = {};
    for(const [key, value] of Object.entries(obj)) {
        result[key] = deepClone(value);
    }
    return result;
}

const obj1 = {name: 'ankit', details: {srname :undefined, temp:[1,2,3, {temp1: null}]}};
const deepCloneObj1 = deepClone(obj1);
deepCloneObj1.details.srname = 'tiwarii';
console.log(obj1, deepCloneObj1);
