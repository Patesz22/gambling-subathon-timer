import express from "express";
import cors from "cors";
import data from "./config/items_wheel.json" with { type: "json" };
import server_conf from "./config/server_config.json" with { type: "json" };
import time_data from "./config/init_time.json" with { type: "json" };
import {weightedRandom} from './js/lib/getRandomWinner.js';
import {RandomChoice} from './js/lib/randomChoice.js';
import {getRandomFloat} from './src/util.js';
import bodyParser from 'body-parser';
import * as fs from "fs";

// const express = require('express');
// const cors = require('cors');
// const data = require('./config/items_wheel.json');
// const server_conf = require('./config/server_config.json');
// const time_data = require('./config/init_time.json');
// const randomWinner = require('./js/lib/getRandomWinner.js');
// const randomChoice = require('./js/lib/randomChoice.js');
// const randomFloat = require('./src/util.js');
// const fs = require('fs');
// const bodyParser = require('body-parser');


const app = express();
let time_data_writeable = time_data

app.listen(server_conf["port"], server_conf["host"]);
console.log(`http://${server_conf["host"]}:${server_conf["port"]}`)

app.use(cors());
app.use(bodyParser.json())
// app.get('/', (req, res) => {
// 	res.json(sample);
// });

app.get('/winner', (req, res) =>
{
	let items = [];
	let prob = [];
	let	choicedict = {};
	for (let i = 1; i <= Object.keys(data).length; i++)
	{
		// console.log(data[i]);
		items.push(data[i]["label"])
		prob.push(Number(data[i]["probability"]))
	}

	let win = weightedRandom(items, prob, 1)
	Object.assign(choicedict, {"label": win[0], "weight": getRandomFloat(0.20, 0.50)})
	console.log(choicedict);
	res.json(choicedict);
});

app.get('/filleritems', (req, res) =>
{
	let items = [];
	let	choicearray = [];
	let count = Number(weightedRandom([5, 6, 7], [0.6, 0.3, 0.2], 1))
	for (let i = 1; i <= Object.keys(data).length; i++)
	{
		// console.log(data[i]);
		items.push(data[i]["label"])
	}

	let choice = RandomChoice(items, 10);
	for (let i = count-1; i < choice.length; i++)
	{
		choicearray.push({"label": choice[i], "weight": getRandomFloat(0.20, 0.50)});

	}
	console.log(choicearray);
	res.json(choicearray);
	console.log("\n");
});

app.get('/initHours', (req, res) =>
{
	console.log(time_data_writeable["hours"])
	res.json(Number(time_data_writeable["hours"]));
});

app.get('/initMin', (req, res) =>
{
	console.log(time_data_writeable["minutes"])
	res.json(Number(time_data_writeable["minutes"]));
});

app.get('/initSec', (req, res) =>
{
	console.log(time_data_writeable["seconds"])
	res.json(Number(time_data_writeable["seconds"]));
});

app.post('/updateTimeConfig', (req, res) =>
{
	let reqdata =
		{
		"hours": req.body["hours"],
		"minutes": req.body["minutes"],
		"seconds": req.body["seconds"]
		}

	console.log(req.body);
	// console.log(reqdata["hours"], reqdata["minutes"], reqdata["seconds"]);
	if (reqdata["hours"] === undefined || reqdata["minutes"] === undefined || reqdata["seconds"] === undefined)
	{
		res.sendStatus(400)
		throw new Error("Invalid data")
	}

	try
	{
		fs.writeFileSync("./config/init_time.json", JSON.stringify(reqdata));
		time_data_writeable = reqdata
		res.sendStatus(200)
	}
	catch (e)
	{
		console.error(e);
		res.sendStatus(500)
	}

});

