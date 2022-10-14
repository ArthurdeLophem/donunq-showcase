import * as THREE from 'three';
import { TTFLoader } from 'three/examples/jsm/loaders/TTFLoader';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
export default class House {
    constructor(hCenter) {
        this.dividPi = Math.PI / 2;
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
                rotay: -this.dividPi,
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
                rotax: this.dividPi,
                rotay: this.dividPi,
                rotaz: 0
            }
        ]

        this.cards = [
            {
                key: "front",
                title: "wow... where has the donunq gone?",
                textPos: {
                    x: -0.45,
                    y: -0.02,
                    z: 0.52
                },
                cardPos: {
                    x: 0,
                    y: 0,
                    z: 0.48
                }
            },
            {
                key: "inside",
                title: "freshly served",
                textPos: {
                    x: -0.18,
                    y: 0.23,
                    z: -0.40
                },
                cardPos: {
                    x: 0,
                    y: 0.25,
                    z: -0.44
                }
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
        const geometry = new THREE.ConeGeometry(0.8, 0.8, 4);
        const texture = new THREE.TextureLoader();
        const roofColor = texture.load("../assets/roofTexture.jpg");
        const material = new THREE.MeshBasicMaterial({ map: roofColor });
        const roof = new THREE.Mesh(geometry, material);
        roof.position.set(this.hCenter + 0, this.hCenter + 0.9, this.hCenter + 0);
        roof.rotation.set(0, 0.77, 0);
        scene.add(roof);
    }

    createVisiteKaart(scene) {
        const loader = new FontLoader();
        this.cards.forEach(card => {
            //font
            loader.load('https://threejs.org/examples/fonts/helvetiker_regular.typeface.json', (font) => {
                const geometry = new TextGeometry(card.title, {
                    font: font,
                    size: 0.04,
                    height: 0.003
                });
                const material = new THREE.MeshBasicMaterial({ color: 0x000000 });
                const visite = new THREE.Mesh(geometry, material);
                visite.position.set(this.hCenter + card.textPos.x, this.hCenter + card.textPos.y, this.hCenter + card.textPos.z);
                scene.add(visite);
            });

            //card
            const geometry = new THREE.BoxGeometry(0.08, 0.15, 0.94);
            const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
            const kaart = new THREE.Mesh(geometry, material);
            kaart.position.set(this.hCenter + card.cardPos.x, this.hCenter + card.cardPos.y, this.hCenter + card.cardPos.z);
            kaart.rotation.set(0, this.dividPi, 0);

            scene.add(kaart);
        });

    }
}