# Paper component

- Paper component is a surface related component in mui
- paper component has white background color by default

```bash

    import {Paper} from '@mui/material';

    <Paper 
        sx={{
            padding: "32px"
        }}
    >
        <Stack
            sx={{
                border: "1px solid"
            }}
            diriction="row"
            spacing={2}
        >
            <Box>
            </Box>
        </Stack>
    </Paper>

```

- the rendered paper component will have a white background with some elevation at the bottom
- we can control the elevation and shadow

## we can control the shadow by **elevation** prop

- elevation is 1 by default

```bash

    import {Paper} from '@mui/material';

    <Paper 
        sx={{
            padding: "32px"
        }}
        elevation={4}
    >
        <Stack
            sx={{
                border: "1px solid"
            }}
            diriction="row"
            spacing={2}
        >
            <Box>
            </Box>
        </Stack>
    </Paper>

```
- mostly paper component is used for building card component