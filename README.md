# Gambling subathon timer

A classic subathon timer merged with a wheel of fortune for the ultimate experience.
You can gamble your donations for even more time.


> [!WARNING]  
> Currently only twitch integration works!

## Demo
https://github.com/user-attachments/assets/b5680c0a-6a4a-499f-a23c-38803cc83f7d

## Configuration

1. Download the latest release from [here](https://github.com/Patesz22/gambling-subathon-timer/releases)
2. Extract the file and create a ```config``` folder in the main folder.
3. Install the dependencies
4. Copy **```config.js```** file from the ```config_examples``` folder to ```config``` folder.
5. Read and set up the copied config file.

## Usage

1. Open your prefered streaming software.
2. Add a new browser source and select the **```index_timer.html```** file.
3. Add a new browser source and select the **```index_wheel.html```** file.

## Documentation

### Basic configs
- ```_initialHours```: The starting hours at first launch
- ```_initialMinutes```: The starting minutes time at first launch
- ```_initialSeconds```: The starting seconds at first launch
- ```saveInterval```: How often the timer saves the time to browser cookies
- ```maxHours```: The max value of hours, which the timer will not exceed. Set to ```0``` to disable.
- ```maxMinutes```: The max value of minutes, which the timer will not exceed. Set to ```0``` to disable.
- ```maxSeconds```: The max value of Seconds, which the timer will not exceed. Set to ```0``` to disable.

### Authentication configs
- ```twitch_channel_name```: The name of the twitch channel
- ```streamlabs_token```: WIP The token for streamlabs integration
- ```streamelements_token```: WIP The token for streamelements integration
- ```streamloots_token```: WIP The token for streamloots integration

### Subscriptions
- ```seconds_added_per_sub_prime```: Seconds added for every prime subscription
- ```seconds_added_per_sub_tier1```: Seconds added for every tier 1 subscription
- ```seconds_added_per_sub_tier2```: Seconds added for every tier 2 subscription
- ```seconds_added_per_sub_tier3```: Seconds added for every tier 3 subscription

- ```seconds_added_per_resub_prime```: Seconds added for every prime re-subscription
- ```seconds_added_per_resub_tier1```: Seconds added for every tier 1 re-subscription
- ```seconds_added_per_resub_tier2```: Seconds added for every tier 2 re-subscription
- ```seconds_added_per_resub_tier3```: Seconds added for every tier 3 re-subscription

- ```seconds_added_per_giftsub_prime```: Seconds added for each gifted subscription
- ```seconds_added_per_giftsub_tier1```: Seconds added for each gifted subscription
- ```seconds_added_per_giftsub_tier2```: Seconds added for each gifted subscription
- ```seconds_added_per_giftsub_tier3```: Seconds added for each gifted subscription
- ```seconds_added_per_continue```: Seconds added for every continued subscription

### Bits
- ```min_amount_of_bits```: The minimum amount of bits needed for the sconds to be added
- ```seconds_added_per_bits```: For every ```min_amount_of_bits``` **x**  amount of seconds will be added. <br>
  Example1: 1000 bits -> 500 is the minimum -> 1000/500 = 2 -> 2\*30sec (no bits are "lost")<br>
  Example2: 1200 bits -> 500 is the minimum -> 1200/500 = 2 -> 2\*30sec (200 bits are "lost")<br>

### Streamlabs and StreamElements config

- ```WIP```:

### Streamloots config

- ```WIP```:

### Wheel mode config

There are two wheel types - 'weighted' and 'full random'

You can change the type, by deleting the ```//```  from the front, and putting it in front of the other one.<br>
**If both are commented out (without the ```//``` at front), the latter one will be used (please don't do this)**

1. **weighted** (this is only for weaklings btw)<br>
   Each item has a certain probability to appear in the wheel.
   This probability is different for each item (tho you can set the same for any number of items).<br>
   This means, that you can 'rig' the wheel, so that certain items appear less, than others.<br>
   With this option, the program spins the wheel to the "winner" item.<br>
   The area which an item occupies is random number between two values (it has no effect in this case).

2. **full random** ***(default)***
   Every item has the same probability to appear.<br>
   The area which an item occupies is random number between two values.<br>
   With this option, the program literally just spins the wheel at a certain speed, and it's all up to luck.<br>

### Wheel config

- ```wheelpick```: Determines which mode is active.The two valid values are ```full random``` and ```weighted```

- ```wheel_count_items```: An array which holds the number of slices that the wheel can have. Default: ```[5, 6, 7]```
- ```wheel_count_probability```: An array which holds the probability of the slices that the wheel can have. Default: ```[0.5, 0.3, 0.3]```
- ```wheel_min_area```: The minimum amount of wheel % that a slice can have
- ```wheel_max_area```: The maximum amount of wheel % that a slice can have
#### Wheel spinning properties (only applies if "full random")
- ```wheel_spin_speed```: How many rotations per sec the wheel will do (1 rotation is 360)
- ```wheel_spin_resistance```: How much will be substracted for each rotation form ``` wheel_spin_speed```

#### Wheel spinning properties (only applies if "full random")
- ```wheel_spin_time```: How long the wheel will spin for
- ```wheel_num_of_revs```: How many full rotations will the wheel do before stopping


### When to spin the wheel?
#### Prime sub = 0 | tier 1 sub = 1 | tier 2 sub = 2 | tier 3 sub = 3
- ```min_sub_tier```: The minimum tier of subscription needed for the wheel to spin
- ```min_bit_amount```: The minimum amount of bits needed for the wheel to spin
- ```min_tier1_gifted```: The minimum amount of tier 1 gifted subsctiption needed for the wheel to spin
- ```min_tier2_gifted```: The minimum amount of tier 2 gifted subsctiption needed for the wheel to spin
- ```min_tier3_gifted```: The minimum amount of tier 3 gifted subsctiption needed for the wheel to spin

### Wheel / Timer colors

- ```wheel_colors```: Colors for the slices. **The number of colors in this array has to mach max. amount of possible slice count!**
- ```wheel_random_center_img```: Pick a random image for the center of the wheel.
- ```wheel_center_img```: The ```./img/``` path of the img/gif asset.

### Wheel timings

- ```wheel_start_delay```: The delay between appearing and spinning in ms.
- ```wheel_result_delay```: The delay between coming to a full stop and dissapearing
- ```wheel_between_delay```: The delay between two spins.

### Wheel items
- ```wheelItem```: The items that can appear on the wheel with probability. **CASE SENSITIVE!**<br>  ```{
    '1': {
        'label': '-50%',
        'probability': 0.01,
    }, '2': {
        'label': '-50%',
        'probability': 0.01,
    }, }```<br>
  Probability = n% / 100 -> 40% / 100 = 0.4


## Acknowledgements

- **[Spin-wheel](https://github.com/CrazyTim/spin-wheel)**
- **[Twitch-subathon-countdown](https://github.com/JayexDesigns/twitch-subathon-countdown)**
- **[tmi.js](https://github.com/tmijs/tmi.js)**

## License

[![License](https://img.shields.io/badge/license-MIT-blue)](https://choosealicense.com/licenses/mit/ "View license")
This project is licensed under the [MIT License](LICENSE). See the `LICENSE` file for more details on terms and conditions.