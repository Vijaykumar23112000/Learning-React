# Grid component

- useful for 2-D and responsive layouts
- it has two variations -> GridContainer for parent and GridItem for children

```bash

    import {Grid , Box} from '@mui/material'

    <Grid container>
        <Grid item>
            <Box bgcolor="primary.main" p={2}>Item 1</Box>
        </Grid>
        <Grid item>
            <Box bgcolor="secondary.main" p={2}>Item 2</Box>
        </Grid>
        <Grid item>
            <Box bgcolor="success.main" p={2}>Item 3</Box>
        </Grid>
        <Grid item>
            <Box bgcolor="error.main" p={2}>Item 4</Box>
        </Grid>
    </Grid>

```

- Grid component under the hood uses the flexbox module
- Grid consists of 12 columns
- Each item in the grid can take up one or more columns as its width
- there are five breakpoints 
    - xs -> mobile
    - sm -> tablet
    - md -> desktop
    - lg and xl -> larger devices
- we can assign integer values to each breakpoint which indicates how many of the 12 available columns are occupied by that item when the view port satisfies the breakpoint

```bash

    import {Grid , Box} from '@mui/material'

    <Grid container spacing={2}>
        <Grid item xs={6}>
            <Box bgcolor="primary.main" p={2}>Item 1</Box>
        </Grid>
        <Grid item xs={6}>
            <Box bgcolor="secondary.main" p={2}>Item 2</Box>
        </Grid>
        <Grid item xs={6}>
            <Box bgcolor="success.main" p={2}>Item 3</Box>
        </Grid>
        <Grid item xs={6}>
            <Box bgcolor="error.main" p={2}>Item 4</Box>
        </Grid>
    </Grid>

```

- we have implicit **rowSpacing** and **columnSpacing** prop which can be used in Grid container