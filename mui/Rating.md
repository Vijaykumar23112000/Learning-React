# Rating component

- ratings provides insigts about others opinions

```bash

    import {Stack , Rating} from '@mui/material'
    import {useState} from 'react'

    const [value , setValue] = useState(null)

    console.log(value)

    const handleChange = (e , newValue) => setValue(newValue)

    <Stack spacing={2}>
        <Rating 
            value={value} 
            onChange={handleChange} 
        />
    </Stack>

```

## props that can be used

1. **precision** prop
    ```bash
        <Rating 
            value={value} 
            onChange={handleChange} 
            precision={0.5}
        />
    ```
2. **size** prop

## icon and empty icon

```bash

    import {Stack , Rating} from '@mui/material'
    import {useState} from 'react'
    import FavoriteIcon from '@mui/icons-material/Favorite'
    import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'

    const [value , setValue] = useState(null)

    console.log(value)

    const handleChange = (e , newValue) => setValue(newValue)

    <Stack spacing={2}>
        <Rating 
            value={value} 
            onChange={handleChange} 
            size="large"
            icon={<FavoriteIcon fontSize="inherit" color="error" />}
            emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
        />
    </Stack>

```

3. **readOnly** prop

    - when prop is set to readOnly , we can define an initial value while defining the state

4. **highlightSelectedOnly** prop
    
    - highlights only one icons instead of all the icons up to that value
    - usecase would be for collecting feedbacks