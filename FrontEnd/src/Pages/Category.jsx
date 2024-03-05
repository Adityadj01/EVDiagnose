import React, { useContext } from 'react'
import './CSS/Category.css'
import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Item/Item'

const Category = (props) => {
  const { all_product } = useContext(ShopContext);
  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={props.banner} alt="" />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopcategory-products">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return <Item key={i} id={item.id} name={item.name} image={item.image} />
          }
          else {
            return null;
          }
        })}
      </div>
      <div className="shopcategory-loadmore">
        Comming Soon
      </div>
    </div>
  )
}

export default Category