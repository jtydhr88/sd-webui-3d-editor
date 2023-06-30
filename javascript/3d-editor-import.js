(function () {
    if (!globalThis.threeDEditor) globalThis.threeDEditor = {};
    const threeDEditor = globalThis.threeDEditor;

    function load(cont) {
        const scripts = cont.textContent.trim().split('\n');
        const base_path = `/file=${scripts.shift()}/js`;
        cont.textContent = '';

        const df = document.createDocumentFragment();
        for (let src of scripts) {
            const script = document.createElement('script');
            script.async = true;
            script.type = 'module';
            script.src = `file=${src}`;
            df.appendChild(script);
        }

        globalThis.threeDEditor.import = async () => {
            const threeDEditor = await import(`${base_path}/3d-editor.bundle.js`);

            return {threeDEditor};
        };

        if (!globalThis.threeDEditor.imports) {
            globalThis.threeDEditor.imports = {};
        }

        if (!globalThis.threeDEditor.imports.threeDEditor) {
            globalThis.threeDEditor.imports.threeDEditor = async () => await import(`${base_path}/3d-editor.bundle.js`);
        }

        cont.appendChild(df);
    }

    onUiLoaded(function () {
        webGLOutputDiv3DEditor = gradioApp().querySelector('#WebGL-output-3d-editor-import');
        load(webGLOutputDiv3DEditor);
    })
})();