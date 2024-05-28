# Switch component

- toggle the state of a setting on or off

```bash

    import {Box ,FormControlLabel ,  Switch} from '@mui/material';
    import {useState} from 'react'

    const [checked , setChecked] = useState(false)

    console.log(checked)

    const handleChange = e => setChecked(e.target.checked)

    <Box>
        <FormControlLabel 
            label="Dark Mode" 
            control={
                        <Switch 
                            checked={checked}
                            onChange={handleChange}
                        />
                    } 
        />
    </Box>

```

## we can also have multiple switches 

```bash
    import {Box ,FormControlLabel , Switch , FormControl , FormLabel , FormGroup} from '@mui/material';
    import {useState} from 'react'

    const [skills , setSkills] = useState([])

    console.log(skills)

    const handleSkillsChange = e => {
        const index = skills.indexOf(event.target.value)
        if(index=== -1) setSkills([...skills , event.target.value])
        else setSkills(skills.filter(skill => skill !== event.target.value))
    }

    <Box>
        <FormControl>
            <FormLabel>Skills</FormLabel>
            <FormGroup>
                <FormControlLabel 
                    label="Html"
                    control={
                        <Switch 
                            value="html"
                            checked = {skills.include('html')}
                            onChange = {handleSkillsChange}
                        />
                    }
                />
                <FormControlLabel 
                    label="Css"
                    control={
                        <Switch 
                            value="css"
                            checked = {skills.include('css')}
                            onChange = {handleSkillsChange}
                        />
                    }
                />
                <FormControlLabel 
                    label="Javascript"
                    control={
                        <Switch 
                            value="javascript"
                            checked = {skills.include('javascript')}
                            onChange = {handleSkillsChange}
                        />
                    }
                />
            </FormGroup>
        </FormControl>
    </Box>

```

## props

- size 
- color