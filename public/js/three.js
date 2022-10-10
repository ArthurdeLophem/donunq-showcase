import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 0.4;

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const light = new THREE.SpotLight()
light.position.set(5, 5, 5)
scene.add(light)

const loader = new GLTFLoader();
loader.load('../assets/donunq_object.glb', (gltf) => {
    scene.add(gltf.scene)
})

function animate() {
    requestAnimationFrame(animate)
    render()
}

function render() {
    renderer.render(scene, camera)
}

animate()