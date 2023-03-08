export function getUserMedia(constrains: MediaStreamConstraints) {
  if (navigator.mediaDevices?.getUserMedia) {
    return navigator.mediaDevices.getUserMedia(constrains)
  } else if (navigator.webkitGetUserMedia) {
    return navigator.webkitGetUserMedia(constrains)
  } else if (navigator.mozGetUserMedia) {
    return navigator.mozGetUserMedia(constrains)
  } else if (navigator.getUserMedia) {
    return navigator.getUserMedia(constrains)
  }
}

function success(stream: MediaStream, video: HTMLVideoElement) {
  return new Promise<void>((resolve, reject) => {
    video.srcObject = stream
    video.onloadedmetadata = () => {
      video.play()
      resolve()
    }
  })
}

export function getUserMediaStream(videoNode: HTMLVideoElement) {
  return getUserMedia({
    audio: false,
    video: {
      facingMode: {
        exact: 'environment'
      }
    }
  })
    .then((res) => {
      return success(res, videoNode)
    })
    .catch((err: Error) => {
      console.log('访问用户媒体失败', err.name, err.message)
      return Promise.reject()
    })
}
