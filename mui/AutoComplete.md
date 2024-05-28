# AutoComplete component

- Basic usage of AutoComplete and its props are below
- for AutoComplete , we also need TextField
- **AutoComplete** has to mandatory props -> options , renderInput
- **freeSolo** prop will also make sure that we can handle state by the value we type and by the value we select 

```bash

    import {Stack , TextField , AutoComplete} from '@mui/material'
    import {useState} from 'react'

    const skills = ['HTML' , 'CSS' , 'JavaScript' , 'TypeScript' , 'React']

    console.log(value)

    const [value , setValue] = useState(null)

    <Stack spacing={2} width="250px">
        <AutoComplete 
            options={skills} 
            renderInput={(params)=><TextField {...params} label="skills" />} 
            value={value}
            onChange={(e , newValue)=>setValue(newValue)}
            freeSolo
        />
    </Stack>

```
#
- options prop takes either an array of strigs or an array of objects which has a key named label

```bash

    import {Stack , TextField , AutoComplete} from '@mui/material'
    import {useState} from 'react'

    const skills = ['HTML' , 'CSS' , 'JavaScript' , 'TypeScript' , 'React']

    const skillsOptions = skills.map((skill , index)=>({
        id: index+1,
        label: skill
    }))

    console.log(skill)

    const [skill , setSkill] = useState(null)

    <Stack spacing={2} width="250px">
        <AutoComplete 
            options={skillsOptions} 
            renderInput={(params)=><TextField {...params} label="skills" />} 
            value={skill}
            onChange={(e , newValue)=>setSkill(newValue)}
        />
    </Stack>

```

- The above impl is a more practical way of implementing **AutoComplete** component