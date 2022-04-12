let video = document.getElementById("video");
let webcam = navigator.mediaDevices.getUserMedia();
let canvas = document.getElementById("canvas");
let capture = document.getElementById("capture");
// console.dir(navigator.mediaDevices.getUserMedia);
if (webcam) {
  navigator.mediaDevices
    .getUserMedia({
      video: true,
      audio: true,
    })
    .then(function (stream) {
      video.srcObject = stream;
    })
    .catch(function (err) {
      console.log(err);
    });
}
let context = canvas.getContext("2d");
capture.addEventListener("click", function () {
  context.drawImage(video, 0, 50, 400, 300);
});
