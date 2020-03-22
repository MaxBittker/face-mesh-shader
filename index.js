const { setupOverlay } = require("regl-shader-error-overlay");
setupOverlay();

const regl = require("regl")({ pixelRatio: 0.75 });
const { setupWebcam } = require("./src/setup-facemesh.js");
let shaders = require("./src/pack.shader.js");
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

setupWebcam({
  regl,
  done: (webcam, { videoWidth, videoHeight, getKeyPoints }) => {
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
        backBuffer: lastFrame
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
      let keyPoints = getKeyPoints();
      // console.log(keyPoints);
      regl.clear({
        color: [0, 0, 0, 1]
      });
      drawTriangle();
      lastFrame({
        copy: true
      });
    });
  }
});
