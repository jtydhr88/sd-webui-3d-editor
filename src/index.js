import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Container, Grid, styled, Box} from '@mui/material';
import ThreeEditorScene from './ThreeEditorScene';
import './editor/css/main.css'

const FullWidthBox = styled(Box)({
    margin: 0,
    padding: 0,
});

export default function App({controlNetNum}) {
    return (
        <>
            <FullWidthBox>
                <Container maxWidth="none">
                    <Grid container spacing={3}>
                        <Grid item xs={12} style={{height: '80vh'}}>
                            <ThreeEditorScene/>
                        </Grid>
                    </Grid>
                </Container>
            </FullWidthBox>
        </>
    );
}

export function create3DEditorApp({container, controlNetNum}) {
    if (!container) {
        return;
    }

    const root = ReactDOM.createRoot(container);

    root.render(<App controlNetNum={controlNetNum}/>);
}

function localDev() {
    const root = ReactDOM.createRoot(document.getElementById('sd-webui-3d-editor-container'));

    root.render(<App controlNetNum={3}/>);
}

window.create3DEditorApp = create3DEditorApp;

//localDev();