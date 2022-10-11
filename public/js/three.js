import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { HDRCubeTextureLoader } from "three/addons/loaders/HDRCubeTextureLoader.js";
import { RGBELoader } from "three/addons/loaders/RGBELoader.js";
import { sRGBEncoding } from 'three';


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 0.4;

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
renderer.outputEncoding = THREE.sRGBEncoding;

const controls = new OrbitControls(camera, renderer.domElement);

camera.position.set(0, 0.2, 0.4);
controls.update();

const rgbeLoader = new RGBELoader();
rgbeLoader.load("../assets/quattro_canti_4k.hdr", (texture) => {
    texture.mapping = THREE.EquirectangularReflectionMapping;
    scene.background = texture;
    scene.environment = texture;
})

const light = new THREE.SpotLight();
light.position.set(5, 5, 5);
scene.add(light);

const loader = new GLTFLoader();
loader.load("../assets/donunq_object.glb", (gltf) => {
    scene.add(gltf.scene);
})

function animate() {
    requestAnimationFrame(animate);
    controls.update();
    render();
}

function render() {
    renderer.render(scene, camera);
}

animate()