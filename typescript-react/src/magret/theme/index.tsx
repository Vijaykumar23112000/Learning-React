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

    console.log(context);
    

    return (
        <div>
            <h1>Theme Toggle</h1>
            <button onClick={()=>{
                if(context.theme === 'dark'){
                    context.setTheme('system')
                    return
                }
                context.setTheme('dark')
            }}>Toggle</button>
        </div>
    )
}

export default ParentComponent
