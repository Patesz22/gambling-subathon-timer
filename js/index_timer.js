import * as config from '../config/config.js'
import timeFunc from './lib/timeFunc.js'
import {server_bind_address} from '../config/config.js';

const timeText = document.getElementById("timeText");

let endingTime = new Date(Date.now());
endingTime = timeFunc.addHours(endingTime, config.initialHours);
endingTime = timeFunc.addMinutes(endingTime, config.initialMinutes);
endingTime = timeFunc.addSeconds(endingTime, config.initialSeconds);

let users = [];
let time;
let saveTime = new Date(Date.now());

const getNextTime = () => {
    let currentTime = new Date(Date.now());
    let differenceTime = endingTime - currentTime;
    time = `${timeFunc.getHours(differenceTime)}:${timeFunc.getMinutes(differenceTime)}:${timeFunc.getSeconds(differenceTime)}`;
    if (differenceTime <= 0) {
        clearInterval(countdownUpdater);
        config.countdownEnded = true;
        time = "00:00:00";
    }
    timeText.innerText = time;

    // console.log(Date.now() - saveTime)
    if ((Date.now() - saveTime) >= config.saveInterval) {
        console.log(timeFunc.getHours(differenceTime))
        console.log(timeFunc.getMinutes(differenceTime))
        console.log(timeFunc.getSeconds(differenceTime))
        fetch(`http://${config.server_bind_address}:${config.server_port}/updateTimeConfig`, {
            method: "POST",
            // body: {
            //     "hours": timeFunc.getHours(differenceTime),
            //     "minutes": timeFunc.getMinutes(differenceTime),
            //     "seconds": timeFunc.getSeconds(differenceTime)
            // },
            body: JSON.stringify({
                hours: timeFunc.getHours(differenceTime),
                minutes: timeFunc.getMinutes(differenceTime),
                seconds: timeFunc.getSeconds(differenceTime)
            }),
            headers: {
                "Content-Type": "application/json"
            }
        });
        saveTime = new Date(Date.now());
    }

};

let countdownUpdater = setInterval(() => {
    getNextTime();
}, 100);


export const addTime = async (time, s) => {
    endingTime = timeFunc.addSeconds(time, s);

	if (!(config.maxHours === 0 && config.maxMinutes === 0 && config.maxSeconds === 0)) {
		let maxTime = timeFunc.getMilliseconds(new Date(Date.now()), config.maxHours, config.maxMinutes, config.maxSeconds);
		if (endingTime.getTime() > maxTime.getTime()) endingTime = maxTime;
	}

    let addedTime = document.createElement("p");
    addedTime.classList = "addedTime";
    addedTime.innerText = `+${s}s`;
    document.body.appendChild(addedTime);
    addedTime.style.display = "block";
    await sleep(50);
    addedTime.style.left = `${randomInRange(35, 65)}%`;
    addedTime.style.top = `${randomInRange(15, 40)}%`;
    addedTime.style.opacity = "1";
    await sleep(2500);
    addedTime.style.opacity = "0";
    await sleep(500);
    addedTime.remove();
};


const testAddTime = (times, delay) => {
    let addTimeInterval = setInterval(async () => {
        if (times > 0) {
            await sleep(randomInRange(50, delay-50));
            addTime(endingTime, 30);
            --times;
        }
        else {
            clearInterval(addTimeInterval);
        }
    }, delay);
};