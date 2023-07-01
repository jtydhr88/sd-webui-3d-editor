import {UIPanel, UIRow} from './libs/ui.js';

function MenubarControlNet(editor, controlNetNum) {

    const signals = editor.signals;
    const strings = editor.strings;

    const container = new UIPanel();
    container.setClass('menu');

    const title = new UIPanel();
    title.setClass('title');
    title.setTextContent(strings.getKey('menubar/controlNet'));
    container.add(title);

    const options = new UIPanel();
    options.setClass('options');
    container.add(options);

    // New

    let option = new UIRow();

    let num = 0;

    if (controlNetNum && controlNetNum.controlNetNum) {
        num = Number(controlNetNum.controlNetNum);
    }

    if (num === 0) {
        option.setClass('option');
        option.setTextContent(strings.getKey('menubar/controlNet/no_controlNet'));
    } else {
        for (let i = 0; i < num; i++) {
            option = new UIRow();

            option.setClass('option');
            option.setTextContent(strings.getKey('menubar/controlNet/send_to_txt2img') + " - " + i.toString());

            option.onClick(function () {
                const renderer = editor.currentRenderer;

                renderer.render(editor.scene, editor.viewportCamera);

                const dataURL = renderer.domElement.toDataURL("image/png");
                const file = dataURLtoFile(dataURL, 'image.png');

                const dt = new DataTransfer();
                dt.items.add(file);

                window.sendImageFunc3DEditor("txt2img", i * 2, dt);
            });

            options.add(option);
        }

        for (let i = 0; i < num; i++) {
            option = new UIRow();

            option.setClass('option');
            option.setTextContent(strings.getKey('menubar/controlNet/send_to_img2img') + " - " + i.toString());

            option.onClick(function () {
                const renderer = editor.currentRenderer;

                renderer.render(editor.scene, editor.viewportCamera);

                const dataURL = renderer.domElement.toDataURL("image/png");
                const file = dataURLtoFile(dataURL, 'image.png');

                const dt = new DataTransfer();
                dt.items.add(file);

                window.sendImageFunc3DEditor("img2img", i * 2, dt);
            });

            options.add(option);
        }
    }

    function dataURLtoFile(dataurl, filename) {
        var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new File([u8arr], filename, {type: mime});
    }

    return container;

}

export {MenubarControlNet};
