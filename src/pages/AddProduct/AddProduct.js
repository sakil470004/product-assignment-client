import React, { useState } from 'react'
import { useNavigate } from 'react-router';



function AddProduct() {

  const [productData, setEventData] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  const navigation = useNavigate();
  const handleOnBlur = e => {
    const field = e.target.name;
    const value = e.target.value;
    const newData = { ...productData };
    newData[field] = value;
    setEventData(newData)
  }


  const handleLoginSubmit = (e) => {
    setIsLoading(true)
    const newData = { ...productData }
    fetch('https://product-assignment.herokuapp.com/addProduct', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newData)

    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          alert('Product Added')
          navigation('/')
        } else {
          alert(data.message)
        }
        setIsLoading(false)
      })
    e.preventDefault();
  }
  return (
    <div className='container'>
      <div style={{ marginTop: '150px' }}>
        <div >

          <h1>Add Product</h1>
          
                    {isLoading ?

                        <div style={{ height: '40vh' }}>
                        Loading...
                        </div>
                        :

          <form onSubmit={handleLoginSubmit}>
            <input
              className='inputBox'
              required
              type='text'
              placeholder="Product Name"
              name='name'
              onBlur={handleOnBlur}
            />
            <input
              className='inputBox'
              required
              type='number'
              placeholder="Product Price"
              name='price'
              onBlur={handleOnBlur}
            />

            <input
              className='inputBox'
              required
              type='number'
              placeholder="No of Item"
              name='noOfItem'
              onBlur={handleOnBlur}
            />


            <input
              className='inputBox'
              required
              type='number'
              placeholder="Stock Keeping Unit"
              name='stockKeepingUnit'
              onBlur={handleOnBlur}
            />
            <input
              className='inputBox'
              required
              type='number'
              placeholder="PinCode"
              name='pinCode'
              onBlur={handleOnBlur}
            />
            <input
              className='inputBox'
              required
              placeholder="Dealer Name"
              name='dealerName'
              onBlur={handleOnBlur}
            />
            <input
              className='inputBox'
              required
              placeholder="Image Link"
              name='img'
              onBlur={handleOnBlur}
            />
            <input
              className='inputBox'
              placeholder="Video Link (optional)"
              name='video'
              onBlur={handleOnBlur}
            />


            <br />
            <button className='btn btn-primary'
              type='submit'
            >Add Product</button>

          </form>
          }

        </div>
      </div>
    </div>

  )
}

export default AddProduct