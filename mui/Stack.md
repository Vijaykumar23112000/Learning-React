# Stack component

- used to manage content in 1-D => vertical or horizontal axis

```bash

    import {Stack} from '@mui/system';

    <Stack 
        sx={{
            border: "1px solid"
        }} 
        diriction="row"
    >

    </Stack>


```

## prop

1. **diriction** prop -> row , row-reverse , column-reverse
    - suppose there are two square Box's inside the parent Box and by default , they will be arranged vertically , ie one over the other
    - we can change it by diriction prop 

2. **spacing** prop -> value is multiplied by 8 px

3. divider prop -> **Divider** component
    ```bash

        import {Stack , Divider} from '@mui/system';

        <Stack
            sx={{
                border: "1px solid"
            }}
            diriction="row"
            spacing={2}
            divider={
                        <Divider 
                            orientation="vertical" 
                            flexItem 
                        />
                    }
        >
        
        </Stack>

    ```