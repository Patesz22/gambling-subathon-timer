if (twitch_channel_name !== "") {
    const client = new tmi.client({
        connection: {
            reconnect: true,
            secure: true,
        },
        channels: [twitch_channel_name],
    });

    client.connect();
    console.log(`Client Connected`);

    // // https://github.com/tmijs/docs/blob/gh-pages/_posts/v1.4.2/2019-03-03-Events.md#subscription
    // client.on('subscription', (channel, username, methods, message, userstate) =>
    // {
    //     if (!countdownEnded)
    //         {
    //             console.log("sub")
    //             console.log(channel)
    //             console.log(username)
    //             console.log(message)
    //             console.log(Object.assign(methods))
    //             console.log(Object.keys(methods))
    //             console.log(Object.values(methods))
    //             console.log(Object.assign(userstate))
    //             console.log(Object.keys(userstate))
    //             console.log(Object.values(userstate))
    //
    //             switch (methods['plan'])
    //                 {
    //                     case "Prime":
    //                         eventQueue.push(["newsub", "Prime", username]);
    //                         addTime(endingTime, seconds_added_per_sub_prime);
    //                         console.log(`Added ${seconds_added_per_sub_prime} Seconds Because ${username} Subscribed With Prime`);
    //                         // bc.postMessage("Prime sub")
    //                         break;
    //                     case "1000":
    //                         eventQueue.push(["newsub", "1000", username]);
    //                         addTime(endingTime, seconds_added_per_sub_tier1);
    //                         console.log(`Added ${seconds_added_per_sub_tier1} Seconds Because ${username} Subscribed With Tier 1`);
    //                         // bc.postMessage("Tier one sub")
    //                         break;
    //                     case "2000":
    //                         eventQueue.push(["newsub", "2000", username]);
    //                         addTime(endingTime, seconds_added_per_sub_tier2);
    //                         console.log(`Added ${seconds_added_per_sub_tier2} Seconds Because ${username} Subscribed With Tier 2`);
    //                         // bc.postMessage("Tier two sub")
    //                         break;
    //                     case "3000":
    //                         eventQueue.push(["newsub", "3000", username]);
    //                         addTime(endingTime, seconds_added_per_sub_tier3);
    //                         console.log(`Added ${seconds_added_per_sub_tier3} Seconds Because ${username} Subscribed With Tier 3`);
    //                         // bc.postMessage("Tier three sub")
    //                         break;
    //                 }
    //             if (!users.includes(username))
    //                 {
    //                     users.push(username);
    //                 }
    //         }
    // });
    //
    // //https://github.com/tmijs/docs/blob/gh-pages/_posts/v1.4.2/2019-03-03-Events.md#resub
    // client.on('resub', (channel, username, months, message, userstate, methods) => {
    //     if (!countdownEnded)
    //         {
    //             console.log("resub")
    //             console.log(channel)
    //             console.log(username)
    //             console.log(message)
    //             console.log(Object.assign(methods))
    //             console.log(Object.keys(methods))
    //             console.log(Object.values(methods))
    //             console.log(Object.assign(userstate))
    //             console.log(Object.keys(userstate))
    //             console.log(Object.values(userstate))
    //             switch (methods['plan'])
    //                 {
    //                     case "Prime":
    //                         eventQueue.push(["resub", "Prime", username]);
    //                         addTime(endingTime, seconds_added_per_resub_prime);
    //                         console.log(`Added ${seconds_added_per_resub_prime} Seconds Because ${username} ReSubscribed With Prime`);
    //                         // bc.postMessage("Prime resub")
    //                         break;
    //                     case "1000":
    //                         eventQueue.push(["resub", "1000", username]);
    //                         addTime(endingTime, seconds_added_per_resub_tier1);
    //                         console.log(`Added ${seconds_added_per_resub_tier1} Seconds Because ${username} ReSubscribed With Tier 1`);
    //                         // bc.postMessage("Tier one resub")
    //                         break;
    //                     case "2000":
    //                         eventQueue.push(["resub", "2000", username]);
    //                         addTime(endingTime, seconds_added_per_resub_tier2);
    //                         console.log(`Added ${seconds_added_per_resub_tier2} Seconds Because ${username} ReSubscribed With Tier 2`);
    //                         // bc.postMessage("Tier two resub")
    //                         break;
    //                     case "3000":
    //                         eventQueue.push(["resub", "3000", username]);
    //                         addTime(endingTime, seconds_added_per_resub_tier3);
    //                         console.log(`Added ${seconds_added_per_resub_tier3} Seconds Because ${username} ReSubscribed With Tier 3`);
    //                         // bc.postMessage("Tier three resub")
    //                         break;
    //                 }
    //             if (!users.includes(username))
    //                 {
    //                     users.push(username);
    //                 }
    //         }
    // });


    // Yes, this will not be implemented, because when a mystery subgift occurs, the twitch api for some reason sends
    // a 'subgift' call for each gifted

    // // https://github.com/tmijs/docs/blob/gh-pages/_posts/v1.4.2/2019-03-03-Events.md#subgift
    //                     // channel, username, streakMonths, recipient, methods, userstate
    // client.on('subgift', (channel, username, months, recipient, methods, userstate) =>
    // {
    //     if (!countdownEnded)
    //     {
    //         console.log("subgift")
    //         console.log(channel)
    //         console.log(username)
    //         console.log(months)
    //         console.log(recipient)
    //         console.log(Object.assign(methods))
    //         console.log(Object.keys(methods))
    //         console.log(Object.values(methods))
    //         console.log(Object.assign(userstate))
    //         console.log(Object.keys(userstate))
    //         console.log(Object.values(userstate))
    //         let giftCount = ~~userstate["msg-param-sender-count"];
    //         console.log( giftCount);
    //         switch (methods['plan'])
    //             {
    //                 case "Prime":
    //                     for (let i = 0; i < giftCount; i++)
    //                         {
    //                             addTime(endingTime, seconds_added_per_giftsub_tier1);
    //                             console.log(`Added ${seconds_added_per_giftsub_tier1} Seconds Because ${username} Gifted A Tier 1 Sub`);
    //                         }
    //                     break;
    //
    //                 case "1000":
    //                     for (let i = 0; i < giftCount; i++)
    //                         {
    //                             addTime(endingTime, seconds_added_per_giftsub_tier1);
    //                             console.log(`Added ${seconds_added_per_giftsub_tier1} Seconds Because ${username} Gifted A Tier 1 Sub`);
    //                         }
    //                     break;
    //
    //                 case "2000":
    //                     for (let i = 0; i < giftCount; i++)
    //                         {
    //                             addTime(endingTime, seconds_added_per_giftsub_tier2);
    //                             console.log(`Added ${seconds_added_per_giftsub_tier2} Seconds Because ${username} Gifted A Tier 2 Sub`);
    //                         }
    //                     break;
    //
    //                 case "3000":
    //                     for (let i = 0; i < giftCount; i++)
    //                         {
    //                             addTime(endingTime, seconds_added_per_giftsub_tier3);
    //                             console.log(`Added ${seconds_added_per_giftsub_tier3} Seconds Because ${username} Gifted A Tier 3 Sub`);
    //                         }
    //                     break;
    //             }
    //             if (!users.includes(username))
    //             {
    //                 users.push(username);
    //             }
    //     }
    // });

    //https://github.com/tmijs/docs/blob/gh-pages/_posts/v1.4.2/2019-03-03-Events.md#submysterygift
                                // channel, username, numbOfSubs, methods, userstate
    // client.on("submysterygift", (channel, username, numbOfSubs, methods, userstate) =>
    // {
    //     if (!countdownEnded)
    //         {
    //             console.log("submysterygift")
    //             console.log(username)
    //             console.log(numbOfSubs)
    //             console.log(Object.assign(methods))
    //             console.log(Object.keys(methods))
    //             console.log(Object.values(methods))
    //             console.log(Object.assign(userstate))
    //             console.log(Object.keys(userstate))
    //             console.log(Object.values(userstate))
    //             console.log(methods['plan'])
    //             // let giftCount = ~~userstate["msg-param-sender-count"]; // lifetime number of gifts
    //             // console.log(giftCount);
    //
    //             switch (methods['plan'])
    //                 {
    //                     case "Prime":
    //                         eventQueue.push(["subgift", "Prime", username, numbOfSubs]);
    //                         for (let i = 0; i < Number(numbOfSubs); i++)
    //                             {
    //                                 console.log(i)
    //                                 addTime(endingTime, seconds_added_per_giftsub_tier1);
    //                                 console.log(`Added ${seconds_added_per_giftsub_tier1} Seconds Because ${username} Gifted A Tier 1 Sub`);
    //                             }
    //                         // bc.postMessage("Prime subgift")
    //                         break;
    //
    //                     case "1000":
    //                         eventQueue.push(["subgift", "1000", username, numbOfSubs]);
    //                         for (let i = 0; i < Number(numbOfSubs); i++)
    //                             {
    //                                 console.log(i)
    //                                 addTime(endingTime, seconds_added_per_giftsub_tier1);
    //                                 console.log(`Added ${seconds_added_per_giftsub_tier1} Seconds Because ${username} Gifted A Tier 1 Sub`);
    //                             }
    //                         // bc.postMessage("Tier one subgift")
    //                         break;
    //
    //                     case "2000":
    //                         eventQueue.push(["subgift", "2000", username, numbOfSubs]);
    //                         for (let i = 0; i < Number(numbOfSubs); i++)
    //                             {
    //                                 console.log(i)
    //                                 addTime(endingTime, seconds_added_per_giftsub_tier2);
    //                                 console.log(`Added ${seconds_added_per_giftsub_tier2} Seconds Because ${username} Gifted A Tier 2 Sub`);
    //                             }
    //                         // bc.postMessage("Tier two subgift")
    //                         break;
    //
    //                     case "3000":
    //                         eventQueue.push(["subgift", "3000", username, numbOfSubs]);
    //                         for (let i = 0; i < Number(numbOfSubs); i++)
    //                             {
    //                                 console.log(i)
    //                                 addTime(endingTime, seconds_added_per_giftsub_tier3);
    //                                 console.log(`Added ${seconds_added_per_giftsub_tier3} Seconds Because ${username} Gifted A Tier 3 Sub`);
    //                             }
    //                         // bc.postMessage("Tier three subgift")
    //                         break;
    //                 }
    //                 if (!users.includes(username))
    //                 {
    //                     users.push(username);
    //                 }
    //         }
    // });
    //
    //
    // // https://github.com/tmijs/docs/blob/gh-pages/_posts/v1.4.2/2019-03-03-Events.md#giftpaidupgrade
    // // https://github.com/tmijs/docs/blob/gh-pages/_posts/v1.4.2/2019-03-03-Events.md#anongiftpaidupgrade
    // //
    // // todo
    //
    //
    //
    //
    // // https://github.com/tmijs/docs/blob/gh-pages/_posts/v1.4.2/2019-03-03-Events.md#cheer
    // client.on('cheer', (channel, userstate, message) =>
    // {
    //     if (!countdownEnded)
    //     {
    //         let time = 0
    //         console.log(userstate.bits)
    //         if (userstate.bits >= min_amount_of_bits)
    //         {
    //             // bc.postMessage("Bits")
    //             let times = Math.floor(userstate.bits/min_amount_of_bits);
    //             addTime(endingTime, seconds_added_per_bits * times);
    //             time += seconds_added_per_bits * times
    //             console.log(`Added ${seconds_added_per_bits * times} Seconds Because ${userstate['display-name']} Donated ${userstate.bits} Bits`);
    //             if (!users.includes(userstate['display-name']))
    //             {
    //                 users.push(userstate['display-name']);
    //             }
    //         }
    //     }
    // });

    client.on('message', (channel, userstate, message, self) =>
    {
        try
            {
                // returns ValueError at first launch in a new browser
                var inarray_t = getCookie("toSpin").split(',').map(function(n)
                {
                    return String(n);
                });
            }
        catch (e)
            {
                console.log("Cookie ValueError")
                setCookie("toSpin", undefined, 14)
                var inarray_t = getCookie("toSpin").split(',').map(function(n)
                {
                    return String(n);
                });

            }

        if (userstate['display-name'] !== "")
            {
                console.log("Twitch name added: " + userstate['display-name'])
                inarray_t.unshift(userstate['display-name'])
            }

        setCookie("toSpin", inarray_t.toString(), 14)
        console.log("Twitch Current cookie: ")
        console.log(inarray_t)
        // console.log(message)
    });

}

