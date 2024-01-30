import React, { useState } from 'react'
import './Home.css'
import { BsFilterLeft } from "react-icons/bs";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { IoBagAddOutline } from "react-icons/io5";

function Home({data, setData, cart, setCart}) {

  const [heroImg, setHeroImg] = useState("./imgs/hero-img.png")
  const newData=[];
  const filterCard = (types)=>{
    const dataChange = data.filter((item)=>{
      return item.type == types
    })
    setData(dataChange)
  }
  return (
    <div>
      <div className="head_top">
        <div className="container">
          <div className="category_filter">
          <BsFilterLeft className='filter_icon' />
          ALL COLLECTIONS
          </div>
          <ul className='links'>
            <li className='link'><a href="#">HOME</a></li>
            <li className='link'><a href="#">SHOP</a></li>
            <li className='link'><a href="#">BLOG</a></li>
            <li className='link'><a href="#">ABOUT</a></li>
            <li className='link'><a href="#">CONTACT US</a></li>
          </ul>
        </div>
      </div>
      <div className="head_main">
        <div className="container">
          <div className="head_main-left">
            <p>All</p>
            <p>New Arrivals</p>
            <p>Hot Sale</p>
            <p>Furniture</p>
            <p>Amrature</p>
            <p>Tabble</p>
            <p>Chair</p>
            <p>Sofa</p>
            <p>Mirrors</p>
            <p>Stools</p>
            <p>Benches</p>
          </div>
          <div className="head_main-right">
            <div className="main_slider">
              <img src="./imgs/slider.png" alt="" />
            </div>
            <div className="main_info">
              <h3>TOP COLLECTIONS 2024</h3>
              <h1>We Serve Your Dream <span>Furniture</span></h1>
              <h2>Get 50% off all products</h2>
              <button>SHOP NOW</button>
            </div>
            <div className="main_hero">
              <img width={374} height={374} src={heroImg} alt="" />
            </div>
            <div className="main-images">
              <div className="main-img" onClick={()=>{
                  setHeroImg("./imgs/hero-img1.png")
                }}>
                <img width={53} src="./imgs/hero-img1.png" alt="" />
                <div className="main-img-price">
                  <span>$</span>120
                </div>
                <p>Office Desk Chair</p>
              </div>
              <div className="main-img" onClick={()=>{
                  setHeroImg("./imgs/hero-img2.png")
                }}>
                <img width={53} src="./imgs/hero-img2.png" alt="" />
                <div className="main-img-price">
                  <span>$</span>180
                </div>
                <p>	Home Alisa Sofa</p>
              </div>
              <div className="main-img" onClick={()=>{
                  setHeroImg("./imgs/hero-img3.png")
                }}>
                <img width={53} src="./imgs/hero-img3.png" alt="" />
                <div className="main-img-price">
                  <span>$</span>250
                </div>
                <p>Modern Chair</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="services">
        <div className="container">
          <div className="box">
            <img src="./imgs/shipping.png" alt="" />
            <div className="">
              <h2>Free Shipping</h2>
              <p>Orders over $100</p>
            </div>
          </div>
          <div className="box">
            <img src="./imgs/gift.png" alt="" />
            <div className="">
              <h2>Free Shipping</h2>
              <p>Orders over $100</p>
            </div>
          </div>
          <div className="box">
            <img src="./imgs/wallet.png" alt="" />
            <div className="">
              <h2>Free Shipping</h2>
              <p>Orders over $100</p>
            </div>
          </div>
          <div className="box">
            <img src="./imgs/support.png" alt="" />
            <div className="">
              <h2>Free Shipping</h2>
              <p>Orders over $100</p>
            </div>
          </div>
        </div>
      </div>

      <div className="collections">
        <div className="container">
          <div className="collection_left">
              <h2>Modern Furniture Collections</h2>
              <h3>Starting from $500</h3>
              <a href="#">Read more <FaArrowRightLong /></a>
          </div>
          <div className="collection_right">
            <div className="bookcase">
              <h2>Geometric Bookcase</h2>
              <h3>Up to 20% discount</h3>
              <a href="#">Read more <FaArrowRightLong /></a>
            </div>
            <div className="mini_sofa">
              <h2>Minimal Sofa collections</h2>
              <h3>Sale Up to 40% discount</h3>
              <a href="#">Read more <FaArrowRightLong /></a>
            </div>
          </div>
        </div>
      </div>

      <div className="trending">
        <div className="container">
          <div className="trending_title">TRENDING</div>
          <div className="trending_filter">
            <a onClick={()=> {
              filterCard("Top")
            }}>Top Products</a>
            <a  onClick={()=> {
              filterCard("New")
            }}>New Arrivals</a>
            <a  onClick={()=> {
              filterCard("Sale")
            }}>Best Discount</a>
          </div>

          <div className="trending_cards">
            {data?.map((item)=> {
              return (
                <div className="card" key={item.id}>
                    <div className="card_type">{item.type}</div>
                    <Link to={`/product/${item.id}`}>
                      <img width={250} height={280} src={item.image} alt="" />
                    </Link>
                    <div className="card_prod">
                      <h4>CHAIR</h4>
                      <span><IoBagAddOutline onClick={()=>{
                        const newData = data.filter((product)=>{
                          return product.id == item.id
                        })
                        setCart([...cart, newData[0]])
                      }} /></span>
                    </div>
                    <h3>{item.title.slice(0, 20)}...</h3>
                    <div className="card_prices">
                      <div><span>${item.price}</span><del>$120</del></div>
                      <img src="./imgs/rating.png" alt="" />
                    </div>
                  </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home