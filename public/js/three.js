import * as THREE from 'three';
import House from './house';
import Planets from './planets';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { RGBELoader } from "three/addons/loaders/RGBELoader.js";

const loaderText = document.querySelector(".loader__text")

const manager = new THREE.LoadingManager();
manager.onLoad = () => {
    loaderText.innerHTML = "completed";
    setInterval(() => {
        loaderText.style.display = "none";
        document.body.appendChild(renderer.domElement);
        renderer.outputEncoding = THREE.sRGBEncoding;
    }, 1500)
};

manager.onStart = (itemsTotal) => {
    loaderText.innerHTML = "start loading" + itemsTotal + "elements";
};

manager.onProgress = (itemsLoaded, itemsTotal) => {
    loaderText.innerHTML = "loading " + itemsLoaded + " on " + itemsTotal + " in total";
};

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 0.4;

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.autoRotate = true

camera.position.set(0, 0.6, 2);
controls.update();

//house
let house = new House(0);
house.createHouseWalls(scene);
house.createHouseRoof(scene);
house.createVisiteKaart(scene);

//hdri
const rgbeLoader = new RGBELoader(manager);
rgbeLoader.load("../assets/quattro_canti_4k.hdr", (texture) => {
    texture.mapping = THREE.EquirectangularReflectionMapping;
    scene.background = texture;
    scene.environment = texture;
})

//lights
const light = new THREE.SpotLight(manager);
light.position.set(5, 5, 5);
scene.add(light);

//donunq
const loader = new GLTFLoader(manager);
loader.load("../assets/donunq_object.glb", (gltf) => {
    scene.add(gltf.scene);
})

//Planet
let planet = new Planets();
planet.createPlanets(scene);

const render = () => {
    renderer.render(scene, camera);
}

const animate = () => {
    requestAnimationFrame(animate);
    controls.update();
    render();
}

animate()