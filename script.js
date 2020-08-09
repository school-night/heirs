"use strict"
;(function () {
  // play and pause videos on hover
  const videoTriggers = [
    ...document.querySelectorAll('[data-video-trigger]')
  ]
  videoTriggers.map(trigger => {
    const video = trigger.querySelectorAll("video")[0]
    trigger.addEventListener("mouseenter", e => {
      video.play()
    })
    trigger.addEventListener("mouseleave", e => {
      video.pause()
    })
  })
})()
