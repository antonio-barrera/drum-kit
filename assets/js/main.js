const keys = Array.from(document.querySelectorAll('div[data-key]'));
const audios = Array.from(document.querySelectorAll('audio[data-key]'));

function playSound(e) {
    const key = keys.find(k => k.dataset.key == e.keyCode);
    const audio = audios.find(a => a.dataset.key == e.keyCode);
    if (!audio) return;
    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
}

function removeTransition(e) {
    if (e.propertyName != 'transform') return;
    this.classList.remove('playing');
}

window.addEventListener('keydown', playSound);
keys.forEach(key => key.addEventListener('transitionend', removeTransition));