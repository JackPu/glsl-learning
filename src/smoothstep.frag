# ifdef GL_ES
precision mediump float;
# endif 

uniform vec2 resolution;
uniform vec2 mouse;
uniform float time;

float plot(vec2 st) {
  return smoothstep(0.1, 0.0, abs(st.y - st.x));
}

void main() {
  vec2 st = gl_FragCoord.xy/resolution;
  float y = st.x;
  vec3 color = vec3(y);
  float pct = plot(st);
  color = (1.0-pct)*color+pct*vec3(1.00,1.000,0.0);
  gl_FragColor = vec4(color, 1.0);
}
