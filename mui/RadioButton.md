# Radio Button

- allows users to select one option from a set

```bash

    import {Box , FormControl , FormLabel , FormControlLabel , RadioGroup , Radio} from '@mui/material'
    import {useState} from 'react'

    const [value , setValue] = useState("")

    console.log(value)

    const handleChange = e => setValue(e.target.value)

    <Box>
        <FormControl>
            <FormLabel id="job-exp-group-label">Years Of Experience</FormLabel>
            <RadioGroup 
                name="job-exp-group" 
                aria-label="job-exp-group-label" 
                value={value} 
                onChange={handleChange} 
            >
                <FormControlLabel control={<Radio />} label="0-2" value="0-2" />    
                <FormControlLabel control={<Radio />} label="3-5" value="3-5" />    
                <FormControlLabel control={<Radio />} label="6-10" value="6-10" />    
            </RadioGroup>
        </FormControl>
    </Box>

```

## props that can be applied

1. On **RadioGroup** component

- **row** prop -> aligns radiobuttons in a row 

2. On **Radio** component

- **size** -> small , medium , large
- **color** -> primary , secondary , success ....

3. on **FormControl** component

- **error** -> set error state 

##

we can also use **FormHelperText** to display messages down below the field

```bash

    import {Box , FormControl , FormLabel , FormControlLabel , RadioGroup , Radio , FormHelperText} from '@mui/material'
    import {useState} from 'react'

    const [value , setValue] = useState("")

    console.log(value)

    const handleChange = e => setValue(e.target.value)

    <Box>
        <FormControl>
            <FormLabel id="job-exp-group-label">Years Of Experience</FormLabel>
            <RadioGroup 
                name="job-exp-group" 
                aria-label="job-exp-group-label" 
                value={value} 
                onChange={handleChange} 
            >
                <FormControlLabel control={<Radio />} label="0-2" value="0-2" />    
                <FormControlLabel control={<Radio />} label="3-5" value="3-5" />    
                <FormControlLabel control={<Radio />} label="6-10" value="6-10" />    
            </RadioGroup>
            <FormHelperText>Invalid Selection</FormHelperText>
        </FormControl>
    </Box>

```