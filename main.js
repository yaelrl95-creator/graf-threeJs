import * as THREE from 'https://unpkg.com/three@0.154.0/build/three.module.js';

// 1. Crear la escena, cámara y renderizador
const escena = new THREE.Scene();
const camara = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Geometría base para los tres cubos
const geometry = new THREE.BoxGeometry(1, 1, 1);

// 2. Cubo 1: Lento (Color Rojo) - A la izquierda
const materialLento = new THREE.MeshStandardMaterial({ color: 0xff0000 });
const cuboLento = new THREE.Mesh(geometry, materialLento);
cuboLento.position.x = -2.5; // Posición izquierda
escena.add(cuboLento);

// 3. Cubo 2: Medio (Color Verde) - En el centro
const materialMedio = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
const cuboMedio = new THREE.Mesh(geometry, materialMedio);
cuboMedio.position.x = 0; // Posición central
escena.add(cuboMedio);

// 4. Cubo 3: Rápido (Color Azul) - A la derecha
const materialRapido = new THREE.MeshStandardMaterial({ color: 0x0088ff });
const cuboRapido = new THREE.Mesh(geometry, materialRapido);
cuboRapido.position.x = 2.5; // Posición derecha
escena.add(cuboRapido);

// 5. Iluminación
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
escena.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(5, 5, 5);
escena.add(directionalLight);

// 6. Posicionar la cámara para ver los tres objetos
camara.position.z = 5;

// 7. Bucle de animación con distintas velocidades
function animate() {
    // Cubo Lento (Rojo)
    cuboLento.rotation.x += 0.005;
    cuboLento.rotation.y += 0.005;

    // Cubo Medio (Verde)
    cuboMedio.rotation.x += 0.02;
    cuboMedio.rotation.y += 0.02;

    // Cubo Rápido (Azul)
    cuboRapido.rotation.x += 0.06;
    cuboRapido.rotation.y += 0.06;

    renderer.render(escena, camara);
}

// Iniciar la animación
renderer.setAnimationLoop(animate);

// Ajustar tamaño si cambia la ventana
window.addEventListener('resize', () => {
    camara.aspect = window.innerWidth / window.innerHeight;
    camara.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});