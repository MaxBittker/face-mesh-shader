# webcam-shader-boilerplate

This is an opinionated starter repo for writing fragment shader code that interacts with webcam input in the browser!

`npm run start` to start the devserver.

Annotated dependency list:

- `regl`: Declarative wrapper over WebGL state machine. A regl command is analogous to a react component. We have a single command, `drawTriangle`.

- `glslify`: Enables importing libraries from node_modules, aka `#pragma glslify: hsv2rgb = require('glsl-hsv2rgb')`. Makes GLSL modular & fun.

- `glsl-hsv2rgb`: An example of a glslify library. Does some fancy math to convert between color spaces, and does it with branchless logic.

- `clmtrackr`: JS face detection! allows you to pass in facial feature coordinates to your shaders.

- `shader-reload-cli`: Opinionated wrapper around budo (and browserify) with support for live-reloading shaders

## more glslify libraries to consider (adapted from the [stackgl wiki](https://github.com/stackgl/stackgl.github.io/wiki))

- [glsl-specular-beckmann](https://github.com/stackgl/glsl-specular-beckmann)
- [glsl-specular-cook-torrance](https://github.com/stackgl/glsl-specular-cook-torrance)
- [glsl-diffuse-oren-nayar](https://github.com/stackgl/glsl-diffuse-oren-nayar)
- [glsl-diffuse-lambert](https://github.com/stackgl/glsl-diffuse-lambert)
- [glsl-specular-ward](https://github.com/stackgl/glsl-specular-ward)
- [glsl-specular-gaussian](https://github.com/stackgl/glsl-specular-gaussian)
- [glsl-specular-phong](https://github.com/stackgl/glsl-specular-phong)
- [glsl-specular-blinn-phong](https://github.com/stackgl/glsl-specular-blinn-phong)
- [glsl-perturb-normal](https://github.com/stackgl/glsl-perturb-normal)
- [glsl-face-normal](https://github.com/stackgl/glsl-face-normal)
- [glsl-checker](https://github.com/mattdesl/glsl-checker)
- [glsl-earth](https://github.com/mattdesl/glsl-earth)
- [glsl-easings](https://github.com/stackgl/glsl-easings)
- [matcap](https://github.com/hughsk/matcap)
- [glsl-inverse](https://github.com/stackgl/glsl-inverse)
- [glsl-determinant](https://github.com/stackgl/glsl-determinant)
- [glsl-transpose](https://github.com/stackgl/glsl-transpose)
- [glsl-frobenius](https://github.com/stackgl/glsl-frobenius)
- [glsl-look-at](https://github.com/stackgl/glsl-look-at)
- [glsl-camera-ray](https://github.com/stackgl/glsl-camera-ray)
- [glsl-raytrace](https://github.com/stackgl/glsl-raytrace)
- [glsl-sdf-normal](https://github.com/stackgl/glsl-sdf-normal)
- [glsl-sdf-sphere](https://github.com/stackgl/glsl-sdf-sphere)
- [glsl-sdf-box](https://github.com/stackgl/glsl-sdf-box)
- [glsl-sdf-primitives](https://github.com/marklundin/glsl-sdf-primitives)
- [glsl-sdf-ops](https://github.com/marklundin/glsl-sdf-ops)
- [glsl-ruler](https://github.com/stackgl/glsl-ruler)
- [glsl-turntable-camera](https://github.com/stackgl/glsl-turntable-camera)
- [glsl-combine-smooth](https://github.com/stackgl/glsl-combine-smooth)
- [glsl-luma](https://github.com/hughsk/glsl-luma)
- [glsl-gamma](https://github.com/stackgl/glsl-gamma)
- [glsl-aastep](https://github.com/stackgl/glsl-aastep)
- [glsl-dither](https://github.com/hughsk/glsl-dither)
- [glsl-noise](https://github.com/hughsk/glsl-noise)
- [glsl-fractal-brownian-noise](https://github.com/maxbittker/glsl-fractal-brownian-noise)
- [glsl-worley](https://github.com/Erkaman/glsl-worley)
- [glsl-random](https://github.com/mattdesl/glsl-random)
- [glsl-fog](https://github.com/hughsk/glsl-fog)
- [glsl-fxaa](https://github.com/mattdesl/glsl-fxaa)
- [glsl-lut](https://github.com/mattdesl/glsl-lut)
- [glsl-range](https://github.com/hughsk/glsl-range)
- [glsl-scale-linear](https://github.com/stackgl/glsl-scale-linear)
- [glsl-scale-log](https://github.com/stackgl/glsl-scale-log)
- [glsl-square-frame](https://github.com/hughsk/glsl-square-frame)
- [glsl-cornell-box](https://github.com/mattdesl/glsl-cornell-box)
- [glsl-read-float](https://github.com/mikolalysenko/glsl-read-float)
- [glsl-smooth-min](https://github.com/stackgl/glsl-smooth-min)
- [glsl-film-grain](https://github.com/mattdesl/glsl-film-grain)
- [glsl-hash-blur](https://github.com/stackgl/glsl-hash-blur)
- [glsl-fast-gaussian-blur](https://github.com/Jam3/glsl-fast-gaussian-blur)
- [glsl-halftone](https://github.com/stackgl/glsl-halftone)
- [glsl-crosshatch-filter](https://github.com/mattdesl/glsl-crosshatch-filter)
- [glsl-ascii-filter](https://github.com/mattdesl/glsl-ascii-filter)
- [glsl-hsv2rgb](https://github.com/hughsk/glsl-hsv2rgb)
- [glsl-hsl2rgb](https://github.com/Jam3/glsl-hsl2rgb)
- [glsl-blend-overlay](https://github.com/Jam3/glsl-blend-overlay)
- [glsl-blend-soft-light](https://github.com/mattdesl/glsl-blend-soft-light)
- [glsl-map](https://github.com/msfeldstein/glsl-map)
- [glsl-edge-detection](https://github.com/msfeldstein/glsl-edge-detection)
- [glsl-atmosphere](https://github.com/wwwtyro/glsl-atmosphere)
- [glsl-godrays](https://github.com/Erkaman/glsl-godrays)
- [glsl-cos-palette](https://github.com/Erkaman/glsl-cos-palette)
- [glsl-gradient-palette](https://github.com/Erkaman/glsl-gradient-palette)
- [glsl-vignette](https://github.com/TyLindberg/glsl-vignette)
- [glsl-solid-wireframe](https://github.com/rreusser/glsl-solid-wireframe)
- [glsl-domain-coloring](https://github.com/rreusser/glsl-domain-coloring)
- [glsl-sat](https://github.com/realazthat/glsl-sat)
- [glsl-numerify](https://github.com/realazthat/glsl-numerify)
- [glsl-quad](https://github.com/realazthat/glsl-quad)
- [glsl-gaussian](https://github.com/realazthat/glsl-gaussian)
- [glsl-zoom](https://github.com/realazthat/glsl-zoom)
- [screen-projected-lines](https://github.com/substack/screen-projected-lines)
- [glsl-fft](https://github.com/rreusser/glsl-fft)
- [glsl-rfft](https://github.com/rreusser/glsl-rfft)
