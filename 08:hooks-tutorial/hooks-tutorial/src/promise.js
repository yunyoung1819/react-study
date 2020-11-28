function increase(number) {
    const promise = new Promise((resolve, reject) => {
        // resolve는 성공, reject는 실패
        setTimeout(() => {
            const result = number + 10;
            if (result > 50) {
                const e = new Error('NumberToBig');
                return reject(e);
            }
            resolve(result);
        }, 1000);
    });
    return promise;
}

increase(0)
    .then(number => {
        // Promise에서 resolved된 값은 .then을 통해서 받아올 수 있음
        console.log(number);
        return increase(number);    // Promise를 리턴하면
    }).then(number => {
    // 또 .then으로 처리 가능
    console.log(number);
    return increase(number);
    }).then(number => {
        console.log(number);
        return increase(number);
    }).then(number => {
        console.log(number);
        return increase(number);
    }).then(number => {
        console.log(number);
        return increase(number);
    })
    .catch(e => {
        // 도중에 에러가 발생한다면 .catch를 통해 알 수 있음
        console.log(e);
    });