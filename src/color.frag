#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 resolution;
uniform float time;

vec3 color1 = vec3(1.0, 0.0, 0.0);
vec3 color2 = vec3(0.0, 1.0, 0.0);

void main() {
  vec3 color = vec3(0.0);
  float pct = abs(sin(time));
  color = mix(color1, color2, pct);
  gl_FragColor = vec4(color, 1.0);
}
