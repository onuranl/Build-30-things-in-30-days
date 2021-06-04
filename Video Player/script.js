const player = document.querySelector('.player')
const video = player.querySelector('.viewer')
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

function togglePlay() {
    const result = video.paused ? 'play' : 'pause'
    video[result]()
}

function updateButton() {
    const icon = this.paused ? '►' : '❚ ❚'
    toggle.textContent = icon
}

function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100
    progressBar.style.flexBasis = `${percent}%`
}

function skip(e) {
    video.currentTime  += parseFloat(this.dataset.skip)
}

function change() {
    video[this.name] = this.value
}

function jump(e) {
    video.currentTime = (e.offsetX / progress.offsetWidth) * video.duration
}

video.addEventListener('click', togglePlay)
video.addEventListener('play', updateButton)
video.addEventListener('pause', updateButton)
video.addEventListener('timeupdate', handleProgress)

toggle.addEventListener('click', togglePlay)

progress.addEventListener('click', jump)
progress.addEventListener('mouseup', jump)

skipButtons.forEach(button => {
    button.addEventListener('click', skip)
})

ranges.forEach(range => {
    range.addEventListener('change', change)
})
ranges.forEach(range => {
    range.addEventListener('mousemove', change)
})


