import React from 'react'
import { client } from '../lib/client';
import { Product, FooterBanner, HeroBanner} from '../components';

const Home = ({ products, bannerData }) => {
  return (
    <>

      <HeroBanner HeroBanner={bannerData.length && bannerData[0]}/>
      <div className='products-heading'>
          <h2>Best Selling Products</h2>
          <p>Speakers of many variations</p>
      </div>

      <div className='products-container'>
        {products?.map((product) => <Product key =
        {product._id} product={product} />)}
      </div>

      <FooterBanner footerBanner={bannerData.length && bannerData[0]}/>

    </>
  )
}

//to get data from the server side we use getServerSideProps in nextjs
export const getServerSideProps = async () => {
  
  //get product data
  const query = '*[_type == "product" ]';
  const products = await client.fetch(query);

  //get banner data
  const bannerQuery = '*[_type == "banner" ]';
  const bannerData = await client.fetch(bannerQuery);

  return{
    props: { products, bannerData}
  }
}

export default Home;