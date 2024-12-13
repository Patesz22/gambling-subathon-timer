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

    // https://github.com/tmijs/docs/blob/gh-pages/_posts/v1.4.2/2019-03-03-Events.md#subscription
    client.on('subscription', (channel, username, methods, message, userstate) =>
    {
        if (!countdownEnded)
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

                switch (methods['plan'])
                    {
                        case "Prime":
                            inarray_t.unshift(`${username}:-?${seconds_added_per_sub_prime}`)
                            setCookie("toSpin", inarray_t.toString(), 14)
                            addTime(endingTime, seconds_added_per_sub_prime);
                            break;

                        case "1000":
                            inarray_t.unshift(`${username}:-?${seconds_added_per_sub_tier1}`)
                            setCookie("toSpin", inarray_t.toString(), 14)
                            addTime(endingTime, seconds_added_per_sub_tier1);
                            break;

                        case "2000":
                            inarray_t.unshift(`${username}:-?${seconds_added_per_sub_tier2}`)
                            setCookie("toSpin", inarray_t.toString(), 14)
                            addTime(endingTime, seconds_added_per_sub_tier2);
                            break;

                        case "3000":
                            inarray_t.unshift(`${username}:-?${seconds_added_per_sub_tier3}`)
                            setCookie("toSpin", inarray_t.toString(), 14)
                            addTime(endingTime, seconds_added_per_sub_tier3);
                            break;

                    }
                // if (!users.includes(username))
                //     {
                //         users.push(username);
                //     }
            }
    });


    // https://github.com/tmijs/docs/blob/gh-pages/_posts/v1.4.2/2019-03-03-Events.md#resub
    client.on('resub', (channel, username, months, message, userstate, methods) => {
        if (!countdownEnded)
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

                switch (methods['plan'])
                    {
                        case "Prime":
                            inarray_t.unshift(`${username}:-?${seconds_added_per_resub_prime}`)
                            setCookie("toSpin", inarray_t.toString(), 14)
                            addTime(endingTime, seconds_added_per_resub_prime);
                            break;
                        case "1000":
                            inarray_t.unshift(`${username}:-?${seconds_added_per_resub_tier1}`)
                            setCookie("toSpin", inarray_t.toString(), 14)
                            addTime(endingTime, seconds_added_per_resub_tier1);
                            break;
                        case "2000":
                            inarray_t.unshift(`${username}:-?${seconds_added_per_resub_tier2}`)
                            setCookie("toSpin", inarray_t.toString(), 14)
                            addTime(endingTime, seconds_added_per_resub_tier2);
                            break;
                        case "3000":
                            inarray_t.unshift(`${username}:-?${seconds_added_per_resub_tier3}`)
                            setCookie("toSpin", inarray_t.toString(), 14)
                            addTime(endingTime, seconds_added_per_resub_tier3);
                            break;
                    }
                // if (!users.includes(username))
                //     {
                //         users.push(username);
                //     }
            }
    });


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

    // https://github.com/tmijs/docs/blob/gh-pages/_posts/v1.4.2/2019-03-03-Events.md#submysterygift
    //                             channel, username, numbOfSubs, methods, userstate
    client.on("submysterygift", (channel, username, numbOfSubs, methods, userstate) =>
    {
        if (!countdownEnded)
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

                let time= 0
                switch (methods['plan'])
                    {
                        case "Prime":

                            for (let i = 0; i < Number(numbOfSubs); i++)
                                {
                                    time += seconds_added_per_giftsub_prime
                                }
                            inarray_t.unshift(`${username}:-?${time}`)
                            setCookie("toSpin", inarray_t.toString(), 14)
                            addTime(endingTime, seconds_added_per_giftsub_prime * time);
                            break;

                        case "1000":

                            for (let i = 0; i < Number(numbOfSubs); i++)
                                {
                                    time += seconds_added_per_giftsub_tier1
                                }
                            inarray_t.unshift(`${username}:-?${time}`)
                            setCookie("toSpin", inarray_t.toString(), 14)
                            addTime(endingTime, seconds_added_per_giftsub_tier1 * time);
                            break;

                        case "2000":

                            for (let i = 0; i < Number(numbOfSubs); i++)
                                {
                                    time += seconds_added_per_giftsub_tier2
                                }
                            inarray_t.unshift(`${username}:-?${time}`)
                            setCookie("toSpin", inarray_t.toString(), 14)
                            addTime(endingTime, seconds_added_per_giftsub_tier2 * time);
                            break;

                        case "3000":

                            for (let i = 0; i < Number(numbOfSubs); i++)
                                {
                                    time += seconds_added_per_giftsub_tier3
                                }
                            inarray_t.unshift(`${username}:-?${time}`)
                            setCookie("toSpin", inarray_t.toString(), 14)
                            addTime(endingTime, seconds_added_per_giftsub_tier3 * time);
                            break;
                    }
                    // if (!users.includes(username))
                    // {
                    //     users.push(username);
                    // }
            }
    });


    // https://github.com/tmijs/docs/blob/gh-pages/_posts/v1.4.2/2019-03-03-Events.md#giftpaidupgrade
    client.on('giftpaidupgrade', (channel, username, sender, userstate) => {
        if (!countdownEnded)
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

                inarray_t.unshift(`${username}:-?${seconds_added_per_continue}`)
                setCookie("toSpin", inarray_t.toString(), 14)
                addTime(endingTime, seconds_added_per_continue);

                // if (!users.includes(username))
                //     {
                //         users.push(username);
                //     }
            }
    });


    // https://github.com/tmijs/docs/blob/gh-pages/_posts/v1.4.2/2019-03-03-Events.md#anongiftpaidupgrade
    client.on('anongiftpaidupgrade', (channel, username, userstate) => {
        if (!countdownEnded)
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

                inarray_t.unshift(`${username}:-?${seconds_added_per_continue}`)
                setCookie("toSpin", inarray_t.toString(), 14)
                addTime(endingTime, seconds_added_per_continue);

                // if (!users.includes(username))
                //     {
                //         users.push(username);
                //     }
            }
    });



    // https://github.com/tmijs/docs/blob/gh-pages/_posts/v1.4.2/2019-03-03-Events.md#cheer
    client.on('cheer', (channel, userstate, message) =>
    {
        if (!countdownEnded)
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

            let time= 0
            if (userstate.bits >= min_amount_of_bits)
            {
                let times = Math.floor(userstate.bits/min_amount_of_bits);
                time += seconds_added_per_bits * times
                inarray_t.unshift(`${userstate['display-name']}:-?${time}`)
                setCookie("toSpin", inarray_t.toString(), 14)
                addTime(endingTime, seconds_added_per_bits * time);
                // if (!users.includes(userstate['display-name']))
                // {
                //     users.push(userstate['display-name']);
                // }
            }
        }
    });

    // client.on('message', (channel, userstate, message, self) =>
    // {
    //     console.log(userstate)
    //     try
    //         {
    //             // returns ValueError at first launch in a new browser
    //             var inarray_t = getCookie("toSpin").split(',').map(function(n)
    //             {
    //                 return String(n);
    //             });
    //         }
    //     catch (e)
    //         {
    //             console.log("Cookie ValueError")
    //             setCookie("toSpin", undefined, 14)
    //             var inarray_t = getCookie("toSpin").split(',').map(function(n)
    //             {
    //                 return String(n);
    //             });
    //
    //         }
    //
    //     let time = 60;
    //     if (userstate['display-name'] !== "")
    //         {
    //             // console.log("Twitch name added: " + userstate['display-name'])
    //             inarray_t.unshift(`${userstate['display-name']}:-?${time}`)
    //
    //             addTime(endingTime, time)
    //             setCookie("toSpin", inarray_t.toString(), 14)
    //             // console.log("Twitch Current cookie: ")
    //             // console.log(inarray_t)
    //             // console.log(message)
    //         }
    //
    // });

}

