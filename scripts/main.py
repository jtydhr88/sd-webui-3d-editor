import gradio as gr

import modules.scripts as scripts
from modules import script_callbacks
from modules import shared
from modules.shared import opts
from modules import extensions

import os


class Script(scripts.Script):
    def __init__(self) -> None:
        super().__init__()

    def title(self):
        return "3D Editor"

    def show(self, is_img2img):
        return scripts.AlwaysVisible

    def ui(self, is_img2img):
        return ()


def on_ui_tabs():
    with gr.Blocks(analytics_enabled=False) as threeDModel_loader:
        with gr.Row():
            gr.HTML('<div id="threeD-editor-container"></div>')

        import_id = 'WebGL-output-3d-editor-import'

        ext = get_self_extension()

        try:
            control_net_num = opts.control_net_max_models_num
        except:
            control_net_num = 0

        gr.HTML(f'<input type="hidden" id="threeDEditor-control-net-num" value="{control_net_num}" />', visible=False)

        if ext is None:
            return []
        js_ = [f'{x.path}?{os.path.getmtime(x.path)}' for x in ext.list_files('javascript/lazyload', '.js')]
        js_.insert(0, ext.path)

        gr.HTML(value='\n'.join(js_), elem_id=import_id, visible=False)

    return [(threeDModel_loader, "3D Editor", "3deditor")]


def get_self_extension():
    if '__file__' in globals():
        filepath = __file__
    else:
        import inspect
        filepath = inspect.getfile(lambda: None)
    for ext in extensions.active():
        if ext.path in filepath:
            return ext


script_callbacks.on_ui_tabs(on_ui_tabs)
