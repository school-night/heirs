"use strict"
;(function () {
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )
  // alert(isMobile)

  const videoTriggers = [...document.querySelectorAll("[data-video-trigger]")]
  videoTriggers.map(trigger => {
    const video = trigger.querySelectorAll("video")[0]
    const audio = trigger.querySelectorAll("audio")[0]
    if (isMobile) {
      // play all videos
      video.play()
    } else {
      // play and pause videos on hover
      trigger.addEventListener("mouseenter", e => {
        video.play()
        audio.play()
      })
      trigger.addEventListener("mouseleave", e => {
        video.pause()
        audio.pause()
      })
    }
  })
  // autoplay audio hack
  var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
  if (!isChrome){
      $('#iframeAudio').remove()
  }
  else {
      $('#playAudio').remove() // just to make sure that it will not have 2x audio in the background 
  }
})()
