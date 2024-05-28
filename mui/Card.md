# Card component

- card component contain content and actions about a single topic

```bash

    import {Card , Box , CardContent , Typography } from '@mui/material';

    <Box width="300px">
        <Card>
            <CardContent>
                <Typography 
                    gutterBottom 
                    varaint="h5"
                    component="div"
                >
                React
                </Typography>
                <Typography 
                    gutterBottom 
                    varaint="body2"
                    color="text.secondary"
                >
                React is amazing ... Lets learn react ASAP
                </Typography>
            </CardContent>
        </Card>
    </Box>

```

# 

- card component can also have actions at the bottom
- actions are typically buttons


```bash

    import {Card , Box , CardContent , Typography CardActions , Button} from '@mui/material';

    <Box width="300px">
        <Card>
            <CardContent>
                <Typography 
                    gutterBottom 
                    varaint="h5"
                    component="div"
                >
                React
                </Typography>
                <Typography 
                    gutterBottom 
                    varaint="body2"
                    color="text.secondary"
                >
                React is amazing ... Lets learn react ASAP
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    </Box>

```

## Adding Images to the card

- to add images in card , we can use **CardMedia**

```bash

    import {Card , Box , CardContent , Typography CardActions , Button} from '@mui/material';

    <Box width="300px">
        <Card>
            <CardMedia 
                component="img"
                height="140px"
                image="https://source.unsplash.com/random"
                alt="unsplash image"
            />
            <CardContent>
                <Typography 
                    gutterBottom 
                    varaint="h5"
                    component="div"
                >
                React
                </Typography>
                <Typography 
                    gutterBottom 
                    varaint="body2"
                    color="text.secondary"
                >
                React is amazing ... Lets learn react ASAP
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    </Box>

```