import './productList.css';
import Product from '../Product/Product';
import { ProductType, products } from '../../constants/data';
import { ChangeEvent, useState } from 'react';

const ProductsList = () => {

  const [data, setData] = useState<ProductType[]>(products);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.value) {
      const newData = products.filter((product) => product.name.toLowerCase().includes(e.target.value.toLowerCase()));
      setData(newData);
    } else {
      setData(products);
    }

  }

  const handlePriceFilterChange = (e: ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value);
    if (!e.target.value) {
      setData(products);
      return;
    }
    const [min, max] = e.target.value.split('-').map(Number);
    console.log(min, max);

    const FilteredData = products.filter(product => product.price >= min && (max ? product.price <= max : true));
    setData(FilteredData);
  }
  const handleSaleFilterChange = (e: ChangeEvent<HTMLSelectElement>) => {
    if (!e.target.value) {
      setData(products);
      return;
    }
    const isInSale = e.target.value.split(' ')[0] === 'true' ? true : false;
    
    setData(() => products.filter(product => product.isInSale === isInSale))
  }

  return (
    <div>

      <div style={{ width: '100%', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', }}>
        <h1>Discover New Products</h1>
        <div className='input-container'>
          <input type="text" placeholder='Search Product...' onChange={(e) => handleSearch(e)} />
        </div>
        <div>
          <select id="priceFilter" onChange={(e) => handlePriceFilterChange(e)}>
            <option value="">Filter by price</option>
            <option value="0-100">Under $100</option>
            <option value="100-300">$100 to $300</option>
            <option value="300-500">$300 to $500</option>
            <option value="500-1000">$500 to $1000</option>
            <option value="1000-">Above $1000</option>
          </select>
        </div>
        <div>
          <select id="priceFilter" onChange={(e) => handleSaleFilterChange(e)}>
            <option value="">Filter by sale</option>
            <option value="true">In Sale</option>
            <option value="false">Not in Sale</option>
          </select>
        </div>
      </div>


      <div className="products-list">
        {data.map((product, index) => (
          <Product key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
