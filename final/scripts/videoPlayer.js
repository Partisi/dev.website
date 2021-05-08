// Video Player That Auth Plays
var videoClassElements = document.querySelectorAll('.generic-video-auto')
videoClassElements.forEach.call(videoClassElements, (item) => {
    item.addEventListener('mouseout', hideVideo, false);
    item.addEventListener('mouseover', hoverVideo, false);
})

function hoverVideo(e) {
    const videoSrc = e.srcElement
    videoSrc.muted = true
    videoSrc.play()
}

function hideVideo(e) {
    const videoSrc = e.srcElement
    videoSrc.muted = true
    videoSrc.pause()
}
