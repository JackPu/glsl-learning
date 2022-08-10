#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
uniform float u_mouse;
uniform vec2 u_resolution;

void main() {
	vec2 st = u_mouse / u_resolution;
	gl_FragColor = vec4(st.x, st.y, 0, 1.0);
}
