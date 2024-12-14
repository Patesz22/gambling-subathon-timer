
// Timer config //// Timer config //// Timer config //// Timer config //// Timer config //// Timer config //// Timer config //
// Timer start time
var _initialHours = 10
var _initialMinutes = 0
var _initialSeconds = 0


// Login Data
// DO NOT SHARE //// DO NOT SHARE //// DO NOT SHARE //// DO NOT SHARE //// DO NOT SHARE //

// Twitch
var twitch_channel_name = ""; // Which channel to join


var streamlabs_token = "" // WIP
var streamelements_token = "" // WIP
var streamloots_token = "" // WIP
// DO NOT SHARE //// DO NOT SHARE //// DO NOT SHARE //// DO NOT SHARE //// DO NOT SHARE //



// Max Counter Time (Leave At 0 For No Limit)
var saveInterval = 5000 // Save to cookie interval in miliseconds
var maxHours = 0
var maxMinutes = 0
var maxSeconds = 0


// Sub
// General Twitch, Streamlabs And StreamElements Config
var seconds_added_per_sub_prime = 30
var seconds_added_per_sub_tier1 = 30
var seconds_added_per_sub_tier2 = 60
var seconds_added_per_sub_tier3 = 120


// Resub
var seconds_added_per_resub_prime = 30
var seconds_added_per_resub_tier1 = 30
var seconds_added_per_resub_tier2 = 60
var seconds_added_per_resub_tier3 = 120


// Subgifts
// For each gifted sub (example: 25 tier 1 gifted -> 25 * 30sec)
var seconds_added_per_giftsub_prime = 30
var seconds_added_per_giftsub_tier1 = 30
var seconds_added_per_giftsub_tier2 = 60
var seconds_added_per_giftsub_tier3 = 120

// Continuing gifted sub
var seconds_added_per_continue = 180


// Bits
// For each 'min_amount_of_bits', 'seconds_added_per_bits' gets added

// Example1: 1000 bits -> 500 is the minimum -> 1000/500 = 2 -> 2 * 30sec (no bits are "lost")
// Example2: 1200 bits -> 500 is the minimum -> 1200/500 = 2 -> 2 * 30sec (200 bits are "lost")
var min_amount_of_bits = 100
var seconds_added_per_bits = 30


//Streamlabs And StreamElements Config
// The same as bits
var min_donation_amount = 5
var seconds_added_per_donation = 30


// Streamloots Config
// The same as bits
var min_amount_of_chests = 5
var seconds_added_per_chests = 30


// Timer color
// Colors can be changed inside the .css files


// wheel config //// wheel config //// wheel config //// wheel config //// wheel config //// wheel config //// wheel config //

// There are two wheel types - 'weighted' and 'full random'
// 1. weighted (this is only for pussies btw)
//      Each item has a certain probability to appear in the wheel
//      This probability is different for each item (tho you can set the same for any number of items)
//      This means, that you can 'rig' the wheel, so that certain items appear less, than others
//      With this option, the program spins the wheel to the "winner" item
//      The area which an item occupies is random number between two values (it has no effect in this case)

// 2. full random (default)
//      Every item has the same probability to appear
//      The area which an item occupies is random number between two values
//      With this option, the program literally just spins the wheel at a certain speed, and it's all up to luck


// You can change the type, by deleting the "// " from the front, and putting it in front of the other one
// If both are commented out (without the // at front), the latter one will be used (please don't do this)


var wheelpick = "full random"
// var wheelpick = "weighted" // change wheel_spin_time


// When to spin the wheel
// Prime sub = 0 | tier 1 sub = 1 | tier 2 sub = 2 | tier 3 sub = 3 //
let min_sub_tier = 2 // The wheel will spin at the chosen tier + all of the above tiers
let min_bit_amount = 1000 // The wheel will spin at or above this amount
let min_tier1_gifted = 20 // The wheel will spin at or above this amount
let min_tier2_gifted = 10 // The wheel will spin at or above this amount
let min_tier3_gifted = 5 // The wheel will spin at or above this amount


// The number of items to appear on the wheel
let wheel_count_items = [5, 6, 7]
let wheel_count_probability = [0.5, 0.3, 0.3]


// Wheel stakes
// Changing these values are not recommended
// (default is a number between 20% - 50%)
let wheel_min_area = 0.20
let wheel_max_area = 0.50


// Wheel spinning properties (only applies if "full random")
let wheel_spin_speed = 3600 // How many rotations per sec (1 rotation is 360)
let wheel_spin_resistance = -600 // How many to subtract form spin_speed per sec
let wheel_spin_time = 5000 // Only applies when "weighted" // How long does the wheel spin for
let wheel_num_of_revs = 2 // Only applies when "weighted" // How many times the wheel does a 360 spin before stopping

// Wheel colors
// Colors can be changed inside the .css files

// The number of colors has to match the max number in wheel_count_items
let wheel_colors = ['#ffc93c', '#66bfbf', '#a2d5f2', '#4543ef', '#ef7b07', '#82e273', '#ff0bfe']
let wheel_center_img = "./img/NeuroKuru.gif" // Changes the png/jpg/gif at the center of the wheel


// Wheel timers
let wheel_start_delay = 1500; // How long will the wheel stay on screen before staring
let wheel_result_delay = 2500; // How long will the wheel stay on screen before disappearing
let wheel_between_delay = wheel_start_delay + wheel_result_delay + Math.round(wheel_spin_speed/wheel_spin_resistance*-1) + 8000; // How long will the wheel wait before continuing

// Probability = n% / 100 -> 40% / 100 = 0.4
// Probability only applies during weighted mode
const wheelItems = {
    '1': {
        'label': '-50%',
        'probability': 0.01,
    },
    '2': {
        'label': '-25%',
        'probability': 0.02,
    },
    '3': {
        'label': '-20%',
        'probability': 0.04,
    },
    '4': {
        'label': '-15%',
        'probability': 0.06,
    },
    '5': {
        'label': '-10%',
        'probability': 0.10,
    },
    '6': {
        'label': '-9%',
        'probability': 0.12,
    },
    '7': {
        'label': '-8%',
        'probability': 0.14,
    },
    '8': {
        'label': '-7%',
        'probability': 0.16,
    },
    '9': {
        'label': '-6%',
        'probability': 0.18,
    },
    '10': {
        'label': '-5%',
        'probability': 0.20,
    },
    '11': {
        'label': '-4%',
        'probability': 0.24,
    },
    '12': {
        'label': '-3%',
        'probability': 0.28,
    },
    '13': {
        'label': '-2%',
        'probability': 0.32,
    },
    '14': {
        'label': '-1%',
        'probability': 0.36,
    },
    '15': {
        'label': '+50%',
        'probability': 0.01,
    },
    '16': {
        'label': '+25%',
        'probability': 0.02,
    },
    '17': {
        'label': '+20%',
        'probability': 0.04,
    },
    '18': {
        'label': '+15%',
        'probability': 0.06,
    },
    '19': {
        'label': '+10%',
        'probability': 0.10,
    },
    '20': {
        'label': '+9%',
        'probability': 0.12,
    },
    '21': {
        'label': '+8%',
        'probability': 0.14,
    },
    '22': {
        'label': '+7%',
        'probability': 0.16,
    },
    '23': {
        'label': '+6%',
        'probability': 0.18,
    },
    '24': {
        'label': '+5%',
        'probability': 0.20,
    },
    '25': {
        'label': '+4%',
        'probability': 0.24,
    },
    '26': {
        'label': '+3%',
        'probability': 0.28,
    },
    '27': {
        'label': '+2%',
        'probability': 0.32,
    },
    '28': {
        'label': '+1%',
        'probability': 0.36,
    }

};


// DO NOT EDIT BELOW THIS POINT //// DO NOT EDIT BELOW THIS POINT //// DO NOT EDIT BELOW THIS POINT //// DO NOT EDIT BELOW THIS POINT //
