// Basic Three.js fragment shader
precision mediump float;

uniform sampler2D tDiffuse;

varying vec3 vNormal;
varying vec2 vUv;

void main() {

    gl_FragColor = texture2D(tDiffuse, vUv);
}
