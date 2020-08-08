"use strict"
;(function () {
  // play and pause videos on hover
  const videoContainers = [
    ...document.getElementsByClassName("video-container"),
  ]
  videoContainers.map(container => {
    const video = container.querySelectorAll("video")[0]
    container.addEventListener("mouseenter", e => {
      video.play()
    })
    container.addEventListener("mouseleave", e => {
      video.pause()
    })
  })
})()
