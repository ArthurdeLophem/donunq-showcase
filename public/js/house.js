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
}