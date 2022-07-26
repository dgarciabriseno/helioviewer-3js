import {
	PlaneGeometry,
	MeshBasicMaterial,
	Mesh
} from 'three';

/**
 * Returns a hemisphere with the given image applied as a texture
 */
function CreateFlatImage(texture) {
	const geometry = new PlaneGeometry(8, 8);
	const material = new MeshBasicMaterial({
		map: texture
	});
	const plane = new Mesh( geometry, material );
	return plane;
}

export { CreateFlatImage };
