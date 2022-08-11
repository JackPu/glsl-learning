#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 resolution;
uniform vec2 mouse;
uniform float time;

void main() {

   gl_FragColor = vec4(abs(sin(time)), 1.0, 1.0 ,1.0);
}
