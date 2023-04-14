uniform float uDecreaseVolume;
uniform float uTime;

varying vec2 vUv;
varying float vFillEdge;



void main() {

    vec4 modelPosition = modelMatrix * vec4(position, 1.0);
    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;

    gl_Position = projectedPosition;

    vUv = uv;
    // we shift our model up to achieve decreasing volume by coloring 
    vFillEdge = modelPosition.y  + uDecreaseVolume;


}