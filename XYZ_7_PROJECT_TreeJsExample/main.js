// 1. Configuración inicial
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
    75, // Campo de visión (FOV)
    window.innerWidth / window.innerHeight, // Relación de aspecto
    0.1, // Plano cercano
    1000 // Plano lejano
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 2. Crear un cubo
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshPhongMaterial({ 
    color: 0x00ff00,
    shininess: 100 
});
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// 3. Añadir luz (¡sin luz no se ve el material!)
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(1, 1, 1);
scene.add(light);

// 4. Posicionar la cámara
camera.position.z = 5;

// 5. Función de animación
function animate() {
    requestAnimationFrame(animate);
    
    // Rotar el cubo
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    
    renderer.render(scene, camera);
}

// 6. Manejar redimensionamiento
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// ¡Iniciar animación!
animate();