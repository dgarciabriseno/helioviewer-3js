/**
 * Provides click & drag features to move
 * the camera around.
 */

import { OrbitControls } from './lib/OrbitControls.js';

/**
 * Initializes orbit controls to allow the user to move
 * the camera around.
 * Note: Must call "controls.update" in the main loop.
 */
function InitializeControls(camera, renderer) {
    const controls = new OrbitControls( camera, renderer.domElement );
    controls.update();
    return controls;
}

export {
    InitializeControls
};
