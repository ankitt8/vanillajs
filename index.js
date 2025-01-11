// console.clear()
const temp = new Promise((res, rej) => {
  // res('hi');
  console.log('line 3')
  throw new Error('promise rejected');
  console.log('line 6')
});
console.log(temp)
temp.then(function onFulfilled(x) {
  console.log(x);
  // return x;
}, function onRejected(rej) {
  console.log(rej);
  return new Promise(function executor(resolve, reject) {
    reject('promise chain error')
  })
}).then(function onFulfilled(y) {
  console.log('y', y);
}, function onRejected(err) {
  console.log(err);
  
})