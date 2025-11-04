// Basic Three.js vertex shader
// Receives position and normal, supports standard mesh transformations.

varying vec3 vNormal;
varying vec2 vUv;

void main() {
    vUv = uv;
    vNormal = normal;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
