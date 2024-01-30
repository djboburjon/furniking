import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import Product from './pages/product/Product'
import { useState } from 'react'
import Navbar from './pages/navbar/Navbar'
import Login from './pages/login/Login'
import Added from './pages/added/Added'

function App() {

  const [data, setData] = useState([
    {
      id: 1,
      title: "Fleece chair cover",
      price: 150.6,
      type: "New",
      desc: "✔Made of stretchy thick fleece fabric, fine workmanship with dense and smooth short pile, which is breathable, will not wrinkle, pill or fade after washing, delicate texture for a very soft and strong touch without irritating the skin. Using our universal bath sofa cover can make your sofa look brand new, which can also easily create elegant household items for your home, much better than reupholstering.",
      image: "https://ae04.alicdn.com/kf/S7b0a787181b543d98b930119b52cfefar.jpg_640x640.jpg",
      imageTypes: [
        "https://ae04.alicdn.com/kf/S583ce3b6c8bd46ff9fa0913c1f7fb7f8T.jpg_640x640.jpg",
        "https://ae04.alicdn.com/kf/S19b6aafdef43472985bf866f80c9fde8a.jpg_640x640.jpg",
        "https://ae04.alicdn.com/kf/S2a34e3dab7ea4485b66050cc9c8afaedc.jpg_640x640.jpg",
      ],
    },
    {
      id: 2,
      title: "Leather chair cover",
      price: 140.8,
      type: "Sale",
      desc: "✔Please measure your sofa include armrests, then choose the size. If you don't measure include armrests, the sofa cover will be smaller than your sofa.",
      image: "https://ae04.alicdn.com/kf/S4ac689f2f90e4d5b9c6ecba60ef46209E.jpg_640x640.jpg",
      imageTypes: [
        "https://ae04.alicdn.com/kf/S16a71731c49c4db0a73a0b8bc68b8d8cU.jpg_640x640.jpg",
        "https://ae04.alicdn.com/kf/S75972be533b34ca5bf996686aa6307a4T.jpg_640x640.jpg",
        "https://ae04.alicdn.com/kf/Sf9aeccced4c54e4ca4aeeae47f6cd6b1b.jpg_640x640.jpg",
      ],
    },
    {
      id: 3,
      title: "Gaming ergonomic computer chair JOYLIVE Wcg",
      price: 500,
      type: "Top",
      desc: "✔Classic Design - Ergonomic gaming chair with classic appearance and suitable size, widely used for intense gaming activities, home leisure or working for a long time. Package Included: 1 x Gaming Chair 1 x assembly tool (You need to assemble it by yourself!)",
      image: "https://ae04.alicdn.com/kf/H528fa468cdda47f9afd7054bd9889d58y.jpg_640x640.jpg",
      imageTypes: [
        "https://ae04.alicdn.com/kf/S583ce3b6c8bd46ff9fa0913c1f7fb7f8T.jpg_640x640.jpg",
        "https://ae04.alicdn.com/kf/Ha3235a44157e44a1b033677d1464c9eeW.jpg_640x640.jpg",
        "https://ae04.alicdn.com/kf/H511bb1cd2b624b61bab50d1d07dcdc18O.jpg_640x640.jpg",
      ],
    },
    {
      id: 4,
      title: "Scandinavian style office chair",
      price: 240,
      type: "Sale",
      desc: "✔Brand name MODX Model number YSN553 Origin China Operating modes office furniture Style Executive Chairman Material Synthetic leather",
      image: "https://ae04.alicdn.com/kf/Sdab134e63867403998abc6d36a88ba44V.jpg",
      imageTypes: [
        "https://ae04.alicdn.com/kf/S583ce3b6c8bd46ff9fa0913c1f7fb7f8T.jpg_640x640.jpg",
        "https://ae04.alicdn.com/kf/Ha3235a44157e44a1b033677d1464c9eeW.jpg_640x640.jpg",
        "https://ae04.alicdn.com/kf/S08a5cbdad2b04235ba115d0dbceab9036.jpg_640x640.jpg",
      ],
    },
    {
      id: 5,
      title: "Fleece chair cover",
      price: 150.6,
      type: "Top",
      desc: "✔Made of stretchy thick fleece fabric, fine workmanship with dense and smooth short pile, which is breathable, will not wrinkle, pill or fade after washing, delicate texture for a very soft and strong touch without irritating the skin. Using our universal bath sofa cover can make your sofa look brand new, which can also easily create elegant household items for your home, much better than reupholstering.",
      image: "https://ae04.alicdn.com/kf/S583ce3b6c8bd46ff9fa0913c1f7fb7f8T.jpg_640x640.jpg",
      imageTypes: [
        "https://ae04.alicdn.com/kf/S7b0a787181b543d98b930119b52cfefar.jpg_640x640.jpg",
        "https://ae04.alicdn.com/kf/S19b6aafdef43472985bf866f80c9fde8a.jpg_640x640.jpg",
        "https://ae04.alicdn.com/kf/S2a34e3dab7ea4485b66050cc9c8afaedc.jpg_640x640.jpg",
      ],
    },
    {
      id: 6,
      title: "Leather chair cover",
      price: 140.8,
      type: "New",
      desc: "✔Please measure your sofa include armrests, then choose the size. If you don't measure include armrests, the sofa cover will be smaller than your sofa.",
      image: "https://ae04.alicdn.com/kf/S16a71731c49c4db0a73a0b8bc68b8d8cU.jpg_640x640.jpg",
      imageTypes: [
        "https://ae04.alicdn.com/kf/S4ac689f2f90e4d5b9c6ecba60ef46209E.jpg_640x640.jpg",
        "https://ae04.alicdn.com/kf/S75972be533b34ca5bf996686aa6307a4T.jpg_640x640.jpg",
        "https://ae04.alicdn.com/kf/Sf9aeccced4c54e4ca4aeeae47f6cd6b1b.jpg_640x640.jpg",
      ],
    },
    {
      id: 7,
      title: "Gaming ergonomic computer chair JOYLIVE Wcg",
      price: 500,
      type: "Top",
      desc: "✔Classic Design - Ergonomic gaming chair with classic appearance and suitable size, widely used for intense gaming activities, home leisure or working for a long time. Package Included: 1 x Gaming Chair 1 x assembly tool (You need to assemble it by yourself!)",
      image: "https://ae04.alicdn.com/kf/Ha3235a44157e44a1b033677d1464c9eeW.jpg_640x640.jpg",
      imageTypes: [
        "https://ae04.alicdn.com/kf/H528fa468cdda47f9afd7054bd9889d58y.jpg_640x640.jpg",
        "https://ae04.alicdn.com/kf/Ha3235a44157e44a1b033677d1464c9eeW.jpg_640x640.jpg",
        "https://ae04.alicdn.com/kf/H511bb1cd2b624b61bab50d1d07dcdc18O.jpg_640x640.jpg",
      ],
    },
    {
      id: 8,
      title: "Scandinavian style office chair",
      price: 240,
      type: "New",
      desc: "✔Brand name MODX Model number YSN553 Origin China Operating modes office furniture Style Executive Chairman Material Synthetic leather",
      image: "https://ae04.alicdn.com/kf/S08a5cbdad2b04235ba115d0dbceab9036.jpg_640x640.jpg",
      imageTypes: [
        "https://ae04.alicdn.com/kf/Sdab134e63867403998abc6d36a88ba44V.jpg",
        "https://ae04.alicdn.com/kf/Ha3235a44157e44a1b033677d1464c9eeW.jpg_640x640.jpg",
        "https://ae04.alicdn.com/kf/S08a5cbdad2b04235ba115d0dbceab9036.jpg_640x640.jpg",
      ],
    },
    {
      id: 9,
      title: "Fleece chair cover",
      price: 150.6,
      type: "New",
      desc: "✔Made of stretchy thick fleece fabric, fine workmanship with dense and smooth short pile, which is breathable, will not wrinkle, pill or fade after washing, delicate texture for a very soft and strong touch without irritating the skin. Using our universal bath sofa cover can make your sofa look brand new, which can also easily create elegant household items for your home, much better than reupholstering.",
      image: "https://ae04.alicdn.com/kf/S2a34e3dab7ea4485b66050cc9c8afaedc.jpg_640x640.jpg",
      imageTypes: [
        "https://ae04.alicdn.com/kf/S7b0a787181b543d98b930119b52cfefar.jpg_640x640.jpg",
        "https://ae04.alicdn.com/kf/S19b6aafdef43472985bf866f80c9fde8a.jpg_640x640.jpg",
        "https://ae04.alicdn.com/kf/S2a34e3dab7ea4485b66050cc9c8afaedc.jpg_640x640.jpg",
      ],
    },
    {
      id: 10,
      title: "Leather chair cover",
      price: 140.8,
      type: "Sale",
      desc: "✔Please measure your sofa include armrests, then choose the size. If you don't measure include armrests, the sofa cover will be smaller than your sofa.",
      image: "https://ae04.alicdn.com/kf/S75972be533b34ca5bf996686aa6307a4T.jpg_640x640.jpg",
      imageTypes: [
        "https://ae04.alicdn.com/kf/S4ac689f2f90e4d5b9c6ecba60ef46209E.jpg_640x640.jpg",
        "https://ae04.alicdn.com/kf/S75972be533b34ca5bf996686aa6307a4T.jpg_640x640.jpg",
        "https://ae04.alicdn.com/kf/Sf9aeccced4c54e4ca4aeeae47f6cd6b1b.jpg_640x640.jpg",
      ],
    },
    {
      id: 11,
      title: "Gaming ergonomic computer chair JOYLIVE Wcg",
      price: 500,
      type: "New",
      desc: "✔Classic Design - Ergonomic gaming chair with classic appearance and suitable size, widely used for intense gaming activities, home leisure or working for a long time. Package Included: 1 x Gaming Chair 1 x assembly tool (You need to assemble it by yourself!)",
      image: "https://ae04.alicdn.com/kf/H511bb1cd2b624b61bab50d1d07dcdc18O.jpg_640x640.jpg",
      imageTypes: [
        "https://ae04.alicdn.com/kf/H528fa468cdda47f9afd7054bd9889d58y.jpg_640x640.jpg",
        "https://ae04.alicdn.com/kf/Ha3235a44157e44a1b033677d1464c9eeW.jpg_640x640.jpg",
        "https://ae04.alicdn.com/kf/H511bb1cd2b624b61bab50d1d07dcdc18O.jpg_640x640.jpg",
      ],
    },
    {
      id: 12,
      title: "Scandinavian style office chair",
      price: 240,
      type: "Top",
      desc: "✔Brand name MODX Model number YSN553 Origin China Operating modes office furniture Style Executive Chairman Material Synthetic leather",
      image: "https://ae04.alicdn.com/kf/Sdab134e63867403998abc6d36a88ba44V.jpg",
      imageTypes: [
        "https://ae04.alicdn.com/kf/Sdab134e63867403998abc6d36a88ba44V.jpg",
        "https://ae04.alicdn.com/kf/Ha3235a44157e44a1b033677d1464c9eeW.jpg_640x640.jpg",
        "https://ae04.alicdn.com/kf/S08a5cbdad2b04235ba115d0dbceab9036.jpg_640x640.jpg",
      ],
    },
  ])

  const [cart, setCart] = useState([]);
  const [added, setAdded] = useState(true)
  const [login, setLogin] = useState(false)
  const [user, setUser] = useState("")
  const [name, setName] = useState("")


  return (
    <>
      <BrowserRouter>
        <Login login={login} setLogin={setLogin} setUser={setUser} user={user} setName={setName}/>
        <Navbar cart={cart} setCart={setCart} added={added} setAdded={setAdded} setLogin={setLogin} name={name} />
        <Routes>
          <Route path='/' element={<Home data={data} setData={setData} cart={cart} setCart={setCart}/>} />
          <Route path='/product/:id' element={<Product data={data} />} />
          <Route path='/product/added' element={<Added data={data} cart={cart} />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
