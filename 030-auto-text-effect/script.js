const textEl = document.getElementById('text')
const speedEl = document.getElementById('speed')
const text = 'Hello World! We Love Programming!'
let idx = 1
let speed = 300 / speedEl.value

writeTex()

function writeTex() {
    textEl.innerText = text.slice(0, idx)

    idx++

    if(idx > text.length) {
        idx = 1
    }

    setTimeout(writeTex, speed)
}

speedEl.addEventListener('input', (e) => speed = 300 / e.target.value)