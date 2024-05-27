# Button

- import Button from '@mui/material/Button';

##

- Button component has 3 variants we can use
1. Text Variant
2. Contained Variant
3. Outlined Variant

```bash
    <Button variant="text">Text Variant Button</Button>    
    <Button variant="contained">Contained Variant Button</Button>
    <Button variant="outlined">Outlined Variant Button</Button>
```

1. **text** -> used when we want to grab less attention for the ui
2. **contained** -> used for grab users attention and used for primary actions in the application. These buttons have filled colors
3. **outlined** -> lies between text and contained

## we can use stack along with Button

- import Stack from '@mui/material/Stack';

```bash
    <Stack spacing={2} direction="row">
        <Button variant="text" href="http://google.com">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
    </Stack>
```
- instead of wrapping the **Button** from mui with div components , we could use **Stack** to wrap the Button
- Buttons will be aligned in row with a gap of 2 and the first button acts as an anchor tag

## Button Colors

```bash
    <Stack spacing={2} direction="row">
        <Button variant="contained" color="primary">Text</Button>
        <Button variant="contained" color="secondary">Secondary</Button>
        <Button variant="contained" color="error">Error</Button>
        <Button variant="contained" color="warning">Warninf</Button>
        <Button variant="contained" color="info">Info</Button>
        <Button variant="contained" color="success">Success</Button>
    </Stack>
```

- The above buttons will display the Button with default color palette however we can customize with our own colors or palette

## Button size

- **size** prop is used for setting the size of the button

```bash
    <Stack display="block" spacing={2} direction="row">
        <Button variant="contained" size="small">Small</Button>
        <Button variant="contained" size="medium">Medium</Button>
        <Button variant="contained" size="large">Large</Button>
    </Stack>
```
- display should be set to block to change the size since the display will be flex by default

# Button Group

- **ButtonGroup** component is used to enhance UI when buttons are grouped together.
- we can wrap the Buttons inside ButtonGroup

```bash
    <Stack>
        <ButtonGroup>
            <Button variant="contained">Left</Button>
            <Button variant="contained">Centre</Button>
            <Button variant="contained">Right</Button>
        </ButtonGroup>
    </Stack>
```

- when we use ButtonGroup , the variant should be mentioned on the **ButtonGroup** level not on individual Buttons

```bash
    <Stack>
        <ButtonGroup variant="contained" aria-label="alignment button group">
            <Button>Left</Button>
            <Button>Centre</Button>
            <Button>Right</Button>
        </ButtonGroup>
    </Stack>
```

## Other Various props in ButtonGroup

- **orientation** prop -> by default it will be **horizontal** , we can change it to **vertical**
- **size** prop -> small , medium , large
- **color** prop -> primary , secondary , ....... 
- **onClick** prop -> this prop has to be specified on individual buttons tho...
- **aria-label** -> Its recomended to add aria-label="alignment button group" in ButtonGroup. This will help with accessibility