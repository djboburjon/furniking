import React, { useState } from 'react'
import './Product.css'
import { useParams } from 'react-router-dom'

function Product({data}) {
  const {id} = useParams()

  const product = data.filter((item)=>{
    return item.id == id
  })

  const [mainImg, setMainImg] = useState(product[0].image)

  return (
    <div className="product">
      <div className="container">
      <div className="product_imgs">
        <div className="littleImgs">
          {product[0].imageTypes?.map((item)=>{
            return (
            <img onClick={()=>{
              setMainImg(item)
            }}
              src={item}
              alt=""
            />)
          })}
        </div>
        <div className="mainImg">
          <img
            src={mainImg}
            alt=""
          />
        </div>
      </div>
      <div className="product_info">
        <h1>{product[0].title}</h1>
        <h2>
          <del>345678 dollor</del>
        </h2>
        <h1>
          <b>{product[0].price} dollor</b>
        </h1>
        <h3>{product[0].desc}</h3>
        <h3>Choose type of armchair</h3>
        <div className="type">{product[0].type}</div>
        <div className="btns">
          <button>Add to card</button>
          <button>buy now</button>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Product