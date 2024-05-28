# Accordian component

- Accordian allows the user to show and hide related content on the page
- we need 3 components for the accordian
- **ExpandMoreIcon** icon is commonly used with Accordian

```bash

    import {Accordian , AccordianSummary , AccordianDetails , Typography , Stack} from '@mui/material'
    import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

    <Box>
        <Accordian>
            <AccordianSummary 
                id="panel1-header" 
                aria-controls="panel1-content" 
                expandIcon={<ExpandMoreIcon />}
            >
                <Typography>Accordian 1</Typography>
            </AccordianSummary>
            <AccordianDetails>
                <Typography>this is a very long paragrpah that describes the summary about the accordian</Typography>
            </AccordianDetails>
        </Accordian>
    </Box>

```

## Accordian Group

- we can also create an Accordian Group

```bash

    import {Accordian , AccordianSummary , AccordianDetails , Typography , Stack} from '@mui/material'
    import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

    <Box>
        <Accordian>
            <AccordianSummary 
                id="panel1-header" 
                aria-controls="panel1-content" 
                expandIcon={<ExpandMoreIcon />}
            >
                <Typography>Accordian 1</Typography>
            </AccordianSummary>
            <AccordianDetails>
                <Typography>this is a very long paragrpah that describes the summary about the accordian</Typography>
            </AccordianDetails>
        </Accordian>
        <Accordian>
            <AccordianSummary 
                id="panel2-header" 
                aria-controls="panel2-content" 
                expandIcon={<ExpandMoreIcon />}
            >
                <Typography>Accordian 2</Typography>
            </AccordianSummary>
            <AccordianDetails>
                <Typography>this is a very long paragrpah that describes the summary about the accordian</Typography>
            </AccordianDetails>
        </Accordian>
        <Accordian>
            <AccordianSummary 
                id="panel3-header" 
                aria-controls="panel3-content" 
                expandIcon={<ExpandMoreIcon />}
            >
                <Typography>Accordian 3</Typography>
            </AccordianSummary>
            <AccordianDetails>
                <Typography>this is a very long paragrpah that describes the summary about the accordian</Typography>
            </AccordianDetails>
        </Accordian>
    </Box>

```

#

- however we want only one accordian to be open at once .... 
- we can do this by maintaining a state variable

```bash

    import {Accordian , AccordianSummary , AccordianDetails , Typography , Stack} from '@mui/material'
    import  ExpandMoreIcon from '@mui/icons-material/ExpandMore'
    import {useState} from 'react'

    const [expanded , setExpanded] = useState(false)

    const handleChange = (isExpanded , panel) => setExpanded(isExpanded ? panel : false)

    <Box>
        <Accordian expanded={expanded === "panel1"} onChange{(event , isExpanded)=>handleChange(isExpanded , "panel1")}>
            <AccordianSummary 
                id="panel1-header" 
                aria-controls="panel1-content" 
                expandIcon={<ExpandMoreIcon />}
            >
                <Typography>Accordian 1</Typography>
            </AccordianSummary>
            <AccordianDetails>
                <Typography>this is a very long paragrpah that describes the summary about the accordian</Typography>
            </AccordianDetails>
        </Accordian expanded={expanded === "panel2"} onChange{(event , isExpanded)=>handleChange(isExpanded , "panel2")}>
        <Accordian>
            <AccordianSummary 
                id="panel2-header" 
                aria-controls="panel2-content" 
                expandIcon={<ExpandMoreIcon />}
            >
                <Typography>Accordian 2</Typography>
            </AccordianSummary>
            <AccordianDetails>
                <Typography>this is a very long paragrpah that describes the summary about the accordian</Typography>
            </AccordianDetails>
        </Accordian>
        <Accordian expanded={expanded === "panel1"} onChange{(event , isExpanded)=>handleChange(isExpanded , "panel3")}>
            <AccordianSummary 
                id="panel3-header" 
                aria-controls="panel3-content" 
                expandIcon={<ExpandMoreIcon />}
            >
                <Typography>Accordian 3</Typography>
            </AccordianSummary>
            <AccordianDetails>
                <Typography>this is a very long paragrpah that describes the summary about the accordian</Typography>
            </AccordianDetails>
        </Accordian>
    </Box>

```