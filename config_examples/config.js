var server_port = "8011"
var server_bind_address = "127.0.0.1"

var _initialHours = 10
var _initialMinutes = 0
var _initialSeconds = 0


// Login Data
// DO NOT SHARE //// DO NOT SHARE //// DO NOT SHARE //// DO NOT SHARE //// DO NOT SHARE //
// Twitch
var twitch_channel_name = ""; // Which channel to join

var streamlabs_token = ""
var streamelements_token = ""
var streamloots_token = ""
// DO NOT SHARE //// DO NOT SHARE //// DO NOT SHARE //// DO NOT SHARE //// DO NOT SHARE //



// Max Counter Time (Leave At 0 For No Limit)
var saveInterval = 5000 // save to cookie interval in miliseconds
var maxHours = 0
var maxMinutes = 0
var maxSeconds = 0

// General Twitch, Streamlabs And StreamElements Config
var seconds_added_per_sub_prime = 30
var seconds_added_per_sub_tier1 = 30
var seconds_added_per_sub_tier2 = 60
var seconds_added_per_sub_tier3 = 120

var seconds_added_per_resub_prime = 30
var seconds_added_per_resub_tier1 = 30
var seconds_added_per_resub_tier2 = 60
var seconds_added_per_resub_tier3 = 120

var seconds_added_per_giftsub_tier1 = 30
var seconds_added_per_giftsub_tier2 = 60
var seconds_added_per_giftsub_tier3 = 120

var min_amount_of_bits = 500
var seconds_added_per_bits = 30

// Streamlabs And StreamElements Config
var min_donation_amount = 5
var seconds_added_per_donation = 30

// Streamloots Config
var min_amount_of_chests = 5
var seconds_added_per_chests = 30
