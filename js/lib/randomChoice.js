export function RandomChoice(array, itemNumber)
{
	let retarray = []
	for (let i = 0; i < itemNumber; i++)
	{
		const randElement = array[Math.floor(Math.random() * array.length)];
		retarray.push(randElement);
	}
	return retarray;

}

