const time = document.querySelector('time');
setInterval(clock, 1000);

function clock() {
    const now = new Date();
    const h = now.getHours();
    const m = now.getMinutes();
    const s = now.getSeconds();

    const hours = h < 10 ? '0' + h : h;
    const minutes = m < 10 ? '0' + m : m;
    const seconds = s < 10 ? '0' + s : s;

    time.innerText = '${hours}:${minutes}:${seconds}';
}