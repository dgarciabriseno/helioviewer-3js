import InitializeScene from './initialization.js';
import {
    CreateHemisphere,
    CreateHemisphereWithTexture,
    CreateSphereWithTexture
} from './sphere.js';
import { CreateFlatImage } from './flat.js';
import { getJP2ImageUrl, getDownloadImageUrl } from './helioviewer.js';
import { loadTexture } from './texture_loader.js';
import { InitializeControls } from './controls.js';

/** Debug only, remove from prod */
import { ShowAxes } from './debug.js';

function enableDebug(scene) {
    ShowAxes(scene);
}

/** End debug section */

function setInitialCameraPosition(camera) {
    camera.position.z = 5;
}

function main(app) {
    setInitialCameraPosition(app.camera);
    let controls = InitializeControls(app.camera, app.renderer);

    /** FOR PoC ONLY **/
    enableDebug(app.scene);
    // let url = getDownloadImageUrl(193);
    // let result = loadTexture(url);
    //let result = loadTexture("http://localhost:8000/images/uvmap.jpg");
    let result = loadTexture("http://localhost:8000/images/4k_304.png");
    let sphere = undefined;
    result.then((texture) => {
        console.log("Adding hemisphere");
        sphere = CreateSphereWithTexture(texture);
        sphere.rotation.x = 0;
        //sphere = CreateHemisphere();
        // sphere.rotation.x = Math.PI / 2;
        app.scene.add(sphere);
    });
    result.catch((err) => {alert("JPEG2000 images not supported in this browser. Use safari"); console.log(err)});

    /** End PoC Section **/


    function animate() {
        requestAnimationFrame(animate);
        controls.update();
        // sphere.rotation.x += 0.01;
        // sphere.rotation.y += 0.01;
        if (sphere != undefined) {
            // sphere.rotation.z += 0.01;
            // sphere.rotation.x += 0.01;
        }
        app.renderer.render(app.scene,app.camera);

    }
    animate();
}

// Initializes threejs, returns an object with the
// scene, camera, and renderer
let app = InitializeScene('viewport');
main(app);

