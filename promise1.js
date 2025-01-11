// promises error can't be catch using try catch
// you need to await for the promise to catch using try catch

// function processing() {
//   // throw new Error('line 2')
//   return Promise.reject("Something went wrong!");

//   // return new Promise((res, rej) => {
//   //   res('temp')
//   //   throw new Error('line 5')

//   // })
// }

// async function init() {
//   try {
//     return await processing();

//   } catch (err) {
//     console.log("Error in processing.");
//   }
// }

// init().then(() => {
//   console.log("End");
// })


// implement promise.all
/**
 * @param {Array} iterable
 * @return {Promise<Array>}
 */
async function promiseAll(iterable) {
  result = new Array(iterable.length);
  let error = null;
  for (let i = 0; i < iterable.length; i += 1) {
    try {
      const pr = iterable[i];
      let val = pr;
      if(pr instanceof Promise) {
        val = await iterable[i];  
      }
      
      result[i] = val;
    } catch (err) {
      error = err;
      break;
    }
  }
  return new Promise((res, rej) => {
    

    // assuming all promises will be successful
    if (error) rej(error);
    res(result);
  });
  
}

// Resolved example.
const p0 = Promise.resolve(3);
const p1 = 42;
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('foo');
  }, 100);
});

promiseAll([p0, p1, p2]).then(val => {
  console.log(val);
}); // [3, 42, 'foo']
