// Import relevant items from 3js
import {
	Scene,
	PerspectiveCamera,
	WebGLRenderer
} from 'three';/**

 * Initializes three.js and appends the renderer to the
 * DOM element with id targetId
 *
 * @param targetId string Id of DOM element to append 3js renderer to
 * @returns an object containing the scene, camera, and renderer
 */
export default function InitializeScene(targetId) {
	const scene = new Scene();
	const camera = new PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 100 );

	const renderer = new WebGLRenderer();
	renderer.setSize( window.innerWidth, window.innerHeight );

	let viewport = document.getElementById(targetId);
	viewport.appendChild( renderer.domElement );
	return {
		"scene": scene,
		"camera": camera,
		"renderer": renderer
	};
}
