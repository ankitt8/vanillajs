document.querySelector('#startBtn').addEventListener('click', function () {
    let timerInMs = 0;
    const div = document.createElement('div');
    div.classList.add('progressbarContainer')
    const div2  = document.createElement('div');
    div2.classList.add('progressbar');
    div.appendChild(div2)

    setTimeout(() => {
        document.body.appendChild(div)
    }, timerInMs);

})
