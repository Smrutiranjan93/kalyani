import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export default function Modal(){
    const ModalFlower = (scene) =>{
        const gltfLoader = new GLTFLoader();
        gltfLoader.load('./flower_vase/scene.gltf', (modal)=>{
            console.log("Modal is ready");
            scene.add(modal.scene);
        }, (progress)=>{
            console.log("Loading Modal");
        }, (err)=>{
            console.log("Error Modal");
        })
    }
    return {ModalFlower}
}