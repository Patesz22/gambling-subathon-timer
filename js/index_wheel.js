function setItem()
	{

		let count = Number(weightedRandom(wheel_count_items, wheel_count_probability, 1))
		let result;

		switch (wheelpick)
		{
			case 'weighted':
				result = getWeighted(count)
				break;

			case 'full random':
				result = getFullRandom(count)
				break;
		}

		return result
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
		itemLabelAlign: "left",
		itemLabelFontSizeMax: 52,
		itemLabelBaselineOffset: -0.06,
		itemBackgroundColors: wheel_colors,
		lineWidth: 1.8,
		lineColor: '#000',

		items: setItem(),

	};

	await imageToHTML(props)

	const container = document.querySelector('.wheel-wrapper');
	const wheel = new Wheel(container, props);

	wheel.rotation = getRandomInt(0, 360);
	wheel.isInteractive = false;
	wheel.rotationResistance = wheel_spin_resistance

	await sleep(wheel_start_delay);
	// wheel.spinToItem(0, 5000, false, 2, 1);
	wheel.spin(wheel_spin_speed)

	wheel.onRest = await onFinish;

	async function onFinish()
		{
			await sleep(100);
			const spinresult = props["items"][wheel.getCurrentIndex()]
			console.log(spinresult)
			await sleep(wheel_result_delay);
			wheel.remove()
		}
};
