import * as THREE from 'three';
export default class House {
    constructor(hCenter) {
        this.hCenter = hCenter;
        this.house = [
            {
                key: "front",
                posx: 0,
                posy: 0,
                posz: 0.46,
                rotax: 0,
                rotay: 1.57,
                rotaz: 0
            },
            {
                key: "back",
                posx: 0,
                posy: 0,
                posz: -0.46,
                rotax: 0,
                rotay: -1.57,
                rotaz: 0
            },
            {
                key: "right",
                posx: 0.46,
                posy: 0,
                posz: 0,
                rotax: 0,
                rotay: 0,
                rotaz: 0
            },
            {
                key: "left",
                posx: -0.46,
                posy: 0,
                posz: 0,
                rotax: 0,
                rotay: 0,
                rotaz: 0
            },
            {
                key: "bottom",
                posx: 0,
                posy: -0.46,
                posz: 0,
                rotax: 1.57,
                rotay: 1.57,
                rotaz: 0
            }
        ]
    }

    createHouseWalls(scene) {
        this.house.forEach(house => {
            console.log(this.house)
            const geometry = new THREE.BoxGeometry(0.1);
            const texture = new THREE.TextureLoader();
            const wallColor = texture.load("../assets/baseColor.jpeg");
            const material = new THREE.MeshBasicMaterial({ map: wallColor });
            const wall = new THREE.Mesh(geometry, material);
            wall.position.set(this.hCenter + house.posx, this.hCenter + house.posy, this.hCenter + house.posz);
            wall.rotation.set(house.rotax, house.rotay, house.rotaz);
            scene.add(wall);
        })
    }

    createHouseRoof(scene) {
        const geometry = new THREE.ConeGeometry(0.8, 1);
        const material = new THREE.MeshBasicMaterial({ color: 0x000000 });
        const roof = new THREE.Mesh(geometry, material);
        roof.position.set(this.hCenter + 0, this.hCenter + 1, this.hCenter + 0);
        scene.add(roof);
    }
}