# CheckBox component

- allows users to select one or more options from a set
- also can be used to turn an option on or off

```bash
    import {Box ,FormControlLabel , Checkbox} from '@mui/material';
    import {useState} from 'react'

    const [acceptTnC , setAcceptTnC] = useState(false)

    console.log(acceptTnC)

    const handleChange = e => setAcceptTnC(e.target.checked)

    <Box>
        <FormControlLabel 
            label="I accept terms and conditions" 
            control={   
                        <CheckBox 
                            checked={acceptTnC} 
                            onChange={handleChange} 
                        />
                    } 
        />
    </Box>

```

- we can also use icons as checkbox

```bash
    import {Box ,FormControlLabel , Checkbox} from '@mui/material';
    import BookMarkBorderIcon from '@mui/icons-material/BookMarkBorder'
    import BookMarkIcon from '@mui/icons-material/BookMark'
    import {useState} from 'react'

    const [acceptTnC , setAcceptTnC] = useState(false)

    console.log(acceptTnC)

    const handleChange = e => setAcceptTnC(e.target.checked)

    <Box>
        <FormControlLabel 
            label="Add the book to be bookmarked"
            control={
                        <CheckBox 
                            icon={<BookMarkBorderIcon />} 
                            checkedIcon={<BookMarkIcon />} 
                            checked = {acceptTnC}
                            onChange = {handleChange}
                        />
                    }
        />
    </Box>

```

## work with check box group

- to use checkboxgroup , we need three more components

- FormControlLabel , CheckBox , FormControl , FormLabel , FormGroup

```bash
    import {Box ,FormControlLabel , Checkbox , FormControl , FormLabel , FormGroup} from '@mui/material';
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
                        <CheckBox 
                            value="html"
                            checked = {skills.include('html')}
                            onChange = {handleSkillsChange}
                        />
                    }
                />
                <FormControlLabel 
                    label="Css"
                    control={
                        <CheckBox 
                            value="css"
                            checked = {skills.include('css')}
                            onChange = {handleSkillsChange}
                        />
                    }
                />
                <FormControlLabel 
                    label="Javascript"
                    control={
                        <CheckBox 
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

## Props 

1. On **FormGroupComponent**

    - **row** prop

2. On **CheckBoc**

    - **size** prop
    - **color** prop

3. On **FormControl**

    - **error** state prop

4. **FormHelperText** component

    - we can also use FormHelperText component below FormGroup