export var server_port = "8011"
export var server_bind_address = "127.0.0.1"


// Login Data
// DO NOT SHARE //// DO NOT SHARE //// DO NOT SHARE //// DO NOT SHARE //// DO NOT SHARE //
// Twitch
export var twitch_channel_name = ""
export var twitch_client_id = ""
export var twitch_client_secret = ""

export var twitch_client
export var twitch_access_token = "asd"
export var twitch_refresh_token = ""


export var streamlabs_token = ""
export var streamelements_token = ""
export var streamloots_token = ""
// DO NOT SHARE //// DO NOT SHARE //// DO NOT SHARE //// DO NOT SHARE //// DO NOT SHARE //



// Max Counter Time (Leave At 0 For No Limit)
export var saveInterval = 5000 // init_time.json save interval in miliseconds
export var maxHours = 0
export var maxMinutes = 0
export var maxSeconds = 0

// General Twitch, Streamlabs And StreamElements Config
export var seconds_added_per_sub_prime = 30
export var seconds_added_per_sub_tier1 = 30
export var seconds_added_per_sub_tier2 = 60
export var seconds_added_per_sub_tier3 = 120

export var seconds_added_per_resub_prime = 30
export var seconds_added_per_resub_tier1 = 30
export var seconds_added_per_resub_tier2 = 60
export var seconds_added_per_resub_tier3 = 120

export var seconds_added_per_giftsub_tier1 = 30
export var seconds_added_per_giftsub_tier2 = 60
export var seconds_added_per_giftsub_tier3 = 120

export var min_amount_of_bits = 500
export var seconds_added_per_bits = 30

// Streamlabs And StreamElements Config
export var min_donation_amount = 5
export var seconds_added_per_donation = 30

// Streamloots Config
export var min_amount_of_chests = 5
export var seconds_added_per_chests = 30



// Do not modify below this point //// Do not modify below this point //// Do not modify below this point //// Do not modify below this point //
// Do not modify below this point //// Do not modify below this point //// Do not modify below this point //// Do not modify below this point //

export var countdownEnded = false

// let getConfig = async (path) => {
//     try {
//         let temp;
//         temp = await fetch(`http://${server_bind_address}:${server_port}/${path}`)
//         return Number(await temp.json())
//     }
//     catch (e) {
//         return 0
//     }
// }

let getConfig = async (path) => {
    let temp;
    temp = await fetch(`http://${server_bind_address}:${server_port}/${path}`)
    return Number(await temp.json())
}

export var initialHours = await getConfig("initHours") || 0
export var initialMinutes =  await getConfig("initMin") || 0
export var initialSeconds =  await getConfig("initSec") || 0