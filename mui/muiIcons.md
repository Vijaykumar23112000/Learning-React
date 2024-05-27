# MUI Icons

1. Firstly install the Icons library from MUI

```bash
    npm install @mui/icons-material
```

2. import the icon from the MUI icons and its ready to use

```bash
    import SendIcon from '@mui/icons-material/Send';

    <stack spacing={2} dirictions="row">
        <Button variant="contained" startIcon={<SendIcon />} >Send</Button>
        <Button variant="contained" endIcon={<SendIcon />} >Send</Button>
    </stack>
```

- **startIcon** -> icon will be at start and then then it will display the text
- **endIcon** -> icon will be at end after the text

## Display Icon as a  Button

- if we want to display just an icon without any text as a button , we could use **IconButton**

```bash
    import { IconButton } from '@mui/material';

    <Stack>
        <IconButton>
            <SendIcon aria-label="send" color="success" size="small" />
        </IconButton>
    </Stack>

```

- **aria-label="send"** should be given for accessibility reasons

## props on contained Buttons

- contained Buttons are by default elevated shadow and has riplleEffect when clicked .. we can enable or disable them

```bash
    <Stack>
        <Button variant="contained" disableElevation >Send</Button>
        <Button variant="contained" disableRipple >Send</Button>
    </Stack>
```

## Onclick event

- we can use onClick event as well

```bash
    <Stack>
        <Button variant="contained" onClick={()=>alert("Clicked") } >Send</Button>
    </Stack>
```