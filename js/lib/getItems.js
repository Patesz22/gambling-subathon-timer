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
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for(var i=0;i < ca.length;i++)
        {
            var c = ca[i];
            while (c.charAt(0) === ' ') c = c.substring(1,c.length);
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length,c.length);
        }
        return null;
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