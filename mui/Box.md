# Box component

- Box is a layout related component
- serves as a wrap component
- Box component unlike native div tags are more useful 
- Box component takes in a speical prop named **sx** -> custom style that has access to the theme

```bash
    import {Box} from '@mui/material';

    <Box>Box Component</Box>
```

## props

1. **component** prop -> we can specify the component like div , span , section  ....

    ```bash
    <Box component="span">Box Component</Box>
    ```

2. **sx** prop -> it accepts an object

    ```bash
    <Box sx={{
        backgroundColor: "primary.main",
        color: "white",
        height: "100px",
        width: "100px",
        padding: "16px",
        "&:hover": {
            backgroundColor: "primary.light"
        },
    }}>Box Component</Box>
    ```

3. it also supports material ui system properties 

    ```bash
    <Box 
        display="flex" 
        height="100px" 
        width="100px"
        bgcolor="success.light"
        p={2}
    >Box Component
    </Box>
    ```

    - There are other more system properties => visit the official [mui docs](https://mui.com/system/properties/)