precision highp float;

uniform vec2 resolution;  // viewport size in pixels
uniform float time;       // elapsed time (seconds)

float hash(vec2 p) {
    // simple 2D hash → [0,1)
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
}

void main() {
    // get pixel coordinates
    vec2 uv = gl_FragCoord.xy / resolution.xy;

    // scale to control "square" size (lower = bigger blocks)
    float scale = 50.0;
    vec2 cell = floor(uv * scale);

    // slowly changing random state per cell
    float t = floor(time * 0.5); // controls blink speed
    float rnd = hash(cell + t);

    // on/off threshold
    float blink = step(0.5, rnd);

    // output color
    gl_FragColor = vec4(vec3(blink), 1.0);
}