function getWinner()
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
        return choicedict
    }

function getCookie(name)
    {
        try
            {
            var nameEQ = name + "=";
            var ca = document.cookie.split(';');
            for(var i=0;i < ca.length;i++)
                {
                    var c = ca[i];
                    while (c.charAt(0) === ' ') c = c.substring(1,c.length);
                    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length,c.length);
                }
            }
        catch (e)
            {
                console.log("No cookie set")
                return "";
            }

        return "";
    }


function setCookie(name,value,days)
    {
        var expires = "";
        if (days)
        {
            var date = new Date();
            date.setTime(date.getTime() + (days*24*60*60*1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "")  + expires + "; path=/; SameSite=Lax";
    }


function getWeighted(count)
    {
        // console.log(count);
        let prob = []
        let items = []
        let ret = []
        // console.log(Object.keys(wheelItems).length)
        for (let i = 1; i <= Object.keys(wheelItems).length; i++)
            {
                items.push(wheelItems[i]["label"])
                prob.push(Number(wheelItems[i]["probability"]))
            }

        // console.log(items, prob)
        ret.push({"label": weightedRandom(items, prob, 1)[0], "weight": getRandomFloat(wheel_min_area, wheel_max_area)})
        // console.log(ret)

        let choice = RandomChoice(items, count-1);
        console.log(count, choice);
        for (let i = 0; i < choice.length; i++)
            {
                ret.push({"label": choice[i], "weight": getRandomFloat(wheel_min_area, wheel_max_area)});
            }

        // console.log(ret)
        return ret;
    }


function getFullRandom(count)
    {
        // console.log(count);
        let prob = []
        let items = []
        let ret = []
        // console.log(Object.keys(wheelItems).length)
        for (let i = 1; i <= Object.keys(wheelItems).length; i++)
            {
                items.push(wheelItems[i]["label"])
                prob.push(Number(wheelItems[i]["probability"]))
            }

        let choice = RandomChoice(items, count);
        // console.log(count, choice);
        for (let i = 0; i < choice.length; i++)
            {
                ret.push({"label": choice[i], "weight": getRandomFloat(wheel_min_area, wheel_max_area)});
            }

        // console.log(ret)
        return ret;
    }


async function initQueue()
    {
        let inarray = getCookie("toSpin").split(',').map(function(n)
        {
            if (n === "")
                {
                    return undefined;
                }
            else
                {
                    return n;
                }

        });
        console.log("Current cookie: ")
        console.log(inarray);
        let currentEvent = inarray.pop()
        console.log("Popped element: ")

        if (currentEvent === undefined)
            {
                console.log(currentEvent);
                setCookie("toSpin", inarray.toString(), 14)
            }
        else
            {
                console.log(currentEvent);
                setCookie("toSpin", inarray.toString(), 14)
                console.log("Cookie set")
                bc.postMessage(currentEvent);
                console.log("bc Message sent")
                await sleep(wheel_between_delay)

            }
        setTimeout(initQueue, 1000);
    }