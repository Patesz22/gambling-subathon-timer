if (twitch_channel_name !== "") {
    const client = new tmi.client({
        connection: {
            reconnect: true,
            secure: true,
        },
        channels: [twitch_channel_name],
    });

    client.connect();
    logMessage("Twitch", `Client Connected`);

    client.on('subscription', (channel, username, methods, message, userstate) =>
    {
        if (!countdownEnded)
            {
                logMessage("Twitch", "sub")
                logMessage("Twitch", channel)
                logMessage("Twitch", username)
                logMessage("Twitch", methods)
                logMessage("Twitch", message)
                logMessage("Twitch", userstate)

                switch (methods['plan'])
                    {
                        case "Prime":
                            addTime(endingTime, seconds_added_per_sub_prime);
                            logMessage("Twitch", `Added ${seconds_added_per_sub_prime} Seconds Because ${username} Subscribed With Prime`);
                            break;
                        case "1000":
                            addTime(endingTime, seconds_added_per_sub_tier1);
                            logMessage("Twitch", `Added ${seconds_added_per_sub_tier1} Seconds Because ${username} Subscribed With Tier 1`);
                            break;
                        case "2000":
                            addTime(endingTime, seconds_added_per_sub_tier2);
                            logMessage("Twitch", `Added ${seconds_added_per_sub_tier2} Seconds Because ${username} Subscribed With Tier 2`);
                            break;
                        case "3000":
                            addTime(endingTime, seconds_added_per_sub_tier3);
                            logMessage("Twitch", `Added ${seconds_added_per_sub_tier3} Seconds Because ${username} Subscribed With Tier 3`);
                            break;
                    }
                if (!users.includes(username))
                    {
                        users.push(username);
                    }
            }
    });

    //https://github.com/tmijs/docs/blob/gh-pages/_posts/v1.4.2/2019-03-03-Events.md#resub
    client.on('resub', (channel, username, months, message, userstate, methods) => {
        if (!countdownEnded)
            {
                logMessage("Twitch", "resub")
                logMessage("Twitch", channel)
                logMessage("Twitch", username)
                logMessage("Twitch", username)
                logMessage("Twitch", message)
                logMessage("Twitch", userstate)
                logMessage("Twitch", methods)
                switch (methods['plan'])
                    {
                        case "Prime":
                            addTime(endingTime, seconds_added_per_resub_prime);
                            logMessage("Twitch", `Added ${seconds_added_per_resub_prime} Seconds Because ${username} ReSubscribed With Prime`);
                            break;
                        case "1000":
                            addTime(endingTime, seconds_added_per_resub_tier1);
                            logMessage("Twitch", `Added ${seconds_added_per_resub_tier1} Seconds Because ${username} ReSubscribed With Tier 1`);
                            break;
                        case "2000":
                            addTime(endingTime, seconds_added_per_resub_tier2);
                            logMessage("Twitch", `Added ${seconds_added_per_resub_tier2} Seconds Because ${username} ReSubscribed With Tier 2`);
                            break;
                        case "3000":
                            addTime(endingTime, seconds_added_per_resub_tier3);
                            logMessage("Twitch", `Added ${seconds_added_per_resub_tier3} Seconds Because ${username} ReSubscribed With Tier 3`);
                            break;
                    }
                if (!users.includes(username))
                    {
                        users.push(username);
                    }
            }
    });

    // https://github.com/tmijs/docs/blob/gh-pages/_posts/v1.4.2/2019-03-03-Events.md#subgift
                        // channel, username, streakMonths, recipient, methods, userstate
    client.on('subgift', (channel, username, months, recipient, methods, userstate) =>
    {
        if (!countdownEnded)
        {
            logMessage("Twitch", "subgift")
            logMessage("Twitch",channel)
            logMessage("Twitch",username)
            logMessage("Twitch",months)
            logMessage("Twitch",recipient)
            logMessage("Twitch",methods)
            logMessage("Twitch",userstate)
            let giftCount = ~~userstate["msg-param-sender-count"];
            logMessage("Twitch", giftCount);
            switch (methods['plan'])
                {
                    case "Prime":
                        for (let i = 0; i < giftCount; i++)
                            {
                                addTime(endingTime, seconds_added_per_giftsub_tier1);
                                logMessage("Twitch", `Added ${seconds_added_per_giftsub_tier1} Seconds Because ${username} Gifted A Tier 1 Sub`);
                            }
                        break;

                    case "1000":
                        for (let i = 0; i < giftCount; i++)
                            {
                                addTime(endingTime, seconds_added_per_giftsub_tier1);
                                logMessage("Twitch", `Added ${seconds_added_per_giftsub_tier1} Seconds Because ${username} Gifted A Tier 1 Sub`);
                            }
                        break;

                    case "2000":
                        for (let i = 0; i < giftCount; i++)
                            {
                                addTime(endingTime, seconds_added_per_giftsub_tier2);
                                logMessage("Twitch", `Added ${seconds_added_per_giftsub_tier2} Seconds Because ${username} Gifted A Tier 2 Sub`);
                            }
                        break;

                    case "3000":
                        for (let i = 0; i < giftCount; i++)
                            {
                                addTime(endingTime, seconds_added_per_giftsub_tier3);
                                logMessage("Twitch", `Added ${seconds_added_per_giftsub_tier3} Seconds Because ${username} Gifted A Tier 3 Sub`);
                            }
                        break;
                }
                if (!users.includes(username))
                {
                    users.push(username);
                }
        }
    });

    //https://github.com/tmijs/docs/blob/gh-pages/_posts/v1.4.2/2019-03-03-Events.md#submysterygift
                                // channel, username, numbOfSubs, methods, userstate
    client.on("submysterygift", (channel, username, numbOfSubs, methods, userstate) =>
    {
        if (!countdownEnded)
            {
                logMessage("Twitch", "submysterygift")
                logMessage("Twitch",channel)
                logMessage("Twitch",username)
                logMessage("Twitch",numbOfSubs)
                logMessage("Twitch",methods)
                logMessage("Twitch",userstate)

                let giftCount = ~~userstate["msg-param-sender-count"];
                logMessage("Twitch", giftCount);

                switch (methods['plan'])
                    {
                        case "Prime":
                            for (let i = 0; i < numbOfSubs; i++)
                                {
                                    addTime(endingTime, seconds_added_per_giftsub_tier1);
                                    logMessage("Twitch", `Added ${seconds_added_per_giftsub_tier1} Seconds Because ${username} Gifted A Tier 1 Sub`);
                                }
                            break;

                        case "1000":
                            for (let i = 0; i < numbOfSubs; i++)
                                {
                                    addTime(endingTime, seconds_added_per_giftsub_tier1);
                                    logMessage("Twitch", `Added ${seconds_added_per_giftsub_tier1} Seconds Because ${username} Gifted A Tier 1 Sub`);
                                }
                            break;

                        case "2000":
                            for (let i = 0; i < numbOfSubs; i++)
                                {
                                    addTime(endingTime, seconds_added_per_giftsub_tier2);
                                    logMessage("Twitch", `Added ${seconds_added_per_giftsub_tier2} Seconds Because ${username} Gifted A Tier 2 Sub`);
                                }
                            break;

                        case "3000":
                            for (let i = 0; i < numbOfSubs; i++)
                                {
                                    addTime(endingTime, seconds_added_per_giftsub_tier3);
                                    logMessage("Twitch", `Added ${seconds_added_per_giftsub_tier3} Seconds Because ${username} Gifted A Tier 3 Sub`);
                                }
                            break;
                    }
                    if (!users.includes(username))
                    {
                        users.push(username);
                    }
            }
    });

    client.on('cheer', (channel, userstate, message) =>
    {
        if (!countdownEnded)
        {
            logMessage("Twitch",channel)
            logMessage("Twitch",message)
            logMessage("Twitch",userstate)
            if (userstate.bits >= min_amount_of_bits)
            {
                let times = Math.floor(userstate.bits/min_amount_of_bits);
                addTime(endingTime, seconds_added_per_bits * times);
                logMessage("Twitch", `Added ${seconds_added_per_bits * times} Seconds Because ${userstate['display-name']} Donated ${userstate.bits} Bits`);
                if (!users.includes(userstate['display-name']))
                {
                    users.push(userstate['display-name']);
                }
            }
        }
    });
}

