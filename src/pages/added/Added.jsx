import React from 'react'
import './Added.css'

function Added({data, cart}) {
  return (
    <div className="container">
      <div className="trending_cards">
      {cart?.map((item)=> {
        return (
          <div className="card" key={item.id}>
              <div className="card_type">{item.type}</div>
              
                <img width={250} height={280} src={item.image} alt="" />
              
              <div className="card_prod">
                <h4>CHAIR</h4>
                <span></span>
              </div>
              <h3>{item.title.slice(0, 20)}...</h3>
              <div className="card_prices">
                <div><span>${item.price}</span><del>$120</del></div>
                <img src="/imgs/rating.png" alt="Rating" />
              </div>
            </div>
        )
      })}
    </div>
    </div>
  )
}

export default Added