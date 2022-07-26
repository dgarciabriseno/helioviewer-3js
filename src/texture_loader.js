import { TextureLoader } from 'three';

/**
 * Load a jpeg2000 image into a texture from the helioviewer API
 */
function loadTexture(url) {
	return new Promise((resolve, reject) => {
		let loader = new TextureLoader();
		loader.load(url,
		// on success
		(texture) => resolve(texture),
		// onProgress is not supported by threejs
		undefined,
		// on error
		(result) => reject(result));
	});
}

export { loadTexture };
