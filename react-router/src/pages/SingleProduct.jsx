import React from 'react'
import { Link, useParams } from 'react-router-dom'
import products from '../components/Data'

const SingleProduct = () => {

    const {productId} = useParams()
    const product = products.find(product=>product.id===productId)
    const {image , name} = product

    
    return (
        <section className='section'>
            <h2>SingleProducts</h2>
            <img src={image} alt="hello" />
            <h3>{name}</h3>
            <Link to="/products">Back to Products</Link>
        </section>
    )
}

export default SingleProduct