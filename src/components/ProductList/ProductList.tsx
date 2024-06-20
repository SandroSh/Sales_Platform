import './productList.css';
import Product from '../Product/Product';
import { ProductType, products } from '../../constants/data';
import { ChangeEvent, useState } from 'react';

const ProductsList = () => {

  const [data, setData] = useState<ProductType[]>(products);
  const [searchInput, setSearchInput] = useState<string>();
  const [priceRange, setPriceRange] = useState<string>();
  const [inSale, setInSale] = useState<string>();

  // Searching Product
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearchInput(e.target.value);
    if (e.target.value) {
      if (priceRange || inSale) {
        setData(data.filter((product) => product.name.toLowerCase().includes(e.target.value.toLowerCase())));
      } else {
        setData(products.filter((product) => product.name.toLowerCase().includes(e.target.value.toLowerCase())));
      }
    } else {
      setData(products);
    }

  }

  // Filtering by price
  const handlePriceFilterChange = (e: ChangeEvent<HTMLSelectElement>) => {
    if (!e.target.value) {
      setData(products);
      return;
    }
    setPriceRange(e.target.value);
    const [min, max] = e.target.value.split('-').map(Number);

    if (searchInput || inSale) {
      setData(data.filter(product => product.price >= min && (max ? product.price <= max : true)));
    } else {
      setData(products.filter(product => product.price >= min && (max ? product.price <= max : true)));
    }
  }


  // Filtering by if is in sale
  const handleSaleFilterChange = (e: ChangeEvent<HTMLSelectElement>) => {

    if (!e.target.value) {
      setData(products);
      return;
    }
    setInSale(e.target.value);

    const isInSale = e.target.value.split(' ')[0] === 'true' ? true : false;

    if (searchInput || priceRange) {
      setData(() => data.filter(product => product.isInSale === isInSale && product.inStock === true))
    } else {
      setData(() => products.filter(product => product.isInSale === isInSale && product.inStock === true))
    }
  }

  return (
    <div>

      <div style={{ width: '100%', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', }}>
        <h1>Discover New Products</h1>
        <div className='input-container'>
          <input type="text" placeholder='Search Product...' value={searchInput} onChange={(e) => handleSearch(e)} />
        </div>
        <div>
          <select id="priceFilter" value={priceRange} onChange={(e) => handlePriceFilterChange(e)}>
            <option value="">Filter by price</option>
            <option value="0-100">Under $100</option>
            <option value="100-300">$100 to $300</option>
            <option value="300-500">$300 to $500</option>
            <option value="500-1000">$500 to $1000</option>
            <option value="1000-">Above $1000</option>
          </select>
        </div>
        <div>
          <select id="isInsSaleFilter" value={inSale} onChange={(e) => handleSaleFilterChange(e)}>
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
