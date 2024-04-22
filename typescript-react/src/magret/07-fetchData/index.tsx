import { useEffect, useState } from "react"
import { tourSchema , Tour } from "./types"

const url = 'https://www.course-api.com/react-tours-project'

const Component = () => {

    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState<string | null>(null)
    const [tours , setTours] = useState<Tour[]>([])

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true)
            try {
                const response = await fetch(url)
                if (!response) {
                    throw new Error("Failed fetching data")
                }
                const rawData:Tour[] = await response.json()
                const result = tourSchema.array().safeParse(rawData)
                if(!result.success){
                    console.log(result.error.message);
                    throw new Error(`Failed to parse`)
                }
                setTours(result.data)
            } catch (error) {
                const message = error instanceof Error ? error.message : "Ooopss"
                setIsError(message)
            } finally {
                setIsLoading(false)
            }
        }
        fetchData()
    }, [])


    if(isLoading){
        return <h3>Loading on progress</h3>
    }
    if(isError){
        return <h3>Error Fucked up the code... {isError}</h3>
    }


    return (
        <div>
            <h1>Fetch Data</h1>
            {
                tours.map((t,i)=>{
                    return <h2 key={i}>{t.name}</h2>
                })
            }
            
        </div>
    )
}

export default Component
