// Importamos Three.js desde el CDN
import * as THREE from 'https://cdn.skypack.dev/three@0.158.0';

// Crear la escena
const scene = new THREE.Scene();

// Crear la cámara
const camera = new THREE.PerspectiveCamera(
  75, window.innerWidth / window.innerHeight, 0.1, 1000
);
camera.position.z = 5;

// Crear el renderer
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#miLienzo'),
  antialias: true
});
renderer.setSize(window.innerWidth, window.innerHeight);

// Crear un cubo
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshStandardMaterial({ color: 0x0077ff });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Luz
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(5, 5, 5);
scene.add(light);

// Animación
function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate();
