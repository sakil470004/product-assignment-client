import React, { useEffect, useState } from 'react'
import './Home.css'
function Home() {

    const [products, setProducts] = useState([])
    
    useEffect(() => {
        fetch('https://product-assignment.herokuapp.com/product')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center',margin:'1rem 0' }}>
            <div className="container portfolio__container">

                {products.map(dt => {

                    return (
                        <article className="portfolio__item" key={dt._id}>
                            <div className="portfolio__item-image">
                                <img src={dt.img} alt="" />
                            </div>
                            <h3>{dt.name}</h3>
                            <div className='home__overlay'>
                                <h2>{dt.name}</h2>
                                <h2 style={{color:'greenyellow'}}>{dt.price}$</h2>
                                <h4 style={{color:'red'}}>{dt.stockKeepingUnit} Left in Stock</h4>
                            </div>
                        </article>)
                })}
            </div>

        </div>
    )
}

export default Home