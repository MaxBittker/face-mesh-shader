let facemesh = require("@tensorflow-models/facemesh");
let tf = require("@tensorflow/tfjs-core");

let model;
let video = null;
async function loadModel() {
  // Load the MediaPipe facemesh model.
  model = await facemesh.load({ maxFaces: 1 });
}
let keypoints;
async function predictionLoop() {
  if (!model || !video) {
    window.requestAnimationFrame(predictionLoop);

    return null;
  }

  // Pass in a video stream (or an image, canvas, or 3D tensor) to obtain an
  // array of detected faces from the MediaPipe graph.
  const predictions = await model.estimateFaces(video);
  // console.log(tf.backend());
  // console.log(model);
  // console.log(facemesh);
  // debugger;
  if (predictions.length > 0) {
    for (let i = 0; i < predictions.length; i++) {
      // console.log(predictions[i].annotations);
      keypoints = predictions[i].scaledMesh;

      // Log facial keypoints.
      for (let i = 0; i < keypoints.length; i++) {
        const [x, y, z] = keypoints[i];

        // console.log(`Keypoint ${i}: [${x}, ${y}, ${z}]`);
      }
    }
  }
  window.requestAnimationFrame(predictionLoop);
}
function getKeyPoints() {
  return keypoints;
}
loadModel();
function setupWebcam(options) {
  const regl = options.regl;

  function startup() {
    video = document.getElementById("video");
    let startbutton = document.getElementById("start");
    let paint = document.getElementById("paint");
    let target = document.getElementById("target");
    var trackingStarted = false;

    function tryGetUserMedia() {
      navigator.mediaDevices
        .getUserMedia({
          video: true,
          audio: false
        })
        .then(gumSuccess)
        .catch(e => {
          console.log("initial gum failed");
        });
      // video.play();
      startbutton.hidden = true;
    }

    tryGetUserMedia();

    startbutton.onclick = function() {
      console.log("play!");
      tryGetUserMedia();
      // startVideo();
    };

    function gumSuccess(stream) {
      if ("srcObject" in video) {
        video.srcObject = stream;
      } else {
        video.src = window.URL && window.URL.createObjectURL(stream);
      }
      video.onloadedmetadata = function() {
        console.log("metadata loaded");
        const webcam = regl.texture(video);

        const { videoWidth, videoHeight } = video;

        var w = videoWidth;
        var h = videoHeight;
        video.height = h;
        video.width = w;
        paint.height = h;
        paint.width = w;
        target.height = h;
        target.width = w;
        predictionLoop();

        regl.frame(() => webcam.subimage(video));
        options.done(webcam, {
          videoWidth,
          videoHeight,
          getKeyPoints
        });
      };
    }
    // function adjustVideoProportions() {
    //   // resize overlay and video if proportions of video are not 4:3
    //   // keep same height, just change width
    //   debugger
    //   var proportion = video.videoWidth/video.videoHeight;
    //   video_width = Math.round(video_height * proportion);
    //   video.width = video_width;
    // }
    video.onresize = function() {
      // adjustVideoProportions();
      // if (trackingStarted) {
      // ctracker.stop();
      // ctracker.reset();
      // ctracker.start(video);
      // }
    };
    video.addEventListener(
      "canplay",
      function(ev) {
        video.play();
      },
      false
    );
  }

  window.onload = startup;
}

module.exports = { setupWebcam };
