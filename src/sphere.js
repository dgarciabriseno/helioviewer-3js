import {
    SphereGeometry,
    MeshBasicMaterial,
    Mesh,
    ShaderMaterial
} from 'three';

// See this fiddle for details
// https://jsfiddle.net/31o0zn2c/
let vertex_shader = `
varying vec3 vNormal;

void main() {

	vNormal = normal;

	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

}`;

let fragment_shader = `
uniform sampler2D tex;

varying vec3 vNormal;

void main() {

	vec2 uv = normalize( vNormal ).xy * 0.41 + 0.5;

	vec3 color = texture2D( tex, uv ).rgb;

	gl_FragColor = vec4( color, 1.0 );

}`;



function CreateSphereWithTexture(texture) {
    // const geometry = new SphereGeometry(1, 32, 32);
    // const geometry = new SphereGeometry(1, 32, 32, 0, 2*Math.PI, 0, Math.PI/2);
    const geometry = new SphereGeometry(1, 32, 32, 0, Math.PI);

    let uniforms = {
		"tex": { value: texture }
	};

	// material
	let material = new ShaderMaterial( {
		uniforms		: uniforms,
		vertexShader	: vertex_shader,
		fragmentShader	: fragment_shader
	} );
    const sphere = new Mesh( geometry, material );
    return sphere;
}

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

export {
    CreateHemisphere,
    CreateHemisphereWithTexture,
    CreateSphereWithTexture
};
