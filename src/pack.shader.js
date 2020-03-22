const glslify = require("glslify");
const path = require("path");

module.exports = require("shader-reload")({
  vertex: glslify(path.resolve(__dirname, "vertex.glsl")),
  fragment: glslify(path.resolve(__dirname, "fragment.glsl"))
});
