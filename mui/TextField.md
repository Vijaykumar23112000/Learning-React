# TextField component

- **TextField** allow users to enter text in the browser
- example -> login form , registration form ....

```bash
    import TextField from '@mui/material/TextField';

    <Stack spacing={4}>
        <Stack diriction="row" spacing={2}>
            <TextField label="Name" />
        </Stack>
    </Stack>
```

- we have three variants 
1. **outlined**
```bash
    <TextField label="Name" variant="outlined" />
```
2. **filled**
```bash
    <TextField label="Name" variant="filled" />
```
3. **standard**
```bash
    <TextField label="Name" variant="standard" />
```

## props used with textfield
- **size** -> small , medium , large
- **color** -> primary , secondary , .....

```bash
    <TextField label="Small and Secondary" size="small" color="secondary" variant="outlined" />
    <TextField label="Medium and Primary" size="medium" color="primary" variant="outlined" />
    <TextField label="Large and Success" size="large" color="success" variant="outlined" />
```

## form related props
- **required** prop -> adds an asterisk at the label

```bash
    <TextField label="Name" variant="outlined" required />
```

- **helperText** prop -> text we set up in helpertext will be displayed down below the textField

```bash
    <TextField label="Password" variant="outlined" helperText="Do Not Share Your Password With anyone" />
```

- **type** prop -> type attribute for input element -> password , .......

```bash
    <TextField label="Password" type="password" variant="outlined" />
```

- **disabled** prop -> this prop is used to disable the textfield

```bash
    <TextField label="Password" type="password" disabled variant="outlined" />
```

- **inputProps** prop 

```bash
    <TextField label="Read Only" InputProps={{readOnly:true}} variant="outlined" />
```

## InputAdorment

- add prefix and suffix to TextField and should be used with InputProps

```bash

    import InputAdornment from '@mui/material/InputAdornment';
    import TextField from '@mui/material/TextField';
    
    <Stack diriction="row">
        <TextField label="Amount" InputProps={{
            startAdornment: <InputAdornment position="start" >$</InputAdornment>
        }}/>
        <TextField label="Weight" InputProps={{
            endAdornment: <InputAdornment position="end" >Kg</InputAdornment>
        }}/>
    </Stack>

```

- inorder to use prefixes and suffixes in **TextField** , we use **InputAdornment**
- instead of hard written '$' or Kg , we can also use Icons
- Great use case is eyehidden or eyevisible icon in Password field

## Header Prop

```bash

    import {useState} from 'react'

    const [value , setValue] = useState("")

    <Stack diriction="row">
        <TextField 
            label="Password" 
            required 
            error={!value} 
            helperText={!value ? "Required" : ""Do Not Share ur password }
            value={value} 
            onChange={e=>setValue(e.target.value)} 
        />
    </Stack>

```

- To make use of validation and stuff , go through react-form