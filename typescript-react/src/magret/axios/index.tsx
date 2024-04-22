const url = 'https://www.course-api.com/react-tours-project'


import axios from "axios"
import { z } from "zod"

export const tourSchema = z.object({
    id: z.string(),
    name: z.string(),
    image: z.string(),
    info: z.string(),
    price: z.string()
})

export type Tour = z.infer<typeof tourSchema>

const Component = () => {
    return (
        <div>
            <h1>Fetch using axios</h1>
        </div>
    )
}

export const fetchTours = async (): Promise<Tour[]> => {
    const response = await axios.get<Tour[]>(url)
    const result = tourSchema.array().safeParse(response.data)

    if(!result.success){
        console.log(result.error.message);
        throw new Error("Failed to parse Tours")
    }
    return result.data
}

export default Component
