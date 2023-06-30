import React, {useRef, useEffect} from 'react';
import * as THREE from 'three';
import {Editor} from './editor/js/Editor.js';
import {Viewport} from './editor/js/Viewport.js';
import {Toolbar} from './editor/js/Toolbar.js';
import {Script} from './editor/js/Script.js';
import {Player} from './editor/js/Player.js';
import {Sidebar} from './editor/js/Sidebar.js';
import {Menubar} from './editor/js/Menubar.js';
import {Resizer} from './editor/js/Resizer.js';
import {VRButton} from 'three/addons/webxr/VRButton.js';

window.VRButton = VRButton;

function ThreeEditorScene() {
    const containerRef = useRef();

    useEffect(() => {
        const editor = new Editor();

        const viewport = new Viewport(editor);
        containerRef.current.appendChild(viewport.dom);

        const toolbar = new Toolbar(editor);

        containerRef.current.appendChild(toolbar.dom);

        const script = new Script(editor);

        containerRef.current.appendChild(script.dom);

        const sidebar = new Sidebar(editor);

        containerRef.current.appendChild(sidebar.dom);

        const menubar = new Menubar(editor, viewport);
        containerRef.current.appendChild(menubar.dom);

        const resizer = new Resizer(editor);
        containerRef.current.appendChild(menubar.dom);

        let isLoadingFromHash = false;

        editor.storage.init(function () {

            editor.storage.get(function (state) {

                if (isLoadingFromHash) return;

                if (state !== undefined) {

                    editor.fromJSON(state);

                }

                const selected = editor.config.getKey('selected');

                if (selected !== undefined) {

                    editor.selectByUuid(selected);

                }

            });

            //

            let timeout;

            function saveState() {

                if (editor.config.getKey('autosave') === false) {

                    return;

                }

                clearTimeout(timeout);

                timeout = setTimeout(function () {

                    editor.signals.savingStarted.dispatch();

                    timeout = setTimeout(function () {

                        editor.storage.set(editor.toJSON());

                        editor.signals.savingFinished.dispatch();

                    }, 100);

                }, 1000);

            }

            const signals = editor.signals;

            signals.geometryChanged.add(saveState);
            signals.objectAdded.add(saveState);
            signals.objectChanged.add(saveState);
            signals.objectRemoved.add(saveState);
            signals.materialChanged.add(saveState);
            signals.sceneBackgroundChanged.add(saveState);
            signals.sceneEnvironmentChanged.add(saveState);
            signals.sceneFogChanged.add(saveState);
            signals.sceneGraphChanged.add(saveState);
            signals.scriptChanged.add(saveState);
            signals.historyChanged.add(saveState);

        });

        document.addEventListener('dragover', function (event) {

            event.preventDefault();
            event.dataTransfer.dropEffect = 'copy';

        });

        document.addEventListener('drop', function (event) {

            event.preventDefault();

            if (event.dataTransfer.types[0] === 'text/plain') return; // Outliner drop

            if (event.dataTransfer.items) {

                // DataTransferItemList supports folders

                editor.loader.loadItemList(event.dataTransfer.items);

            } else {

                editor.loader.loadFiles(event.dataTransfer.files);

            }

        });

        function onWindowResize() {

            editor.signals.windowResize.dispatch();

        }

        window.addEventListener('resize', onWindowResize);

        onWindowResize();

        const hash = window.location.hash;

        if (hash.slice(1, 6) === 'file=') {

            const file = hash.slice(6);

            if (window.confirm('Any unsaved data will be lost. Are you sure?')) {

                const loader = new THREE.FileLoader();
                loader.crossOrigin = '';
                loader.load(file, function (text) {

                    editor.clear();
                    editor.fromJSON(JSON.parse(text));

                });

                isLoadingFromHash = true;

            }

        }
    }, []);


    return (
        <div ref={containerRef} id="threeEditorContainer" style={{width: '100%', height: '100%', position: 'relative'}}>

        </div>
    );
}

export default ThreeEditorScene;