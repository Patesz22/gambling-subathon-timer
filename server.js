import express from "express";
import cors from "cors";
import data from "./items.json" with { type: "json" };
import {weightedRandom} from './js/getRandomWinner.js';
import {RandomChoice} from './js/randomChoice.js';
import {getRandomFloat} from './src/util.js';
// const express = require('express');
// const cors = require("cors");
// const sample = require('./items.json');

const app = express();

const port = 8011;
const host = "127.0.0.1";
app.listen(port, host)
console.log(`http://${host}:${port}`)

app.use(cors());
// app.get('/', (req, res) => {
// 	res.json(sample);
// });

app.get('/winner', (req, res) => {
	let items = [];
	let prob = [];
	let	choicedict = {};
	for (let i = 1; i <= Object.keys(data).length; i++) {
		// console.log(data[i]);
		items.push(data[i]["label"])
		prob.push(Number(data[i]["probability"]))
	}

	let win = weightedRandom(items, prob, 1)
	Object.assign(choicedict, {"label": win[0], "weight": getRandomFloat(0.20, 0.50)})
	console.log(choicedict);
	res.json(choicedict);
});

app.get('/filleritems', (req, res) => {
	let items = [];
	let	choicearray = [];
	let count = Number(weightedRandom([5, 6, 7], [0.6, 0.3, 0.2], 1))
	for (let i = 1; i <= Object.keys(data).length; i++) {
		// console.log(data[i]);
		items.push(data[i]["label"])
	}

	let choice = RandomChoice(items, 10);
	for (let i = count-1; i < choice.length; i++) {
		choicearray.push({"label": choice[i], "weight": getRandomFloat(0.20, 0.50)});

	}
	console.log(choicearray);
	// Object.assign(choicedict, {"label": choice[0]}, {"label": choice[1]},
	// 	{"label": choice[2]}, {"label": choice[3]}, {"label": choice[4]}, {"label": choice[5]},
	// 	{"label": choice[6]}, {"label": choice[7]}, {"label": choice[8]}, {"label": choice[9]})

	// res.send("text")
	res.json(choicearray);
	console.log("\n");
});

app.get('/slicecount', (req, res) => {

	res.json(count);
});

app.get('/config', (req, res) => {
	res.json(data);
});



