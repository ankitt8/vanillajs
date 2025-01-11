
    const pr1 = new Promise((res, rej) => {
        setTimeout(() => {
            res('pr1 resolved')
        }, 1000)
    });
    const pr2 = new Promise((res, rej) => {
        setTimeout(() => {
            res('pr2 resolved')
        }, 2000)
    });
    const pr3 = new Promise((res, rej) => {
        setTimeout(() => {
            rej('pr3 resolved')
        }, 3000)
    });
    const promises = [pr1, pr2, pr3];
    // const promiseAllRes = Promise.all(promises);
    // promiseAllRes.then((res) => {
    //     console.log(res);
    // })

promiseAllPolyfill = async function(arrPromises) {
    let result = [];
    // arrPromises.forEach((pr, index) => {
    //     pr.then((prresult) => {
    //         result[index] = prresult;
    //     }).catch((err) => {
    //         return new Promise((res, rej) => {
    //             rej(err);
    //         });
    //     });
    // });
    //
    // return new Promise((res, rej) => {
    //     setTimeout(() => {
    //         res(result);
    //     },0);
    //
    // });
    try {
        for(const pr of arrPromises) {
            result.push(await pr);
        }
        return new Promise((res, rej) => {
            res(result);
        });
    } catch (e) {
        return new Promise((res, rej) => {
            rej(e);
        });
    }


}
    const promiseAllRes = promiseAllPolyfill(promises);
    promiseAllRes.then((res) => {
        console.log(res);
    })
