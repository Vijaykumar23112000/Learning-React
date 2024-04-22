import { useTheme , ThemeProvider } from "./context"


function ParentComponent(){
    return (
        <ThemeProvider >
            <Component />
        </ThemeProvider>
    )
}


const Component = () => {

    const context = useTheme()

    return (
        <div>
            <h1>Theme Mode</h1>
            <h3>{context}</h3>
        </div>
    )
}

export default ParentComponent
