# Select Component

- Used for collecting information from list of options
- like **Stack** , we can also use **Box** instead of a div tag

```bash

    import Box from '@mui/material/Box';

    <Box width="250px">Mui Select</Box>

```

## Single Select Dropdown -> Selecting a single option

- To make use of **Select** component we have two approaches
1. reuse TextField
2. Use Select Component that Mui provides

```bash

    import {Box , TextField , MenuItem } from '@mui/material'
    import {useState} from 'react'

    const [country , setCountry] = useState("")

    console.log(country)

    const handleChange = e => setCountry(e.target.value)

    <Box width="250px">
        <TextField 
            label="Select Country" 
            select 
            value={country} 
            onChange={handleChange} 
            fullWidth
        >
            <MenuItem value="IN">India</MenuItem>
            <MenuItem value="US">USA</MenuItem>
            <MenuItem value="AU">Australia</MenuItem>
        </TextField?
    </Box>

```

##  Multiple Select Dropdown -> Selecting Multiple options

```bash

    import {Box , TextField , MenuItem } from '@mui/material'
    import {useState} from 'react'

    const [countries , setCountries] = useState([])

    console.log(countries)

    const handleChange = e => {
        const value = event.target.value
        setCountries(typeOf value === "string" ? value.split(',') : value)
    }
    
    <Box width="250px">
        <TextField 
            label="Select Country" 
            select 
            value={countries} 
            onChange={handleChange} 
            fullWidth
            SelectProps={{multiple: true}}
        >
            <MenuItem value="IN">India</MenuItem>
            <MenuItem value="US">USA</MenuItem>
            <MenuItem value="AU">Australia</MenuItem>
        </TextField?
    </Box>

```

- TextField props still work in select drop down as well
- practical usage will include fetching all the dropdown lists from an api and populating the list. There we could map the array and render the menuitems