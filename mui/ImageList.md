# ImageList component

- **ImageList** component is used to display a collection of images in an organised manner
- for this to work , we need a list of images as source to render 

```bash

    import {Stack , ImageList , ImageListItem} from '@mui/material';

    const itemData = [
        {
            img:"",
            title:""
        },
        {
            img:"",
            title:""
        }
    ]

    <Stack>
        <ImageList 
            sx={{
                    width:500
                    height:450
                }}
            cols={3}
            rowHeight={164}
        >
        {
            itemData.map(item => (
                <ImageListItem key={item.img}>
                    <img src=`${item.img} ? w=164 & h=164 & fit=crop & auto=format & dpr=2` alt={item.title} loading="lazy" />
                </ImageListItem>
            ))
        }
        </ImageList>
    </Stack>

```

## Variant prop

- we need a large list of image data for this tho....

1. **woven** layout

    ```bash

        import {Stack , ImageList , ImageListItem} from '@mui/material';

        const itemData = [
            {
                img:"",
                title:""
            },
            {
                img:"",
                title:""
            },
            .
            .
            .
            .
            .
            .

        ]

        <Stack>
            <ImageList 
                variant="woven"
                sx={{
                        width:500
                        height:450
                    }}
                cols={3}
                gap={8}
            >
            {
                itemData.map(item => (
                    <ImageListItem key={item.img}>
                        <img src=`${item.img} ? w=164 & h=164 & fit=crop & auto=format & dpr=2` alt={item.title} loading="lazy" />
                    </ImageListItem>
                ))
            }
            </ImageList>
        </Stack>
    ```

2. **masanry** layout

- this layout needs a few more layout.
- create a wrapper

     ```bash

        import { Box , ImageList , ImageListItem} from '@mui/material';

        const itemData = [
            {
                img:"",
                title:""
            },
            {
                img:"",
                title:""
            },
            .
            .
            .
            .
            .
            .

        ]

        <Box 
            sx={{
                    width:500,
                    height:450,
                    overflowY:""scroll
                }}
        >
            <ImageList 
                variant="masanry"
                cols={3}
                gap={8}
            >
            {
                itemData.map(item => (
                    <ImageListItem key={item.img}>
                        <img src=`${item.img} ? w=248 & fit=crop & auto=format & dpr=2` alt={item.title} loading="lazy" />
                    </ImageListItem>
                ))
            }
            </ImageList>
        </Box>
    ```

## ImageListItemBar component

- lets u add an overlay to each image

    ```bash

    import {ImageListItemBar , Stack , ImageList , ImageListItem} from '@mui/material';

    const itemData = [
        {
            img:"",
            title:""
        },
        {
            img:"",
            title:""
        }
    ]

    <Stack>
        <ImageList 
            sx={{
                    width:500
                    height:450
                }}
            cols={3}
            rowHeight={164}
        >
        {
            itemData.map(item => (
                <ImageListItem key={item.img}>
                    <img src=`${item.img} ? w=164 & h=164 & fit=crop & auto=format & dpr=2` alt={item.title} loading="lazy" />
                    <ImageListItemBar title={item.title} />
                </ImageListItem>
            ))
        }
        </ImageList>
    </Stack>

    ```

### props for ImageListItemBar

- posistion
- subtitle
- ActionIcon -> clickable event