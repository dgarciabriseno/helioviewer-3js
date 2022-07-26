/**
 * Manages the front-end zoom slider
 */
export default class ZoomSlider {
	/**
	 * @param sliderId id for the slider in the DOM
	 * @param camera threejs camera to control the zoom
	 */
	constructor(sliderId, camera) {
		this.slider = document.getElementById(sliderId);
		this.camera = camera;
		this.registerSlideEventListener();
	}

	registerSlideEventListener() {
		let zoom = this;
		this.slider.addEventListener('input', (e) => {
			console.log("Setting zoom to " + e.target.value);
			zoom.setZoom(e.target.value);
		});
	}

	setZoom(value) {
		this.camera.zoom = value;
		this.camera.updateProjectionMatrix();
	}
}
