const api_host = "127.0.0.1";
const api_port = 8011;



async function GetHttpAsync(path)
{
	try {
		const response = await fetch(`http://${api_host}:${api_port}/${path}`);
		return await response.json();
	} catch (error) {
		console.log(error);
	}
}


async function getItems() {
	const data = await GetHttpAsync("config");
	return data;
}

console.log([await getItems()]);