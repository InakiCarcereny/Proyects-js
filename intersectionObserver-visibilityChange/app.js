const $video = document.querySelectorAll('video[data-video]');

const cb = (entries) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting) {
      entry.target.play()
    } else {
      entry.target.pause()
    }
  })

  window.addEventListener('visibilitychange', () => {
    document.visibilityState === 'visible'
    ? entry.target.play()
    : entry.target.pause()
  })
}

const observer = new IntersectionObserver(cb, {
  threshold: 0.5
})

$video.forEach((el) => observer.observe(el))