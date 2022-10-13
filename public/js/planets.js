import * as THREE from 'three';
export default class Planet {
    constructor() {
        this.planets = [
            '../assets/2k_venus_surface.jpg',
            '../assets/2k_jupiter.jpg',
            '../assets/2k_mars.jpg',
            '../assets/2k_mercury.jpg',
            '../assets/2k_neptune.jpg',
            '../assets/2k_uranus.jpg'
        ]
    }

    createPlanets = (scene) => {
        for (let i = 0; i < this.planets.length; i++) {
            let x = Math.floor(Math.random() * 3.5);
            let y = Math.floor(Math.random() * 3.5);
            let z = Math.floor(Math.random() * 3.5);
            console.log(x, y, z)
            const planetTexture = new THREE.TextureLoader().load(this.planets[i]);
            const planetGeo = new THREE.SphereGeometry(0.2)
            const planetMaterial = new THREE.MeshBasicMaterial({ map: planetTexture });
            const planet = new THREE.Mesh(planetGeo, planetMaterial);
            planet.position.set(x, y, z)
            scene.add(planet);
        }
    }
}

