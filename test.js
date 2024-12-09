/**
 * Picks the random item based on its weight.
 * The items with higher weight will be picked more often (with a higher probability).
 *
 * For example:
 * - items = ['banana', 'orange', 'apple']
 * - weights = [0, 0.2, 0.8]
 * - weightedRandom(items, weights) in 80% of cases will return 'apple', in 20% of cases will return
 * 'orange' and it will never return 'banana' (because probability of picking the banana is 0%)
 *
 * @param {any[]} items
 * @param {number[]} weights
 * @returns {{item: any, index: number}}
 */
/* eslint-disable consistent-return */

function weightedRandom(items, weights, round)
{
	const returnList = []
	for (let x = 0; x < round; x++)
	{
		if (items.length !== weights.length)
		{
			throw new Error('Items and weights must be of the same size');
		}

		if (!items.length)
		{
			throw new Error('Items must not be empty');
		}

		// Preparing the cumulative weights array.
		// For example:
		// - weights = [1, 4, 3]
		// - cumulativeWeights = [1, 5, 8]
		const cumulativeWeights = [];
		for (let i = 0; i < weights.length; i += 1)
		{
			cumulativeWeights[i] = weights[i] + (cumulativeWeights[i - 1] || 0);
		}

		// Getting the random number in a range of [0...sum(weights)]
		// For example:
		// - weights = [1, 4, 3]
		// - maxCumulativeWeight = 8
		// - range for the random number is [0...8]
		const maxCumulativeWeight = cumulativeWeights[cumulativeWeights.length - 1];
		const randomNumber = maxCumulativeWeight * Math.random();

		// Picking the random item based on its weight.
		// The items with higher weight will be picked more often.
		for (let itemIndex = 0; itemIndex < items.length; itemIndex += 1)
		{
			if (cumulativeWeights[itemIndex] >= randomNumber)
			{
				returnList.push (items[itemIndex]);
				break;
			}
		}
	}

	return returnList
}

const api_host = "127.0.0.1";
const api_port = 8011;

async function httpGetAsync()
{
	const response = await fetch(`http://${api_host}:${api_port}/config`);
	return await response.json();
}

const config = await httpGetAsync();
// console.log(config);
const items = [];
const prob = [];
const count = Number(weightedRandom([5, 6, 7], [0.7, 0.2, 0.1], 1)[0])
for (let i = 1; i <=  Object.keys(config).length; i++)
{
	// console.log(data[i]);
	items.push(config[i]["label"])
	prob.push(Number(config[i]["probability"]))
}

const result = weightedRandom(items, prob, 1000)
const frequency = (arr, number) =>
{
	let count = 0;
	for (let item = 0; item < arr.length; item++)
	{
		if (arr[item] === number)
		{
			count++;
		}
	}
	return count;
};


console.log(result);

for (let i = 0; i < items.length; i++)
{
	console.log(`${items[i]}: ` + frequency(result, items[i]));
}

// console.log("5: " + frequency(result, 5))
// console.log("6: " + frequency(result, 6))
// console.log("7: " + frequency(result, 7))