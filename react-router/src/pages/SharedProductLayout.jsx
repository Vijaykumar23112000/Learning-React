import { Outlet } from 'react-router-dom'

const SharedProductLayout = () => {
    return (
        <>
            <h1>Products</h1>
            <Outlet />
        </>

    )
}

export default SharedProductLayout
