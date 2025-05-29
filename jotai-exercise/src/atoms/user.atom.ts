import { atom } from "jotai";

const firstnameAtom = atom<string>("");
const lastnameAtom = atom<string>("");
const ageAtom = atom<number>(18);
const hobbiesAtom = atom<string[]>([]);

export {
    firstnameAtom,
    lastnameAtom,
    ageAtom,
    hobbiesAtom
}
