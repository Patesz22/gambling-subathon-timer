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
        let prob = []
        let items = []
        let ret = []

        for (let i = 1; i <= Object.keys(wheelItems).length; i++)
            {
                items.push(wheelItems[i]["label"])
                prob.push(Number(wheelItems[i]["probability"]))
            }

        ret.push({"label": weightedRandom(items, prob, 1)[0], "weight": getRandomFloat(wheel_min_area, wheel_max_area)})

        let choice = RandomChoice(items, count-1);
        console.log(count, choice);
        for (let i = 0; i < choice.length; i++)
            {
                ret.push({"label": choice[i], "weight": getRandomFloat(wheel_min_area, wheel_max_area)});
            }

        return ret;
    }


function getFullRandom(count)
    {
        let prob = []
        let items = []
        let ret = []

        for (let i = 1; i <= Object.keys(wheelItems).length; i++)
            {
                items.push(wheelItems[i]["label"])
                prob.push(Number(wheelItems[i]["probability"]))
            }

        let choice = RandomChoice(items, count);

        for (let i = 0; i < choice.length; i++)
            {
                ret.push({"label": choice[i], "weight": getRandomFloat(wheel_min_area, wheel_max_area)});
            }


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

        let currentEvent = inarray.pop()

        if (currentEvent === undefined)
            {
                setCookie("toSpin", inarray.toString(), 14)
            }
        else
            {
                setCookie("toSpin", inarray.toString(), 14)
                bc.postMessage(currentEvent);
                await sleep(wheel_between_delay)
            }
        setTimeout(initQueue, 1000);
    }