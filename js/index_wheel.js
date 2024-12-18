const bc = new BroadcastChannel("SubChannel");
const st = new BroadcastChannel("SendTime");

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

bc.onmessage = async (event) =>
	{
		let calctime = String(event["data"]).split(":-?")[1]
		let currname = String(event["data"]).split(":-?")[0]
		document.getElementById("currentSpinning").textContent = currname;

		const props = {
			debug: false, // So we can see pointer angle.
			overlayImage: './img/example-0-overlay.svg',
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
		document.getElementById("img-center").src = getCenterImage();
		switch (wheelpick)
			{
				case 'weighted':
					wheel.spinToItem(0, wheel_spin_time, false, wheel_num_of_revs, 1);
					break;

				case 'full random':
					wheel.spin(wheel_spin_speed);
					break;

			}

		wheel.onRest = await onFinish;

		async function onFinish()
			{
				await sleep(100);
				const spinresult = props["items"][wheel.getCurrentIndex()]
				document.getElementById("currentSpinning").textContent = `${currname}: ${spinresult["label"]}`;
				let num = parseInt(spinresult["label"].split("%")[0])/100;
				let rettime = (calctime - (calctime - num)).toFixed(2);
				st.postMessage((rettime*calctime).toFixed(2));
				await sleep(wheel_result_delay);
				document.getElementById("currentSpinning").textContent = "";
				document.getElementById("img-center").src = "./img/blank.png"
				wheel.remove()
			}

	}
