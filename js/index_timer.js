const timeText = document.getElementById("timeText");
const bc = new BroadcastChannel("SubChannel");
const st = new BroadcastChannel("SendTime");

let endingTime = new Date(Date.now());
let initialHours = getCookie("initHours")
if (initialHours)
{
    endingTime = timeFunc.addHours(endingTime, Number(initialHours));
}
else
{
    endingTime = timeFunc.addHours(endingTime, _initialHours);
}

let initialMinutes = getCookie("initMin")
if (initialMinutes)
    {
        endingTime = timeFunc.addMinutes(endingTime, Number(initialMinutes));
    }
else
    {
        endingTime = timeFunc.addMinutes(endingTime, _initialMinutes);
    }

let initialSeconds = getCookie("initSec")
if (initialSeconds)
    {
        endingTime = timeFunc.addSeconds(endingTime, Number(initialSeconds));
    }
else
    {
        endingTime = timeFunc.addSeconds(endingTime, _initialSeconds);
    }


let users = [];
let time;
let countdownEnded = false
let saveTime = new Date(Date.now());

const getNextTime = () =>
{
    let currentTime = new Date(Date.now());
    let differenceTime = endingTime - currentTime;
    time = `${timeFunc.getHours(differenceTime)}:${timeFunc.getMinutes(differenceTime)}:${timeFunc.getSeconds(differenceTime)}`;
    if (differenceTime <= 0)
    {
        clearInterval(countdownUpdater);
        countdownEnded = true;
        time = "00:00:00";
    }
    timeText.innerText = time;

    // console.log(Date.now() - saveTime)
    if ((Date.now() - saveTime) >= saveInterval)
    {
        setCookie("initHours", timeFunc.getHours(differenceTime), 14)
        setCookie("initMin", timeFunc.getMinutes(differenceTime), 14)
        setCookie("initSec", timeFunc.getSeconds(differenceTime), 14)

        saveTime = new Date(Date.now());

    }

};

let countdownUpdater = setInterval(() =>
    {
        getNextTime();
    }, 100);


const addTime = async (time, s) =>
{
    endingTime = timeFunc.addSeconds(time, s);

	if (!(maxHours === 0 && maxMinutes === 0 && maxSeconds === 0))
    {
		let maxTime = timeFunc.getMilliseconds(new Date(Date.now()), maxHours, maxMinutes, maxSeconds);
		if (endingTime.getTime() > maxTime.getTime()) endingTime = maxTime;
	}

    if (s >= 0)
    {
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
    }
    else {
        let addedTime = document.createElement("p");
        addedTime.classList = "addedTime";
        addedTime.innerText = `${s}s`;
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
    }

};

st.onmessage = (event) => {
    console.log(event);
    addTime(endingTime, event["data"])
};


const testAddTime = (times, delay) =>
{
    let addTimeInterval = setInterval(async () =>
    {
        if (times > 0)
        {
            await sleep(randomInRange(50, delay-50));
            addTime(endingTime, 30);
            --times;
        }
        else
        {
            clearInterval(addTimeInterval);
        }
    }, delay);
};
