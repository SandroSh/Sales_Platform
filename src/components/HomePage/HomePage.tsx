import Navbar from "../Navbar/Navbar"
import ProductsList from "../ProductList/ProductList"
import './homePage.css'




const HomePage = () => {
  return (
    <div>
      <Navbar/>
      <div className="main-container">
        <ProductsList />
      </div>
    </div>

  )
}

export default HomePage