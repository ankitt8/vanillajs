

function groupBy(collection, iterate) {
    let result = {};
    collection.forEach((ele) => {
        let value;

        if(typeof iterate === 'function') {
            value = iterate(ele);
        } else if (typeof ele === 'object' && ele !== null && typeof iterate === 'string') {
            // groupby property
            value = ele[iterate];
        } else if (typeof ele !== 'object' && iterate === 'string') {
            value = ele[iterate];
        }

        if(value) {
            if(result[value]) result[value].push(ele);
            else result[value] = [ele];
        }
    })


    return result;

}

// const numbers = [6, 4, 6, 8, 3, 5, 4, 3, 9, 8];
//
// const groupedByOddEven = groupBy(numbers, (num) => (num % 2 === 0 ? 'even' : 'odd'));
//
// console.log(groupedByOddEven);

const words = ['apple', 'banana', 'apricot', 'blueberry', 'cherry'];

const groupedByFirstChar = groupBy(words, (word) => word.charAt(0));

console.log(groupedByFirstChar);

const users = [
    { name: 'John', age: 25 },
    { name: 'Jane', age: 25 },
    { name: 'Tom', age: 30 },
    { name: 'Lucy', age: 30 },
    { name: 'Jack', age: 20 }
];

const groupedByAge = groupBy(users, 'age');

console.log(groupedByAge);

