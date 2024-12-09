import {loadImages} from '../../scripts/util.js';

function initImage(obj, pName) {
	if (!obj[pName]) return null;
	const i = new Image();
	i.src = obj[pName];
	obj[pName] = i;
	return i;
}

export async function imageToHTML(p) {
	const images = [];
	// Convert image urls into actual images:
	images.push(initImage(p, 'overlayImage'));
	images.push(initImage(p, 'image'));

	await loadImages(images)
	// console.log(images);
}
