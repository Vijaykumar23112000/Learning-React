type Basic = {
    type: "Basic"
    name: string
}
type Advanced = {
    type: "Advanced"
    name: string
    email: string
}

type ProfileCardProps = Basic | Advanced

const Component = (props: ProfileCardProps) => {

    const { name, type } = props

    if (type === "Basic") {
        return (
            <article>
                <h2>User : {name}</h2>
            </article>
        )
    }
    const {email} = props
    return (
        <article>
            <h2>user : {name} and {email}</h2>
        </article>
    )
}

export default Component
