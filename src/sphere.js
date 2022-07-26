import {
	SphereGeometry,
	MeshBasicMaterial,
	Mesh
} from 'three';

/**
 * Returns a sphere to add to the scene
 */
function CreateHemisphere() {
	const geometry = new SphereGeometry(1, 32, 32, 0, 2*Math.PI, 0, Math.PI/2);
	const material = new MeshBasicMaterial( { color: 0x00ff00 } );
	const sphere = new Mesh( geometry, material );
	return sphere;
}

/**
 * Returns a hemisphere with the given image applied as a texture
 */
function CreateHemisphereWithTexture(texture) {
	const geometry = new SphereGeometry(1, 32, 32, 0, 2*Math.PI, 0, Math.PI/2);
	const material = new MeshBasicMaterial({
		map: texture
	});
	const sphere = new Mesh( geometry, material );
	return sphere;
}

export { CreateHemisphere, CreateHemisphereWithTexture};
