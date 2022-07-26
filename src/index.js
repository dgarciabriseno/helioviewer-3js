import InitializeScene from './initialization.js';
import { CreateHemisphere, CreateHemisphereWithTexture } from './sphere.js';
import { CreateFlatImage } from './flat.js';
import { getJP2ImageUrl } from './helioviewer.js';
import { loadTexture } from './texture_loader.js';
import ZoomSlider from './zoom.js';

// Initialize threejs, returns an object with the scene, camera, and renderer
let app = InitializeScene('viewport');
app.camera.position.z = 5;

/*
let sphere = CreateHemisphere();
sphere.rotation.x = Math.PI / 2;
app.scene.add(sphere);
*/

let url = getJP2ImageUrl("2022-07-21T00:00:00Z", 13);
let result = loadTexture(url);
result.then((texture) => {
	let sphere = CreateFlatImage(texture);
	// sphere.rotation.x = Math.PI / 2;
	app.scene.add(sphere);
});
result.catch((err) => alert("JPEG2000 images not supported in this browser. Use safari"));

let slider = new ZoomSlider('js-zoom-slider', app.camera);


function animate() {
	requestAnimationFrame(animate);
	// sphere.rotation.x += 0.01;
	// sphere.rotation.y += 0.01;
	// sphere.rotation.z += 0.01;
	app.renderer.render(app.scene,app.camera);

}
animate();

