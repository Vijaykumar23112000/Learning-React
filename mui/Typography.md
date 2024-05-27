# Typography
    
- import Typography from '@mui/material/Typography';

##

1. Heading variants 

```bash
    <Typography variant = ""></Typography>  
```

2. variant ranges from h1,h2,h3,h4,h5,h6

```bash
    <Typography variant = "h1">This is h1 component</Typography>
    <Typography variant = "h2">This is h2 component</Typography>
    <Typography variant = "h3">This is h3 component</Typography>
    <Typography variant = "h4">This is h4 component</Typography>
    <Typography variant = "h5">This is h5 component</Typography>
    <Typography variant = "h6">This is h6 component</Typography>
```

3. There are two more variants for h6 tag
- subtitle1 -> large font size and less font weight 
- subtitle2 -> small font size and more font weight

```bash
    <Typography variant = "subtitle1">This is Subtitle 1 component</Typography>
    <Typography variant = "subtitle2">This is Subtitle 2 component</Typography>
```

4. Body variant -> paragraph html elements 
- body1 -> default version (16px) 
- body2 -> smaller version of body1

```bash
    <Typography variant = "body1">This is a very long paragraph </Typography>
    <Typography variant = "body2">This is a very long paragraph</Typography>
```

5. Gutter bottom -> default false
- provdes a margin bottom for the element

```bash 
    <Typography variant = "h3" gutterBottom >This is a h3 element</Typography>
```