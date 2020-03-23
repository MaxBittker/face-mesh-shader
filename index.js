const { setupOverlay } = require("regl-shader-error-overlay");
setupOverlay();

const regl = require("regl")("#target", { pixelRatio: 0.75 });
const { setupWebcam } = require("./src/setup-facemesh.js");
let shaders = require("./src/pack.shader.js");
// const mat4 = require("gl-mat4");
// const bunny = require("bunny");
let { TRIANGULATION } = require("./src/triangulation");
let { paintFace } = require("./src/paint");

let vert = shaders.vertex;
let frag = shaders.fragment;

shaders.on("change", () => {
  console.log("update");
  vert = shaders.vertex;
  frag = shaders.fragment;
  let overlay = document.getElementById("regl-overlay-error");
  overlay && overlay.parentNode.removeChild(overlay);
});

const lastFrame = regl.texture();

function makeMesh() {
  // TRIANGULATION.map()
}

let paintElement = document.getElementById("paint"); //.getContext("2d");
let faceDetectionTexture;
//  = regl.texture(paintElement);

setupWebcam({
  regl,
  done: (webcam, { videoWidth, videoHeight, getKeyPoints }) => {
    faceDetectionTexture = regl.texture(paintElement);
    // faceDetectionTexture.resize(videoWidth, videoHeight);

    let drawTriangle = regl({
      uniforms: {
        webcam,
        videoResolution: [videoWidth, videoHeight],
        // Becomes `uniform float t`  and `uniform vec2 resolution` in the shader.
        t: ({ tick }) => tick,
        resolution: ({ viewportWidth, viewportHeight }) => [
          viewportWidth,
          viewportHeight
        ],
        scaledVideoResolution: ({ viewportWidth: vW, viewportHeight: vH }) => {
          let i;
          return (i =
            vW / vH > videoWidth / videoHeight
              ? [videoWidth * (vH / videoHeight), vH]
              : [vW, videoHeight * (vW / videoWidth)]);
        },
        backBuffer: lastFrame,
        faceDetection: faceDetectionTexture
      },

      frag: () => shaders.fragment,
      vert: () => shaders.vertex,
      attributes: {
        // Full screen triangle
        position: [
          [-1, 4],
          [-1, -1],
          [4, -1]
        ]
      },
      // Our triangle has 3 vertices
      count: 3
    });

    regl.frame(function(context) {
      let keyPoints = getKeyPoints() || [];
      // console.log(keyPoints);
      regl.clear({
        color: [0, 0, 0, 1]
      });
      // drawBunny();
      // if (keyPoints) {
      ctx = paintFace(keyPoints);
      faceDetectionTexture.subimage(ctx);
      // }

      drawTriangle();

      lastFrame({
        copy: true
      });
    });
  }
});
