import * as THREE from 'three';
export default class House {
    constructor(hCenter) {
        this.hCenter = hCenter;
        this.house = [
            {
                key: "front",
                posx: 1,
                posy: 1,
                posz: 1,
                rotax: 0,
                rotay: 0,
                rotaz: 0
            },
            {
                key: "side1",
                posx: 1.5,
                posy: 1,
                posz: 0.5,
                rotax: 0,
                rotay: -1.6,
                rotaz: 0
            },
            {
                key: "side2",
                posx: 1.5,
                posy: 1,
                posz: 1.5,
                rotax: 0,
                rotay: 1.6,
                rotaz: 0
            },
            {
                key: "side3",
                posx: 2,
                posy: 1,
                posz: 1,
                rotax: 0,
                rotay: 0,
                rotaz: 0
            },
            {
                key: "bottom",
                posx: 1.5,
                posy: 0.5,
                posz: 1,
                rotax: 1.6,
                rotay: 1.6,
                rotaz: 0
            }
        ]
    }

    createHouseWalls(scene) {
        this.house.forEach(house => {
            console.log(this.house)
            const geometry = new THREE.BoxGeometry(0.1);
            const material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
            const wall = new THREE.Mesh(geometry, material);
            wall.position.set(this.hCenter + house.posx, this.hCenter + house.posy, this.hCenter + house.posz);
            wall.rotation.set(this.hCenter + house.rotax, this.hCenter + house.rotay, this.hCenter + house.rotaz);
            scene.add(wall);
        })
    }
    createHouseRoof(scene) {
        const geometry = new THREE.ConeGeometry(0.8, 1);
        const material = new THREE.MeshBasicMaterial({ color: 0x000000 });
        const roof = new THREE.Mesh(geometry, material);
        roof.position.set(this.hCenter + 1.5, this.hCenter + 2, this.hCenter + 1);
        scene.add(roof);
    }
}