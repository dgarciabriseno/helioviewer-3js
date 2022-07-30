/**
 * Contains a collection of functions useful for helping
 * with debugging 3js stuff
 */
import { AxesHelper } from 'three';

/**
 * It's difficult to know which way things are facing without this.
 */
function ShowAxes(scene) {
    const axesHelper = new AxesHelper(5);
    scene.add(axesHelper);
}

export {
    ShowAxes
};
