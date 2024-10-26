varying vec2 vUv;

void main() {
  vec4 localPos = vec4(position, 1.0);

  gl_Position = projectionMatrix * modelViewMatrix * localPos;

  vUv = uv;

}