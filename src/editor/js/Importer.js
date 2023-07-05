import * as THREE from 'three';
import {AddObjectCommand} from "./commands/AddObjectCommand";

function Importer(editor) {
    this.importFileFromUrl = async function (fileUrl) {

        const ext = fileUrl.split('.').pop().toLowerCase()

        const reader = new FileReader();

        let manager = new THREE.LoadingManager();

        switch (ext) {
            case "obj": {
                const {OBJLoader} = await import( 'three/addons/loaders/OBJLoader.js' );

                new OBJLoader().load(fileUrl, function (obj) {
                    obj.name = 'importedObj';

                    editor.execute(new AddObjectCommand(editor, obj));
                });
            }
            case "ply" : {
                const {PLYLoader} = await import( 'three/addons/loaders/PLYLoader.js' );

                new PLYLoader().load(fileUrl, function (geometry) {
                    geometry.computeVertexNormals();

                    const material = new THREE.MeshStandardMaterial( { color: 0x009cff, flatShading: true } );
					const mesh = new THREE.Mesh( geometry, material );

                    mesh.castShadow = true;
					mesh.receiveShadow = true;

                    editor.execute(new AddObjectCommand(editor, mesh));
                });
            }
        }
    };
}

export {Importer};