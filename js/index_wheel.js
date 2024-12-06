import {Wheel} from '../dist/spin-wheel-esm.js';
import {getRandomInt} from '../src/util.js';
import {AlignText} from '../src/constants.js';
import {imageToHTML} from './lib/imageToHTML.js';

const api_host = "127.0.0.1";
const api_port = 8011;

async function GetHttpAsync(path)
{
	const response = await fetch(`http://${api_host}:${api_port}/${path}`);
	return await response.json();
}

async function fetchWinningItemIndex() {
	// Simulate a call to the back-end
	return 1;
}

function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

function Finish() {
	console.log("asd");
}

async function setItem() {
	let ret = []
	ret.push(await GetHttpAsync("winner"))
	let objects = await GetHttpAsync("filleritems")

	for (let i = 0; i < objects.length; i++) {
		ret.push(objects[i])
	}

	return ret;
}


window.onload = async () => {
	const props = {
		debug: false, // So we can see pointer angle.
		overlayImage: './img/OverlayDink.svg',
		overlayImage_frame2: './img/OverlayDink.svg',
		// image: './img/neurodink_original.webp', // todo: custom images based on rarity
		rotationResistance: -1,
		radius: 0.84,
		rotationSpeedMax: 5000,
		itemLabelRadius: 0.93,
		itemLabelRadiusMax: 0.35,
		itemLabelRotation: 180,
		itemLabelAlign: AlignText.left,
		itemLabelFontSizeMax: 52,
		itemLabelBaselineOffset: -0.06,
		itemBackgroundColors: ['#ffc93c', '#66bfbf', '#a2d5f2', '#4543ef', '#ef7b07', '#82e273', '#ff0bfe'],
		lineWidth: 1.8,
		lineColor: '#000',

		items: await setItem(),

		// items: [
		// 	{
		// 		"value": "-10",
		// 		"label": "-10",
		// 		"weight": 0.3001 // get weight + 0.30
		// 	},
		// 	{
		// 		"value": "-20",
		// 		"label": "-20",
		// 	},
		// 	{
		// 		"value": "20",
		// 		"label": "-20",
		// 	},
		// 	{
		// 		"value": "20",
		// 		"label": "-20",
		// 	},
		// 	{
		// 		"value": "20",
		// 		"label": "-20",
		// 	},
		// 	{
		// 		"value": "20",
		// 		"label": "-20",
		// 	},
		//
		// ]
	};

	// const winnderIndex = ;
	await imageToHTML(props)
	console.log(props["items"])

	// 2. Decide where you want it to go:
	const container = document.querySelector('.wheel-wrapper');

	// 3. Create the wheel in the container and initialise it with the props:
	const wheel = new Wheel(container, props);

	// wheel.spin(40000)
	// const winningItemIndex = await fetchWinningItemIndex();
	// const duration = 4000;
	// const easing = easing.cubicOut;

	wheel.rotation = getRandomInt(0, 360);
	wheel.isInteractive = false;
	wheel.rotationResistance = -600

	await sleep(1500);
	// wheel.spinToItem(0, 5000, false, 2, 1);
	wheel.spin(3600)
	wheel.onRest = Finish;

};